import React, { Fragment, useContext, useState } from "react";
import "./../../../../style/UserStyle/UserContent/Comment/SendComment.css";
import {
  getCommentList,
  sendNewComment,
} from "./../../../../core/Services/UserServices/Comment";
import { toast } from "react-toastify";
import { useParams } from "react-router";
import { StateContext } from "../../../../AdminComponents/context/DataContext";
import Loading from "./../../../../AdminComponents/pages/Loading/Loading";

const SendComment = () => {
  const { setComments } = useContext(StateContext);
  const { courseId } = useParams();
  const [postId, setPostId] = useState(courseId);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [comment, setComment] = useState("");
  // const[comments,setComments] = useState([])
  // const allComments = async () => {
  //     try {
  //         const {data} = await getCommentList()
  //         setComments(data)
  //     } catch (error) {
  //         console.log(error);
  //     }
  // }

  // useEffect(() => {
  //     allComments()
  // },[])
  const handleSubmit = async (e) => {
    e.preventDefault();
    const NewComment = { postId, email, username, comment };
    try {
      OpenHandler();
      const { status } = await sendNewComment(NewComment);
      if (status === 200) {
        toast.success("کامنت با موفقیت ثبت شد", {
          position: "top-right",
          closeOnClick: "true",
        });
        CloseHandler();
        try {
          const { data } = await getCommentList();
          let resultCom = data;
          setComments(resultCom);
        } catch (error) {
          console.log(error);
        }
      }
    } catch (ex) {
      toast.error("مشکلی پیش آمده است", {
        position: "top-right",
        closeOnClick: "true",
      });
      console.log(ex);
    }
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
      <Loading true={True} />
      <form onSubmit={handleSubmit}>
        <div className="commenting">
          <h4 className="mb-4">نظرات کاربران</h4>
          <div className="sabteNazar">
            <div className="row top mb-2">
              <div className="col-6">
                <input
                  className="type"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="col-6">
                <input
                  className="type"
                  type="text"
                  placeholder="fullname"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            </div>
            <div>
              <textarea
                className="type"
                type="text"
                placeholder="Comment"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              ></textarea>
            </div>
            <button type="submit" className="save">
              ثبت دیدگاه
            </button>
          </div>
        </div>
      </form>
    </Fragment>
  );
};

export default SendComment;
