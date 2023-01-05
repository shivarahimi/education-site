import React, { useEffect, useState } from "react";
import "./../../../../AdminComponents/pages/AdminManage/AdminList/AdminList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "./../../../components/Sidebar/Sidebar";
import {
  deleteStudent,
  getAllStudent,
} from "../../../../core/Services/AdminServices/StudentServices";
import { toast } from "react-toastify";
import { confirmAlert } from "react-confirm-alert";
import { useNavigate } from "react-router-dom";
import GoToTop from "../../../components/GoToTop/GoToTop";

const StudentsList = () => {
  const navigate = useNavigate();
  const [students, setStudents] = useState([]);

  const LoadData = async () => {
    try {
      const { data } = await getAllStudent();
      const result = data.result;
      setStudents(result);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    LoadData();
  }, []);
  const sId = students._id;
  const deleteStudents = async (sId) => {
    try {
      const { status } = await deleteStudent(sId);
      if (status === 200) {
        toast.success("دانشجو با موفقیت حذف شد", {
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
              آیا میخواهی{item.fullName} پاک کنی؟
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
  const studentEdit = (item) => {
    navigate({
      pathname: `/app/StudentsManage/EditStudent/${item._id}`,
      state: item,
    });
  };
  return (
    <div className="container">
      <div className="row">
        <Sidebar />
        <div className="col-md-9 content">
          <div className="profile">
            <h4 className="dashboardAdmin">دانشجوها</h4>
            <div className="userDashboard">
              <table className="table table-striped table-hover table-responsive">
                <thead>
                  <tr>
                    <th className="adminListDetail">ویرایش</th>
                    <th className="adminListDetail">حذف</th>
                    <th className="adminListDetail">وضعیت</th>
                    <th className="adminListDetail">کدملی</th>
                    <th className="adminListDetail">شماره تلفن</th>
                    <th className="adminListDetail">ایمیل</th>
                    <th className="adminListDetail">نام</th>
                  </tr>
                </thead>
                <tbody>
                  {students.map((item) => (
                    <tr key={item._id}>
                      <th className="adminListDetail">
                        <FontAwesomeIcon
                          icon={faPen}
                          style={{ color: "#828a8f", cursor: "pointer" }}
                          onClick={() => studentEdit(item)}
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
                        {item.isActive ? "فعال" : "غیرفعال"}
                      </th>
                      <th className="adminListDetail">{item.nationalId}</th>
                      <th className="adminListDetail">{item.phoneNumber}</th>
                      <th className="adminListDetail">{item.email}</th>
                      <th className="adminListDetail">{item.fullName}</th>
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
export default StudentsList;
