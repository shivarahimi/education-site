import http from "./../httpService";
import config from "./../config.json";
const AdminToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzRkNzY5YTExY2JhMzM2MDhlODQ1NWIiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2Njc3MTgzNjN9.vTlb1lafI4L887y_LeARev_50kMgW7zv_JLznqIUC5E";
export const addAdmin = (AdminData) => {
  const url = `${config.localapi}auth/employee/register`;
  return http.post(url, JSON.stringify(AdminData));
};
export const getAdminByid = (id) => {
  const url = `${config.localapi}employee/${id}`;
  return http.get(url, {
    headers: {
      "x-auth-token": AdminToken,
    },
  });
};
export const getTeacherByid = (id) => {
  const url = `${config.localapi}employee/${id}`;
  return http.get(url, {
    headers: {
      "x-auth-token": AdminToken,
    },
  });
};
export const getAllAdmin = () => {
  const url = `${config.localapi}employee/getall`;
  return http.get(url, {
    headers: {
      "x-auth-token": AdminToken,
    },
  });
};
export const updateAdmin = (admin, id) => {
  const url = `${config.localapi}employee/${id}`;
  return http.put(url, admin, {
    headers: {
      "x-auth-token": AdminToken,
    },
  });
};
export const activeEmployee = (id) => {
  const url = `${config.localapi}employee/active/${id}`;
  return http.put(url);
};
export const deactiveEmployee = (id) => {
  const url = `${config.localapi}employee/deactive${id}`;
  return http.put(url);
};
export const deleteAdmin = (id) => {
  const url = `${config.localapi}employee/${id}`;
  return http.delete(url, {
    headers: {
      "x-auth-token": AdminToken,
    },
  });
};
