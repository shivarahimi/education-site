import React, { useEffect, useState } from "react";
import { getCommentList } from "../../../core/Services/UserServices/Comment";
import {
  answerComment,
  getCourseByid,
} from "./../../../core/Services/UserServices/Comment";
import { useParams, useNavigate } from "react-router-dom";
import Sidebar from "./../../components/Sidebar/Sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInbox } from "@fortawesome/free-solid-svg-icons";
import { confirmAlert } from "react-confirm-alert";
const LessonComment = () => {
  const { lessonCommentId } = useParams();
  const navigate = useNavigate();
  const [comment, setComment] = useState([]);
  const [course, setCourse] = useState({});
  const [answer, setAnswer] = useState("");
  const [id, setId] = useState();
  // const[postId,setPostId] = useState("")
  const LoadData = async () => {
    try {
      const { data } = await getCourseByid(lessonCommentId);
      const result = data.result;
      console.log(result);
      setCourse(result);
    } catch (error) {
      console.log(error);
    }
  };
  const showComment = async () => {
    try {
      const { data } = await getCommentList();
      setComment(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    LoadData();
    showComment();
  }, []);
  var FilteredData = comment.filter(function (item) {
    return item.postId === lessonCommentId;
  });
  console.log(FilteredData);
  const GoTerm = () => {
    navigate({
      pathname: `/home/courseList/${lessonCommentId}`,
      state: course,
    });
  };

  const confirm = (commentUser) => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <form
            dir="rtl"
            className="p-4"
            style={{ backgroundColor: "cadetblue", borderRadius: "1em" }}
          >
            <div>
              <p className="m-2">کامنت{commentUser.username}</p>
              <span
                className="p-1"
                style={{ backgroundColor: "white", lineHeight: "1.5" }}
              >
                {commentUser.comment}
              </span>
            </div>
            <div className="m-2">
              <button
                className="btn mx-3"
                style={{ backgroundColor: "blue", color: "white" }}
                onClick={(item) => {
                  GoTerm(item);
                  onClose();
                }}
              >
                رفتن به ترم
              </button>
              <button
                onClick={onClose}
                className="btn mx-3"
                style={{ backgroundColor: "red", color: "white" }}
              >
                انصراف
              </button>
            </div>
          </form>
        );
      },
    });
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <Sidebar />
          <div className="col-12 col-md-9 content">
            <div className="profile">
              <h4 className="dashboardAdmin">کامنت ها</h4>
              <div className="userDashboard">
                <table className="table table-striped table-hover table-responsive">
                  <thead>
                    <tr>
                      <th className="adminListDetail">نمایش</th>
                      <th className="adminListDetail">وضعیت</th>
                      <th className="adminListDetail">تاریخ</th>
                      <th className="adminListDetail">ایمیل</th>
                      <th className="adminListDetail">نام</th>
                    </tr>
                  </thead>
                  <tbody>
                    {FilteredData.map((item) => (
                      <tr key={item._id}>
                        <th className="adminListDetail">
                          <FontAwesomeIcon
                            icon={faInbox}
                            style={{ color: "#828a8f", cursor: "pointer" }}
                            onClick={() => confirm(item)}
                          />
                        </th>
                        <th className="adminListDetail">
                          {item.verified ? "تایید شده" : "تایید نشده"}
                        </th>
                        <th className="adminListDetail">
                          {item.createDate.slice(0, 10)}
                        </th>
                        <th className="adminListDetail">{item.email}</th>
                        <th className="adminListDetail">{item.username}</th>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LessonComment;
