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
export const updateStudent = (student, id) => {
  const url = `${config.localapi}student/${id}`;
  return http.put(url, student, {
    headers: {
      "x-auth-token": AdminToken,
    },
  });
};
