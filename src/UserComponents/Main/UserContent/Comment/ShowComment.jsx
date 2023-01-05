import React, { useContext, useState } from "react";
import { answerComment } from "../../../../core/Services/UserServices/Comment";
import "./../../../../style/UserStyle/UserContent/Comment/ShowComment.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReply } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import { useParams } from "react-router";
import { StateContext } from "../../../../AdminComponents/context/DataContext";
import { AdminContext } from "../../../../AdminComponents/context/AdminContext/AdminContext";

const ShowComment = () => {
  const { courseId } = useParams();
  const { adminData } = useContext(AdminContext);
  const { allComments, comments } = useContext(StateContext);
  const [postId, setPostId] = useState(courseId);

  var FilteredData = comments.filter(function (item) {
    return item.postId === postId;
  });
  //   console.log(FilteredData);

//   const Role = localStorage.getItem("Role");
  const Role = adminData && adminData["_id"]

  const [id, setID] = useState("");
  const [answer, setAnswer] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("slm");
    const AnswerData = { id, answer };
    try {
      const { status } = await answerComment(AnswerData);
      if (status === 200) {
        toast.success("جواب با موفقیت ثبت شد", {
          position: "top-right",
          closeOnClick: true,
        });
        allComments();
      }
    } catch (ex) {
      console.log(ex);
      toast.error("مشکلی پیش آمده است", {
        position: "top-right",
        closeOnClick: true,
      });
    }
  };
  const [commentUser, setCommentUSer] = useState([]);
  const AnswerComment = (item) => {
    setCommentUSer(item);
    // console.log(commentUser);
    setID(item._id);
    if (item.answer) {
      setAnswer(item.answer);
    }
  };

  return (
    <div className="userComments">
      <div className="comment">
        <div className="p-3">
          {FilteredData && FilteredData.length > 0 ? (
            FilteredData.map((item) => (
              <div className="mb-3 allComment">
                <div className="nameCoursepage mb-2">
                  <div className="userCommentInfo">
                    <h6 className="my-1"> {item.username} : کاربر</h6>
                    <span className="text-secondary">
                      {item.createDate.slice(0, 10)}
                    </span>
                  </div>
                  <p className="txt m-2">{item.comment}</p>
                  <div>
                    {item.answer ? (
                      <div>
                        <h3 className="m-1">مدرس</h3>
                        <div className="adminAnswer"> {item.answer}</div>
                      </div>
                    ) : (
                      ""
                    )}
                    {Role && !item.answer ? (
                      <div>
                        <form onSubmit={handleSubmit}>
                          <button
                            className="btn mx-3"
                            style={{ backgroundColor: "green", color: "white" }}
                            onClick={() => {
                              AnswerComment(item);
                            }}
                          >
                            <div className="p-2">
                              {commentUser.answer ? "" : "ارسال پاسخ"}
                            </div>
                          </button>
                          {item.answer ? (
                            ""
                          ) : (
                            <textarea
                              className="m-2 p-1"
                              placeholder="text"
                              value={answer}
                              onChange={(e) => setAnswer(e.target.value)}
                            ></textarea>
                          )}
                        </form>

                        <button
                          className="answer"
                          onClick={() => {
                            AnswerComment(item);
                          }}
                        >
                          {item.answer ? "" : "تایید پاسخ"}
                          <FontAwesomeIcon className="p-1" icon={faReply} />
                        </button>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div>
              <p style={{ color: "blue" }}> 🤔نظری ثبت نشده است</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShowComment;
