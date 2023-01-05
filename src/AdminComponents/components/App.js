import React from "react";
import { Offline } from "react-detect-offline";
import { Navigate, Route, Routes } from "react-router-dom";
// import {BrowserRouter as Router,Routes,Route,Navigate} from 'react-router-dom'

import Login from "./../../AdminComponents/pages/login/Login";

import MainPage from "./../../UserComponents/Main/MainPage";
import CourseList from "../../UserComponents/Main/UserContent/CourseList";
import CoursePage from "../../UserComponents/Main/UserContent/CoursePage/CoursePage";
import LoginUser from "../../UserComponents/Main/UserContent/Login/LoginUser";
import NewsList from "../../UserComponents/Main/UserContent/NewsList/NewsList";
import RegisterUser from "../../UserComponents/Main/UserContent/Register/RegisterUser";
import UserDashboard from "./../../UserComponents/UserPanel/UserDashboard";
import UserInformation from "./../../UserComponents/UserPanel/UserInformation";
import NewsPage from "./../../UserComponents/Main/UserContent/NewsPage/NewsPage";
import ForgetPassword from "../../UserComponents/Main/UserContent/ForgetPassword/ForgetPassword";
import UserCourse from "./../../UserComponents/UserPanel/UserCourse";
import Teachers from "./../../UserComponents/Main/UserContent/Teachers/Teachers";
import TeacherPage from "./../../UserComponents/Main/UserContent/TeacherPage/TeacherPage";
import ContactUs from "./../../UserComponents/Main/UserContent/ContactUs/ContactUs";
import Error from "../pages/error/Error";

import Dashboard from "./../pages/dashboard/Dashboard";
import AddAdmin from "./../pages/AdminManage/AddAdmin/AddAdmin";
import AdminList from "./../pages/AdminManage/AdminList/AdminList";
import AddStudent from "./../pages/StudentsManage/AddStudent/AddStudent";
import AddCourse from "./../pages/AddCourse/AddCourse";
import AddLesson from "./../pages/AddLesson/AddLesson";
import AddNews from "./../pages/AddNews/AddNews";
import StudentsList from "./../pages/StudentsManage/StudentsList/StudentsList";
import CourseListAdmin from "./../pages/CoursesList/CourseListAdmin";
import LessonListAdmin from "./../pages/LessonList/LessonListAdmin";
import NewsListAdmin from "./../pages/NewsList/NewsListAdmin";
import EditAdmin from "./../pages/AdminManage/EditAdmin/EditAdmin";
import EditStudent from "./../pages/StudentsManage/EditStudent/EditStudent";
import UpdateCourse from "./../pages/UpdateCourse/UpdateCourse";
import CommentList from "./../pages/CommentList/CommentList";
import StudentsCourse from "./../pages/StudentsCourse/StudentsCourse";
import EditeNews from "../pages/EditNews/EditeNews";
import EditeLesson from "./../pages/EditCourse/EditeLesson";
import LessonComment from "./../pages/LessonComment/LessonComment";
import Logout from "../pages/Logout/Logout";
import ShoppingPage from "../../UserComponents/Main/Shopping/ShoppingPage";
import PrivateUser from "./PrivateUser";
import PrivateAdmin from "./PrivateAdmin";

const App = () => {
  return (
    <div>
      <Offline>
        <div className="checkOnline">Check Your Network</div>
      </Offline>
      <Routes>
        <Route
          path="/admin"
          element={<Navigate replace to="/app/dashboard" />}
        />
        <Route
          path="/home/app/dashboard"
          element={<Navigate replace to="/app/dashboard" />}
        />
        <Route
          path="/home/courseList/app/dashboard"
          element={<Navigate replace to="/app/dashboard" />}
        />
        <Route
          path="/home/newsList/app/dashboard"
          element={<Navigate replace to="/app/dashboard" />}
        />
        <Route path="/app" element={<Navigate replace to="/app/dashboard" />} />

        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />

        <Route path="/" element={<Navigate replace to="/home" />} />

        <Route path="/loginAdmin" element={<Login />} />

        <Route path="/home" element={<MainPage />} />
        <Route path="/home/login" element={<LoginUser />} />
        <Route path="/home/register" element={<RegisterUser />} />
        <Route path="/home/forgetpassword" element={<ForgetPassword />} />
        <Route path="/home/courseList" element={<CourseList />} />
        <Route path="/home/courseList/:courseId" element={<CoursePage />} />
        <Route path="/home/newsList" element={<NewsList />} />
        <Route path="/home/newsList/:newsId" element={<NewsPage />} />
        <Route path="/home/teachers" element={<Teachers />} />
        <Route path="/home/teachers/:teacherId" element={<TeacherPage />} />
        <Route path="/home/contactUs" element={<ContactUs />} />
        <Route path="/home/shoppingPage" element={<ShoppingPage />} />
        <Route path="*" element={<Error />} />

        {/* userPanel */}
        <Route element={<PrivateUser />}>
          <Route path="/userPanel/userDashboard" element={<UserDashboard />} />
          <Route
            path="/userPanel/userInformation"
            element={<UserInformation />}
          />
          <Route path="/userPanel/userCourse" element={<UserCourse />} />
        </Route>

        {/* adminPanel */}
        <Route element={<PrivateAdmin />}>
          <Route path="/app/dashboard" element={<Dashboard />} />
          <Route path="/app/AdminManage/AddAdmin" element={<AddAdmin />} />
          <Route path="/app/AdminManage/AdminsList" element={<AdminList />} />
          <Route
            path="/app/AdminManage/EditAdmin/:adminId"
            element={<EditAdmin />}
          />
          <Route
            path="/app/StudentsManage/AddStudent"
            element={<AddStudent />}
          />
          <Route
            path="/app/StudentsManage/StudentsList"
            element={<StudentsList />}
          />
          <Route
            path="/app/StudentsManage/EditStudent/:studentId"
            element={<EditStudent />}
          />
          <Route path="/app/AddCourse" element={<AddCourse />} />
          <Route path="/app/CourseList" element={<CourseListAdmin />} />
          <Route
            path="/app/UpdateCourse/:courseAdminId"
            element={<UpdateCourse />}
          />
          <Route
            path="/app/studentsCourse/:courseId"
            element={<StudentsCourse />}
          />

          <Route path="/app/AddNews" element={<AddNews />} />
          <Route path="/app/NewsListAdmin" element={<NewsListAdmin />} />
          <Route path="/app/EditeNews/:newsAdminId" element={<EditeNews />} />

          <Route path="/app/AddLesson" element={<AddLesson />} />
          <Route path="/app/LessonList" element={<LessonListAdmin />} />
          <Route
            path="/app/EditeLesson/:lessonAdminId"
            element={<EditeLesson />}
          />
          <Route path="/app/CommentList" element={<CommentList />} />
          <Route
            path="/app/LessonComment/:lessonCommentId"
            element={<LessonComment />}
          />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
