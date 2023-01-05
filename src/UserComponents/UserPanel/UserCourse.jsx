import React, { Fragment, useContext, useState } from "react";
import UserSideBar from "./TinyComponent/UserSideBar";
import "./../../style/UserStyle/UserPanel/UserPanelCourse.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { confirmAlert } from "react-confirm-alert";
import { toast } from "react-toastify";
import {
  coursesList,
  deleteStudentFromCourse,
} from "./../../core/Services/AdminServices/AdminPanelServices";
import Loading from "./../../AdminComponents/pages/Loading/Loading";
import { UserContext } from "../../AdminComponents/context/UserContext/UserContext";
import { StateContext } from "../../AdminComponents/context/DataContext";

const UserCourse = () => {
  const { userData } = useContext(UserContext);
  const { courses, setCourses } = useContext(StateContext);

  const sid = userData && userData["_id"];
  const filtered = (data) => {
    const filtering = data.filter((item) => {
      const exist = item.students.some((item) => item._id === sid);
      return exist;
    });
    return filtering;
  };
  const UserCourse = filtered(courses);
  console.log(UserCourse);

  const deleteStudents = async (cid) => {
    const UId = userData["_id"];
    const cId = {
      courseId: cid,
    };
    try {
      OpenHandler();
      const { status } = await deleteStudentFromCourse(UId, cId);
      if (status === 200) {
        toast.success("ترم با موفقیت حذف شد", {
          position: "top-right",
          closeOnClick: "true",
        });
        CloseHandler();
        try {
          const { data } = await coursesList();
          let resultCourse = data.result;
          console.log(resultCourse);
          setCourses(resultCourse);
        } catch (error) {
          console.log(error);
        }
      }
    } catch (error) {
      toast.error("مشکلی پیش آمده است", {
        position: "top-right",
        closeOnClick: "true",
      });
      CloseHandler();
    }
    // }
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
            <p className="p-2" style={{ color: "white" }}>
              {" "}
              آیا میخواهی {item.title} پاک کنی؟{" "}
            </p>
            <button
              className="btn mx-2"
              style={{ backgroundColor: "green", color: "white" }}
              onClick={() => {
                deleteStudents(item);
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
  const [True, SetTrue] = useState(false);
  const CloseHandler = () => {
    SetTrue(false);
  };
  const OpenHandler = () => {
    SetTrue(true);
  };
  return (
    <Fragment>
      {!userData?(<></>):(<>
        <Loading true={True} />
      <div className="container">
        <div className="row">
          <UserSideBar />
          <div className="col-md-9 content">
            <div className="profile">
              <h4 className="dashboard">دروس</h4>
              <div className="userDashboard">
                <table className="table table-striped table-hover table-responsive">
                  <thead>
                    <tr>
                      <th>حذف</th>
                      <th>تاریخ شروع</th>
                      <th>قیمت</th>
                      <th>استاد</th>
                      <th>درس</th>
                    </tr>
                  </thead>
                  <tbody>
                    {UserCourse.map((item) => (
                      <tr key={item._id}>
                        <th>
                          <FontAwesomeIcon
                            icon={faTrash}
                            style={{ color: "#828a8f", cursor: "pointer" }}
                            onClick={() => confirm(item._id)}
                          />
                        </th>
                        <th className="lessonName">
                          {item.startDate.slice(0, 10)}
                        </th>
                        <th className="lessonName">{item.cost}</th>
                        <th className="lessonName">{item.teacher.fullName}</th>
                        <th className="lessonName">{item.lesson.lessonName}</th>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>)}
      
    </Fragment>
  );
};

export default UserCourse;
