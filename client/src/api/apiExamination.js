import axios from "axios";
const API = axios.create({ baseURL: "http://localhost:4000" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("token")) {
    req.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  }
  return req;
});

export const fetchExaminations = () =>
  API.get("/examination").then((res) => {
    return res.data.examinations;
  });
export const creatExamination = (newexamination) =>
  API.post("/examination", newexamination);
export const updateExamination = (newexamination, id) =>
  API.put(`/examination/${id}`, newexamination);
export const deleteExamination = (id) => API.delete(`/examination/${id}`);
