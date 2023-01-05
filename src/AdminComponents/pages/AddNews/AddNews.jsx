import React, { Fragment, useState } from "react";

// import './../../style/UserStyle/UserPanel/UserPanelUpdateInfo.css'
import "./../../../AdminComponents/pages/AddLesson/AddLesson.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./../../../AdminComponents/components/Sidebar/Sidebar";
import { toast } from "react-toastify";
import { Upload } from "./../../../core/Services/AdminServices/Upload";
import { addNew } from "../../../core/Services/AdminServices/AdminPanelServices";
import FormData from "form-data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera } from "@fortawesome/free-solid-svg-icons";

const AddNews = () => {
  const [file, setFile] = useState();

  const UploadImg = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("image", file);
    try {
      const { status, data } = await Upload(formData);
      if (status === 200) {
        toast.success("آپلود عکس انجام شد", {
          position: "top-right",
          closeOnClick: true,
        });
        AddN(data.result);
      }
    } catch (ex) {
      console.log(ex);
      toast.error("مشکل در آپلود عکس", {
        position: "top-right",
        closeOnClick: true,
      });
    }
  };

  const [titr, setTitr] = useState();
  const [category, setCategory] = useState("news");
  const [text, setText] = useState();

  const validator = (Info) => {
    if (!Info.title) return "تيتر خبر وارد نشده";
    else if (!Info.category) return "زمينه خبر مشخص نشده";
    else if (!Info.text) return "متن خبر مشخص نشده";
  };

  const AddN = (nImage) => {
    const Ninfo = {
      title: titr,
      category: category,
      image: nImage,
      text: text,
    };
    const error = validator(Ninfo);
    if (error) return toast.error(error);
    addNew(Ninfo, (succ) => {
      if (!succ) toast.error("مشکلي پيش آمده");
      else toast.success("خبر جديد اضافه شد");
    });
  };

  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <Sidebar />
          <form className="col-md-9 content">
            <div className="profile">
              <h4 className="updateInformationAdmin">افزودن خبر</h4>
              <div className="userInformation">
                <div className="row mb-2">
                  <div className="col-md-6 username mb-2">
                    <select
                      placeholder="دسته بندی خبر"
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                    >
                      <option>news</option>
                      <option>article</option>
                    </select>
                  </div>
                  <div className="col-md-6" id="password">
                    <input
                      className="typeFormPanel"
                      type="text"
                      value={titr}
                      onChange={(e) => setTitr(e.target.value)}
                      placeholder="تیتر خبر"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-2">
                    <label
                      For="uploadPic"
                      style={{ backgroundColor: "rgb(125 122 122)" }}
                    >
                      ارسال عکس
                      <FontAwesomeIcon icon={faCamera} className="m-2" />
                    </label>
                    <input
                      id="uploadPic"
                      type="file"
                      onChange={(e) => setFile(e.target.files[0])}
                    />
                  </div>
                  <div className="col-md-6">
                    <textarea
                      className="adminTextarea"
                      placeholder="متن خبر"
                      value={text}
                      onChange={(e) => setText(e.target.value)}
                    />
                  </div>
                </div>
                <button
                  className="updateAdmin"
                  type="submit"
                  onClick={UploadImg}
                >
                  افزودن
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default AddNews;
