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
export const addCategory = async (data) => {
  await axios.post(`/api/category`, data);
};
export const deleteCategory = async (id) => {
  await axios.post(`/api/category/${id}`);
};
export const updateCategory = async ({data, id}) => {
  await axios.patch(`/api/category/${id}`, data);
};
