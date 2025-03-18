import axios, { AxiosError } from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api',
});

// Add request interceptor to include auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    console.error('Request error:', error);
    return Promise.reject(error);
  }
);

// Add response interceptor to handle errors
api.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    if (error.response?.status === 401) {
      console.error('Authentication error:', error.response.data);
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      window.location.href = '/';
    } else if (error.response) {
      console.error('Response error:', {
        status: error.response.status,
        data: error.response.data,
        headers: error.response.headers,
      });
    } else if (error.request) {
      console.error('Request error:', error.request);
    } else {
      console.error('Error:', error.message);
    }
    return Promise.reject(error);
  }
);

// Auth APIs
export const login = async (email: string, password: string) => {
  try {
    const response = await api.post('/auth/login', { email, password });
    return response;
  } catch (error) {
    console.error('Login failed:', error);
    throw error;
  }
};

export const register = async (userData: {
  name: string;
  username: string;
  email: string;
  password: string;
  role?: string;
}) => {
  try {
    const response = await api.post('/auth/register', userData);
    return response;
  } catch (error) {
    console.error('Registration failed:', error);
    throw error;
  }
};

// Apartments APIs
export const getApartments = async () => {
  try {
    const response = await api.get('/apartments');
    return response;
  } catch (error) {
    console.error('Failed to fetch apartments:', error);
    throw error;
  }
};

export const createApartment = async (apartmentData: {
  name: string;
  description: string;
  image_url: string;
  distance: string;
  rating: number;
  reviews: number;
  price: string;
}) => {
  try {
    const response = await api.post('/apartments', apartmentData);
    return response;
  } catch (error) {
    console.error('Failed to create apartment:', error);
    throw error;
  }
};

export const deleteApartment = async (id: number) => {
  try {
    const response = await api.delete(`/apartments/${id}`);
    return response;
  } catch (error) {
    console.error('Failed to delete apartment:', error);
    throw error;
  }
};

// Reservations APIs
export const createReservation = async (reservationData: {
  apartment_id: number;
  check_in: string;
  check_out: string;
  total_price: number;
}) => {
  try {
    const response = await api.post('/reservations', reservationData);
    return response;
  } catch (error) {
    console.error('Failed to create reservation:', error);
    throw error;
  }
};

export const getReservations = async () => {
  try {
    const response = await api.get('/reservations');
    return response;
  } catch (error) {
    console.error('Failed to fetch reservations:', error);
    throw error;
  }
};

export const deleteReservation = async (id: number) => {
  try {
    const response = await api.delete(`/reservations/${id}`);
    return response;
  } catch (error) {
    console.error('Failed to delete reservation:', error);
    throw error;
  }
};