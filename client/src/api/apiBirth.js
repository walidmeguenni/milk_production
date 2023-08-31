import axios from "axios";
const API = axios.create({ baseURL: "http://localhost:4000" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("token")) {
    req.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  }
  return req;
});

export const fetchBirths = () =>
  API.get("/birth").then((res) => {
    return res.data.births;
  });
export const creatBirth = (newbirth) => API.post("/birth", newbirth);
export const updateBirth = (newbirth, id) => API.put(`/birth/${id}`, newbirth);
export const deleteBirth = (id) => API.delete(`/birth/${id}`);
