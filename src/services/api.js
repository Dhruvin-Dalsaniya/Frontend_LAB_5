import axios from "axios";

// Pointing to YOUR Node.js backend!
const API = axios.create({
  baseURL: "http://localhost:3000" 
});

export const getProducts = () => API.get("/products");
export const getProduct = (id) => API.get(`/products/${id}`);