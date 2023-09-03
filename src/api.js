import axios from "axios";
const auth = JSON.parse(localStorage.getItem("auth"));
export const api = axios.create({
  baseURL: "http://localhost:8080",
  headers: { "Content-Type": "application/json", "authorization": auth?.token },
});
