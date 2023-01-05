import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "../../components/Sidebar/Sidebar";
import {
  deleteLesson,
  getLessons,
} from "../../../core/Services/AdminServices/AdminPanelServices";
import { toast } from "react-toastify";
import { confirmAlert } from "react-confirm-alert";
import GoToTop from "../../components/GoToTop/GoToTop";

const LessonListAdmin = () => {
  const navigate = useNavigate();
  const [lessons, setLessons] = useState([]);

  const LoadData = async () => {
    try {
      const { data } = await getLessons();
      const result = data.result;
      setLessons(result);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    LoadData();
  }, []);
  const lId = lessons._id;
  const deleteStudents = async (lId) => {
    try {
      const { status } = await deleteLesson(lId);
      if (status === 200) {
        toast.success("دوره با موفقیت حذف شد", {
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
              آیا میخواهی {item.lessonName} پاک کنی؟
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
  const lessonEdit = (item) => {
    navigate({
      pathname: `/app/EditeLesson/${item._id}`,
      state: item,
    });
  };
  return (
    <div className="container">
      <div className="row">
        <Sidebar />
        <div className="col-12 col-md-9 content">
          <div className="profile">
            <h4 className="dashboardAdmin">دوره ها</h4>
            <div className="userDashboard">
              <table className="table table-striped table-hover table-responsive">
                <thead>
                  <tr>
                    <th className="adminListDetail">ویرایش</th>
                    <th className="adminListDetail">حذف</th>
                    <th className="adminListDetail">توضیحات</th>
                    <th className="adminListDetail">مرتبط</th>
                    <th className="adminListDetail">نام</th>
                  </tr>
                </thead>
                <tbody>
                  {lessons.map((item) => (
                    <tr key={item._id}>
                      <th className="adminListDetail">
                        <FontAwesomeIcon
                          icon={faPen}
                          style={{ color: "#828a8f", cursor: "pointer" }}
                          onClick={() => lessonEdit(item)}
                        />
                      </th>
                      <th className="adminListDetail">
                        <FontAwesomeIcon
                          icon={faTrash}
                          style={{ color: "#828a8f", cursor: "pointer" }}
                          onClick={() => confirm(item)}
                        />
                      </th>
                      <th className="adminListDetail">{item.description}</th>
                      <th className="adminListDetail">{item.topics}</th>
                      <th className="adminListDetail">{item.lessonName}</th>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <GoToTop/>
    </div>
  );
};

export default LessonListAdmin;
