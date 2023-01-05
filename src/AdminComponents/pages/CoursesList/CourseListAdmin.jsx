import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  faPen,
  faTrash,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import {
  coursesList,
  deleteCourse,
} from "../../../core/Services/AdminServices/AdminPanelServices";
import Sidebar from "./../../../AdminComponents/components/Sidebar/Sidebar";
import { toast } from "react-toastify";
import { confirmAlert } from "react-confirm-alert";

const CourseListAdmin = () => {
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);

  const LoadData = async () => {
    try {
      const { data } = await coursesList();
      const result = data.result;
      setCourses(result);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    LoadData();
  }, []);
  const cId = courses._id;
  const deleteStudents = async (cId) => {
    try {
      const { status } = await deleteCourse(cId);
      if (status === 200) {
        toast.success("ترم با موفقیت حذف شد", {
          position: "top-right",
          closeOnClick: "true",
        });
        LoadData();
      }
    } catch (error) {
      toast.error("مشکلی پیش آمده است", {
        position: "top-right",
        closeOnClick: "true",
      });
    }
  };
  const confirm = (item) => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div
            dir="rtl"
            className="p-4"
            style={{ backgroundColor: "cadetblue", borderRadius: "1em" }}
          >
            <h1 style={{ color: "white" }}>پاک کردن؟</h1>
            <p className="p-2" style={{ color: "white" }}>
              {" "}
              آیا میخواهی {item.title} پاک کنی؟{" "}
            </p>
            <button
              className="btn mx-2"
              style={{ backgroundColor: "green", color: "white" }}
              onClick={() => {
                deleteStudents(item._id);
                onClose();
              }}
            >
              بله مطمئن هستم!
            </button>
            <button
              onClick={onClose}
              className="btn"
              style={{ backgroundColor: "red", color: "white" }}
            >
              انصراف
            </button>
          </div>
        );
      },
    });
  };
  const courseEdit = (item) => {
    navigate({
      pathname: `/app/UpdateCourse/${item._id}`,
      state: item,
    });
  };
  const checkStudent = (item) => {
    navigate({
      pathname: `/app/studentsCourse/${item._id}`,
      state: item,
    });
  };
  const CourseComment = (item) => {
    navigate({
      pathname: `/app/LessonComment/${item._id}`,
      state: item,
    });
  };
  return (
    <div className="container">
      <div className="row">
        <Sidebar />
        <div className="col-12 col-md-9 content">
          <div className="profile">
            <h4 className="dashboardAdmin">ترم ها</h4>
            <div className="userDashboard">
              <table className="table table-striped table-hover table-responsive">
                <thead>
                  <tr>
                    <th className="adminListDetail">دانشجو</th>
                    <th className="adminListDetail">ویرایش</th>
                    <th className="adminListDetail">حذف</th>
                    <th className="adminListDetail">کامنت</th>
                    <th className="adminListDetail">تاریخ شروع</th>
                    <th className="adminListDetail">ظرفیت</th>
                    <th className="adminListDetail">استاد</th>
                    <th className="adminListDetail">قیمت</th>
                    <th className="adminListDetail">نام</th>
                  </tr>
                </thead>
                <tbody>
                  {courses.map((item) => (
                    <tr key={item._id}>
                      <th className="adminListDetail">
                        <FontAwesomeIcon
                          icon={faUser}
                          style={{ color: "#828a8f", cursor: "pointer" }}
                          onClick={() => checkStudent(item)}
                        />
                      </th>
                      <th className="adminListDetail">
                        <FontAwesomeIcon
                          icon={faPen}
                          style={{ color: "#828a8f", cursor: "pointer" }}
                          onClick={() => courseEdit(item)}
                        />
                      </th>
                      <th className="adminListDetail">
                        <FontAwesomeIcon
                          icon={faTrash}
                          style={{ color: "#828a8f", cursor: "pointer" }}
                          onClick={() => confirm(item)}
                        />
                      </th>
                      <th className="adminListDetail">
                        <FontAwesomeIcon
                          icon={faComment}
                          style={{ color: "#828a8f", cursor: "pointer" }}
                          onClick={() => CourseComment(item)}
                        />
                      </th>
                      <th className="adminListDetail">
                        {item.startDate.slice(0, 10)}
                      </th>
                      <th className="adminListDetail">{item.capacity}</th>
                      <th className="adminListDetail">
                        {item.teacher.fullName}
                      </th>
                      <th className="adminListDetail">{item.cost}</th>
                      <th className="adminListDetail">{item.title}</th>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseListAdmin;
