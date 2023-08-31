import axios from "axios";
const API = axios.create({ baseURL: "http://localhost:4000" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("token")) {
    req.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  }
  return req;
});

export const fetchCows = () =>
  API.get("/cow").then((res) => {
    return res.data.cows;
  });

export const creatCow = (newCow) => API.post("/cow", newCow);
export const updateCow = (newCow, id) => API.put(`/cow/${id}`, newCow);
export const deleteCow = (id) => API.delete(`/cow/${id}`);
