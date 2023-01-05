import http from "./../httpService";
import config from "./../config.json";
const AdminToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzRkNzY5YTExY2JhMzM2MDhlODQ1NWIiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2Njc3MTgzNjN9.vTlb1lafI4L887y_LeARev_50kMgW7zv_JLznqIUC5E";
export const getStudentByid = (studentId) => {
  const url = `${config.localapi}student/${studentId}`;
  return http.get(url, {
    headers: {
      "x-auth-token": AdminToken,
    },
  });
};
export const updateStudent = (student, studentId) => {
  const url = `${config.localapi}student/${studentId}`;
  return http.put(url, student);
};
export const addStudent = (user) => {
  const url = `${config.localapi}auth/register`;
  return http.post(url, JSON.stringify(user));
};
export const getAllStudent = () => {
  const url = `${config.localapi}student/getall`;
  return http.get(url, {
    headers: {
      "x-auth-token": AdminToken,
    },
  });
};
export const deleteStudent = (studentId) => {
  const url = `${config.localapi}student/${studentId}`;
  return http.delete(url, {
    headers: {
      "x-auth-token": AdminToken,
    },
  });
};
export const activeStudent = (studentId) => {
  const url = `${config.localapi}student/active/${studentId}`;
  return http.put(url);
};
export const deActiveStudent = (studentId) => {
  const url = `${config.localapi}student/deactive/${studentId}`;
  return http.put(url);
};
