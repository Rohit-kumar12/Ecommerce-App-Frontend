import axios from "axios";

export const api = axios.create({
  baseURL: "https://ecommerce-app-backend-cc5o.onrender.com",
  headers: { "Content-Type": "application/json" },
});
