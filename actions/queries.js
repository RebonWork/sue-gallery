"use client";
import axios from "axios";

export const getProductById = async (productId) => {
  const { data } = await axios.get(`/api/product/${productId}`);
  return data;
};
export const getProduct = async () => {
  const { data } = await axios.get(`/api/product/`);
  return data;
};
export const getCategory = async () => {
  const { data } = await axios.get(`/api/category`);
  return data;
};
export const getUser = async () => {
  const { data } = await axios.get(`/api/user`);
  return data;
};
export const getUserById = async (userId) => {
  const { data } = await axios.get(`/api/user/${userId}`);
  return data;
}
export const updateUserById = async ({user,userId}) => {
  const { data } = await axios.patch(`/api/user/${userId}`,user);
  return data;
}
export const deleteUserById = async ({userId}) => {
  const { data } = await axios.delete(`/api/user/${userId}`);
  console.log(data);
}
export const addUser = async () => {
  await axios.post(`/api/user`);
};

export const updateUser = async ({ data, userId }) => {
  await axios.patch(`/api/user/${userId}`, data);
};
export const addCategory = async (data) => {
  await axios.post(`/api/category`, data);
};
export const deleteCategory = async (id) => {
  await axios.delete(`/api/category/${id}`);
};
export const updateCategory = async ({ data, id }) => {
  await axios.patch(`/api/category/${id}`, data);
};
