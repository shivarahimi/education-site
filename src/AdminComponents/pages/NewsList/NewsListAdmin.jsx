import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import Sidebar from "./../../../AdminComponents/components/Sidebar/Sidebar";
import {
  deleteNew,
  ListNews,
} from "./../../../core/Services/AdminServices/AdminPanelServices";
import { toast } from "react-toastify";
import { confirmAlert } from "react-confirm-alert";
import Loading from "../../../AdminComponents/pages/Loading/Loading";

const NewsListAdmin = () => {
  const navigate = useNavigate();
  const [news, setNews] = useState([]);

  const LoadData = async () => {
    try {
      const { data } = await ListNews();
      const result = data.result;
      setNews(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    LoadData();
  }, []);
  const nId = news._id;
  const deleteStudents = async (nId) => {
    try {
      OpenHandler();
      const { status } = await deleteNew(nId);
      if (status === 200) {
        toast.success("خبر با موفقیت حذف شد", {
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
              آیا میخواهی{item.title} پاک کنی؟
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
  const newsEdit = (item) => {
    navigate({
      pathname: `/app/EditeNews/${item._id}`,
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
            <h4 className="dashboardAdmin">خبرها</h4>
            <div className="userDashboard">
              <table className="table table-striped table-hover table-responsive">
                <thead>
                  <tr>
                    <th>ویرایش</th>
                    <th>حذف</th>
                    <th>تصویر</th>
                    <th>زمینه</th>
                    <th>تیتر خبر</th>
                  </tr>
                </thead>
                <tbody>
                  {news.map((item) => (
                    <tr key={item._id}>
                      <th>
                        <FontAwesomeIcon
                          icon={faPen}
                          style={{ color: "#828a8f", cursor: "pointer" }}
                          onClick={() => newsEdit(item)}
                        />
                      </th>
                      <th>
                        <FontAwesomeIcon
                          icon={faTrash}
                          style={{ color: "#828a8f", cursor: "pointer" }}
                          onClick={() => confirm(item)}
                        />
                      </th>
                      <th>
                        <img
                          style={{ width: "50px", height: "50px" }}
                          src={item.image}
                          alt=""
                        />
                      </th>
                      <th>{item.category}</th>
                      <th>{item.title}</th>
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

export default NewsListAdmin;
