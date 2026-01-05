import axios from "axios";

const BASE_URL = "http://localhost:5000/students";

// GET students
export const fetchStudentsAPI = () => {
  return axios.get(BASE_URL);
};

// POST new student
export const addStudentAPI = (student) => {
  return axios.post(BASE_URL, student);
};

// PUT update student
export const updateStudentAPI = (student) => {
  return axios.put(`${BASE_URL}/${student.id}`, student);
};

// DELETE student
export const deleteStudentAPI = (id) => {
  return axios.delete(`${BASE_URL}/${id}`);
};
