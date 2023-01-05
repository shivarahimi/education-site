import React, { useEffect, useState } from "react";
import { createContext } from "react";
import { ListNews } from "../../core/Services/AdminServices/AdminPanelServices";
import { getCommentList } from "../../core/Services/UserServices/Comment";
import { getAllCourse } from "../../core/Services/UserServices/Landing";
import { getAllStudent } from "./../../core/Services/AdminServices/StudentServices";
import { allTeacher } from "./../../core/Services/AdminServices/AdminPanelServices";

export const StateContext = createContext();
const StateContextProvider = ({ children }) => {
  const [courses, setCourses] = useState([]);
  const [comments, setComments] = useState([]);
  const [news, setNews] = useState([]);
  const [totalPost, setTotalPost] = useState();
  const [teachers, setTeachers] = useState([]);
  const allCourses = async () => {
    try {
      const { data } = await getAllCourse();
      const result = data.result;
      setCourses(result);
    } catch (error) {
      console.log(error);
    }
  };
  const allComments = async () => {
    try {
      const { data } = await getCommentList();
      setComments(data);
    } catch (error) {
      console.log(error);
    }
  };
  const allNews = async () => {
    try {
      const { data } = await ListNews();
      const result = data.result;
      setNews(result);
      setTotalPost(result.length);
    } catch (error) {
      console.log(error);
    }
  };
  const Teachers = async () => {
    try {
      const { data } = await allTeacher();
      const result = data.result;
      setTeachers(result);
    } catch (error) {
      console.log(error);
    }
  };

  // const allStudents = async () => {
  //     try {
  //         const {data} = await getAllStudent()
  //         const result = data.result
  //         setStudents(result)
  //     } catch (error) {
  //         console.log(error);
  //     }
  // }

  useEffect(() => {
    allCourses();
    allComments();
    allNews();
    Teachers();
    // allTeacher()
    // allStudents()
  }, []);
  return (
    <StateContext.Provider
      value={{
        allCourses,
        courses,
        setCourses,
        allComments,
        comments,
        setComments,
        news,
        totalPost,
        teachers,
        Teachers,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export default StateContextProvider;
