// dataApi.js
const apiUrl = 'http://localhost:3000/user';

export const getUserData = async (userId) => {
  const response = await fetch(`${apiUrl}/${userId}`);
  return response.json();
};

export const getAverageSessionsData = async (userId) => {
  const response = await fetch(`${apiUrl}/${userId}/average-sessions`);
  return response.json();
};

export const getPerformanceData = async (userId) => {
  const response = await fetch(`${apiUrl}/${userId}/performance`);
  return response.json();
};

export const getActivityData = async (userId) => {
  const response = await fetch(`${apiUrl}/${userId}/activity`);
  return response.json();
};
