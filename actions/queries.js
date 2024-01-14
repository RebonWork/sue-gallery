"use client"
import axios from "axios"

export const getProduct = async (productId) => {
  const {data} = await axios.get(`/api/product/${productId}`)
  return data
}