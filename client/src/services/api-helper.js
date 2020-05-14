import axios from 'axios';

const baseUrl = process.env.NODE_ENV !== 'production' ? /* link to your heroku app. Example:*/'https://hangry-helper-api.herokuapp.com' : 'http://localhost:3000' 

const api = axios.create({
  baseURL: baseUrl
})



export const loginUser = async (loginData) => {
  const resp = await api.post('/auth/login', { auth: loginData });
  localStorage.setItem('authToken', resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`;
  return resp.data.user;
}

export const registerUser = async (registerData) => {
  const resp = await api.post('/users', { user: registerData });
  localStorage.setItem('authToken', resp.data.token);
  api.defaults.headers.common.authorization = `Bearer ${resp.data.token}`;
  return resp.data.user;
}

export const verifyUser = async () => {
  const token = localStorage.getItem('authToken');
  if (token) {
    api.defaults.headers.common.authorization = `Bearer ${token}`;
    const resp = await api.get('/auth/verify');
    return resp.data;
  }
  return null;
}

export const removeToken = () => {
  api.defaults.headers.common.authorization = null;
}



export const getAllCategories = async () => {
  const resp = await api.get('/categories');
  return resp.data;
}

export const getAllRestaurants = async () => {
  const resp = await api.get('/restaurants');
  return resp.data;
}


export const getOneRestaurant = async (id) => {
  const resp = await api.get(`/restaurants/${id}`);
  return resp.data;
}

export const postRestaurant = async (ResData) => {
  const resp = await api.post('/restaurants', ResData);
  return resp.data;
}

export const putRestaurant = async (id, ResData) => {
  const resp = await api.put(`/restaurants/${id}`, ResData);
  return resp.data;
}

export const destroyRestaurant = async (id) => {
  const resp = await api.delete(`/restaurants/${id}`);
  return resp;
}

export const addCategory = async (catId, resId) => {
  const resp = await api.get(`/categories/${catId}/restaurants/${resId}`)
  return resp.data;
}
