import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import "./../../../../AdminComponents/pages/AdminManage/AdminList/AdminList.css";
import Loading from "../../../../AdminComponents/pages/Loading/Loading";
import { useNavigate } from "react-router-dom";
import {
  deleteAdmin,
  getAllAdmin,
} from "./../../../../core/Services/AdminServices/AdminServices";
import Sidebar from "./../../../components/Sidebar/Sidebar";
import { toast } from "react-toastify";
import { confirmAlert } from "react-confirm-alert";
import GoToTop from "../../../components/GoToTop/GoToTop";

const AdminList = () => {
  const navigate = useNavigate();
  const [admins, setAdmins] = useState([]);

  const LoadData = async () => {
    try {
      const { data } = await getAllAdmin();
      const result = data.result;
      setAdmins(result);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    LoadData();
  }, []);
  const aId = admins._id;
  const deleteStudents = async (aId) => {
    try {
      OpenHandler();
      const { status } = await deleteAdmin(aId);
      if (status === 200) {
        toast.success("ادمین با موفقیت حذف شد", {
          position: "top-right",
          closeOnClick: "true",
        });
        LoadData();
        CloseHandler();
      }
    } catch (error) {
      toast.error("مشکلی پیش آمده است", {
        position: "top-right",
        closeOnClick: "true",
      });
      CloseHandler();
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
              آیا میخواهی {item.fullName} پاک کنی؟
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

  const adminEdit = (item) => {
    navigate({
      pathname: `/app/AdminManage/EditAdmin/${item._id}`,
      state: item,
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
    <div className="container">
      <div className="row">
      <Loading true={True} />
        <Sidebar />
        <div className="col-12 col-md-9 content">
          <div className="profile">
            <h4 className="dashboardAdmin">ادمین ها</h4>
            <div className="userDashboard">
              <table className="table table-striped table-hover table-responsive">
                <thead>
                  <tr>
                    <th className="adminListDetail">ویرایش</th>
                    <th className="adminListDetail">حذف</th>
                    <th className="adminListDetail">وضعیت</th>
                    <th className="adminListDetail">رول</th>
                    <th className="adminListDetail">شماره تلفن</th>
                    <th className="adminListDetail">ایمیل</th>
                    <th className="adminListDetail">نام</th>
                  </tr>
                </thead>
                <tbody>
                  {admins.map((item) => (
                    <tr key={item._id} className="adminListDetail">
                      <th>
                        <FontAwesomeIcon
                          icon={faPen}
                          style={{ color: "#828a8f", cursor: "pointer" }}
                          onClick={() => adminEdit(item)}
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
                      <th className="adminListDetail">{item.role}</th>
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

export default AdminList;
