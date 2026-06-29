import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_BACKEND_API_URL || 'http://localhost:5000/api/v1';

export const apiClient = axios.create({
  baseURL: API_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Helper to dispatch global loading events
const dispatchLoadingEvent = (eventName: 'api-request-start' | 'api-request-end') => {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new CustomEvent(eventName));
  }
};

// Interceptor to add access token and trigger loading
apiClient.interceptors.request.use(
  (config) => {
    dispatchLoadingEvent('api-request-start');
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('accessToken');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => {
    dispatchLoadingEvent('api-request-end');
    return Promise.reject(error);
  }
);

// Interceptor to handle expired tokens, refresh them, and hide loading
apiClient.interceptors.response.use(
  (response) => {
    dispatchLoadingEvent('api-request-end');
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    
    // Check if it's a 401 and we haven't retried yet
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        // Call refresh endpoint to obtain a new access token
        const response = await axios.post(
          `${API_URL}/auth/refresh`,
          {},
          { withCredentials: true }
        );
        if (response.data?.success && response.data?.accessToken) {
          const newToken = response.data.accessToken;
          localStorage.setItem('accessToken', newToken);
          originalRequest.headers.Authorization = `Bearer ${newToken}`;
          
          // Re-request and make sure it triggers loading cycle correctly
          return apiClient(originalRequest);
        }
      } catch (refreshError) {
        if (typeof window !== 'undefined') {
          localStorage.removeItem('accessToken');
        }
      }
    }

    dispatchLoadingEvent('api-request-end');
    return Promise.reject(error);
  }
);
