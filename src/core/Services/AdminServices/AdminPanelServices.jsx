import http from "./../httpService";
import config from "./../config.json";
const AdminToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzM0MzcxMTVmOThmNjAwMjA3ZTg0ODciLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NjQzNjY0MTF9.lbROmWujuWB26UaD2me5cjj6Cd1nUOf8CmXUGYhRaVI";

export const ListNews = () => {
  const url = `${config.localapi}news`;
  return http.get(url);
};
export const addNew = (info) => {
  const url = `${config.localapi}news/`;
  return http.post(url, info);
};
export const deleteNew = (id) => {
  const url = `${config.localapi}news/${id}`;
  return http.delete(url);
};
export const updateNew = (info, id) => {
  const url = `${config.localapi}news/${id}`;
  return http.put(url, info);
};
export const getLessons = () => {
  const url = `${config.localapi}lesson`;
  return http.get(url);
};
export const addLessons = (info) => {
  const url = `${config.localapi}lesson/add`;
  return http.post(url, info);
};
export const editLesson = (info, id) => {
  const url = `${config.localapi}lesson/${id}`;
  return http.put(url, info);
};
export const deleteLesson = (id) => {
  const url = `${config.localapi}lesson/${id}`;
  return http.delete(url);
};
export const coursesList = () => {
  const url = `${config.localapi}course/getall`;
  return http.get(url);
};
export const addCourses = (info) => {
  const url = `${config.localapi}course/`;
  return http.post(url, info, {
    headers: {
      "x-auth-token": AdminToken,
    },
  });
};
export const updateCourses = (info, id) => {
  const url = `${config.localapi}course/${id}`;
  return http.put(url, info, {
    headers: {
      "x-auth-token": AdminToken,
    },
  });
};
export const deleteCourse = (id) => {
  const url = `${config.localapi}course/${id}`;
  return http.delete(url, {
    headers: {
      "x-auth-token": AdminToken,
    },
  });
};
export const deleteStudentFromCourse = (id, cId) => {
  const url = `${config.localapi}course/removeStudentFromCourse/${id}`;
  return http.post(url, JSON.stringify(cId) ,{
    headers: {
      "x-auth-token": AdminToken,
    },
  });
};
export const addStudentToCourse = (id, cId) => {
  const url = `${config.localapi}course/addStudentToCourse/${id}`;
  return http.post(url, JSON.stringify(cId), {
    headers: {
      "x-auth-token": AdminToken,
    },
  });
};
export const allTeacher = () => {
  const url = `${config.localapi}employee/getallteachers`;
  return http.get(url);
};
export const getStudentList = () => {
  const url = `${config.localapi}student/getall`;
  return http.get(url);
};
