import { apiClient } from './api.client';

export const fetchCourses = async () => {
  const response = await apiClient.get('/courses');
  return response.data;
};

export const fetchCourseBySlug = async (slug: string) => {
  const response = await apiClient.get(`/courses/${slug}`);
  return response.data;
};
