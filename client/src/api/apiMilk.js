import axios from "axios";
const API = axios.create({ baseURL: "http://localhost:4000" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("token")) {
    req.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  }
  return req;
});

export const fetchMilks = () =>
  API.get("/milk").then((res) => {
    return res.data.milks;
  });
export const getGraph = () =>
  API.get("/milk/graph").then((res) => {
    return res.data;
  });
export const createMilk = (newmilk) => API.post("/milk", newmilk);
export const updateMilk = (newmilk, id) => API.put(`/milk/${id}`, newmilk);
export const deleteMilk = (id) => API.delete(`/milk/${id}`);
