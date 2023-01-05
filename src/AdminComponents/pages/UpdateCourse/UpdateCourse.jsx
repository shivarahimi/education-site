import React, { Fragment, useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { getCourseByid } from "../../../core/Services/UserServices/Comment";
import {
  updateCourses,
  allTeacher,
} from "./../../../core/Services/AdminServices/AdminPanelServices";
import { toast } from "react-toastify";
import Sidebar from "./../../components/Sidebar/Sidebar";
import { getAllLesson } from "./../../../core/Services/UserServices/Landing";

const UpdateCourse = () => {
  const navigate = useNavigate();
  const { courseAdminId } = useParams();
  const [course, setCourse] = useState({
    lesson: {
      lessonName: "",
      _id: "",
    },
    teacher: {
      fullName: "",
      _id: "",
    },
  });
  const [lesson, setLesson] = useState([]);

  const detaileCourse = async () => {
    try {
      const { data } = await getCourseByid(courseAdminId);
      const result = data.result;
      setCourse(result);
    } catch (error) {
      console.log(error);
    }
  };
  const [teach, setTeach] = useState([]);
  const showTeacher = async () => {
    try {
      const { data } = await allTeacher();
      const result = data.result;
      setTeach(result);
    } catch (error) {
      console.log(error);
    }
  };
  const showLesson = async () => {
    try {
      const { data } = await getAllLesson();
      const result = data.result;
      setLesson(result);
    } catch (error) {
      console.log(error);
    }
  };
  const { pathname } = useLocation();

  useEffect(() => {
    detaileCourse();
    showTeacher();
    showLesson();
  }, [pathname]);

  const changeInput = (key, e) => {
    // eslint-disable-next-line default-case
    switch (key) {
      case "title":
        setCourse({ ...course, title: e.target.value });
        break;
      case "cost":
        setCourse({ ...course, cost: e.target.value });
        break;
      case "capacity":
        setCourse({ ...course, capacity: e.target.value });
        break;
      case "teacher":
        setCourse({ ...course, teacher: e.target.value });
        break;
      case "lesson":
        setCourse({ ...course, lesson: e.target.value });
        break;
      case "endDate":
        setCourse({ ...course, endDate: e.target.value });
        break;
      case "startDate":
        setCourse({ ...course, startDate: e.target.value });
        break;
    }
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const courses = {
      title: course.title,
      cost: course.cost,
      endDate: course.endDate,
      startDate: course.startDate,
      capacity: course.capacity,
      teacher: course.teacher,
      lesson: course.lesson,
    };
    try {
      const { status, data } = await updateCourses(courses, courseAdminId);
      if (data) {
        navigate("/app/CourseList");
      }
      if (status === 200) {
        toast.success("ترم با موفقیت ویرایش شد", {
          position: "top-right",
          closeOnClick: "true",
        });
      }
    } catch (ex) {
      toast.error("مشکلی پیش آمده است", {
        position: "top-right",
        closeOnClick: "true",
      });
    }
  };
  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <Sidebar />
          <form className="col-md-9 content" onSubmit={handleSubmit}>
            <div className="profile">
              <h4 className="updateInformationAdmin">ویرایش ترم</h4>
              <div className="userInformation">
                <div className="row">
                  <div className="col-md-6 email">
                    <input
                      className="typeFormPanel"
                      type="number"
                      name="cost"
                      placeholder="cost"
                      value={course.cost}
                      onChange={(e) => changeInput("cost", e)}
                    />
                  </div>
                  <div className="col-md-6" id="call">
                    <input
                      className="typeFormPanel"
                      type="text"
                      name="title"
                      placeholder="title"
                      value={course.title}
                      onChange={(e) => changeInput("title", e)}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4" id="email">
                    <input
                      className="typeFormPanel"
                      type="text"
                      name="startDate"
                      placeholder="startDate"
                      value={course.startDate && course.startDate.slice(0, 10)}
                      onChange={(e) => changeInput("startDate", e)}
                    />
                  </div>
                  <div className="col-md-4" id="call">
                    <input
                      className="typeFormPanel"
                      type="text"
                      name="endDate"
                      placeholder="endDate"
                      value={course.endDate && course.endDate.slice(0, 10)}
                      onChange={(e) => changeInput("endDate", e)}
                    />
                  </div>
                  <div className="col-md-4" id="call">
                    <input
                      className="typeFormPanel"
                      type="number"
                      name="capacity"
                      placeholder="capacity"
                      value={course.capacity}
                      onChange={(e) => changeInput("capacity", e)}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-2">
                    <select
                      style={{ textAlign: "right" }}
                      onChange={(e) => changeInput("teacher", e)}
                    >
                      <option value={course.teacher._id}>
                        {course.teacher.fullName}
                      </option>
                      {teach.map((item) => (
                        <option value={item._id}>{item.fullName}</option>
                      ))}
                    </select>
                  </div>
                  <div className="col-md-6">
                    <select
                      style={{ textAlign: "right" }}
                      onChange={(e) => changeInput("lesson", e)}
                    >
                      <option value={course.lesson._id}>
                        {course.lesson.lessonName}
                      </option>
                      {lesson.map((item) => (
                        <option value={item._id}>{item.lessonName}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <button className="updateAdmin" type="submit">
                  ویرایش
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default UpdateCourse;
