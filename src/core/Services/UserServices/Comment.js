import http from "./../httpService";
import config from "./../config.json";
const AdminToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzM0MzcxMTVmOThmNjAwMjA3ZTg0ODciLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NjQzNjY0MTF9.lbROmWujuWB26UaD2me5cjj6Cd1nUOf8CmXUGYhRaVI";

export const sendNewComment = (newComment) => {
  const url = `${config.localapi}comments/send`;
  return http.post(url, JSON.stringify(newComment));
};
export const verifyComment = (cmData) => {
  const url = `${config.localapi}comments/verify`;
  return http.post(url, JSON.stringify(cmData));
};
export const answerComment = (anData) => {
  const url = `${config.localapi}comments/answer`;
  return http.post(url, JSON.stringify(anData));
};
export const getCommentList = () => {
  const url = `${config.localapi}comments/`;
  return http.get(url);
};
export const getCourseByid = (courseId) => {
  const url = `${config.localapi}course/${courseId}`;
  return http.get(url);
};
export const getLessonByid = (lessonId) => {
  const url = `${config.localapi}lesson/${lessonId}`;
  return http.get(url);
};
export const addCoursestudent = (sid, cid) => {
  const url = `${config.localapi}course/addStudentToCourse/${sid}`;
  return http.post(url, JSON.stringify(cid), {
    headers: {
      "x-auth-token": AdminToken,
    },
  });
};
export const getLike = (cid) => {
  const url = `${config.localapi}course/likeCount/${cid}`;
  return http.get(url);
};
export const likeCourse = (userData) => {
  const url = `${config.localapi}course/like`;
  return http.post(url, JSON.stringify(userData), {
    headers: {
      "x-auth-token": AdminToken,
    },
  });
};
export const dislikeCourse = (userData) => {
  const url = `${config.localapi}course/dislike`;
  return http.post(url, JSON.stringify(userData), {
    headers: {
      "x-auth-token": AdminToken,
    },
  });
};
