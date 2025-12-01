import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/auth';

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
});

// interceptor to automatically include JWT token
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export const authService = {
  
  createUser: async (userData) => {
    console.log(userData)
    const response = await axiosInstance.post(
        `/signup`, 
        userData,               
        {
            headers: {
                "Content-Type": "application/json",
            },
        }
    );
    return response;
  },

  login: async (loginData) => {
    console.log(loginData)
    const response = await axiosInstance.post(
        `/login`, 
        loginData,               
        {
            headers: {
                "Content-Type": "application/json",
            },
        }
    );
    return response;
  },

};