import { apiClient } from './api.client';

export const loginUser = async (credentials: any) => {
  const response = await apiClient.post('/auth/login', credentials);
  return response.data;
};

export const registerUser = async (userData: any) => {
  const response = await apiClient.post('/auth/register', userData);
  return response.data;
};

export const logoutUser = async () => {
  const response = await apiClient.post('/auth/logout');
  return response.data;
};

export const loginWithGoogle = async (idToken: string) => {
  const response = await apiClient.post('/auth/google', { idToken });
  return response.data;
};

export const getSession = async () => {
  // Use refresh endpoint to check/renew session
  const response = await apiClient.post('/auth/refresh');
  return response.data;
};
