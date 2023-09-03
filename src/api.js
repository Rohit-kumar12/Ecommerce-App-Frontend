import axios from "axios";
const auth = JSON.parse(localStorage.getItem("auth"));
export const api = axios.create({
  baseURL: "https://ecommerce-app-backend-cc5o.onrender.com",
  headers: { "Content-Type": "application/json", authorization: auth?.token },
});
