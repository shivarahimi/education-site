import React, { Fragment, useContext, useEffect, useState } from "react";
import "./../../../../style/UserStyle/UserContent/CoursePage/CoursePage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./../../Header/Header";
import SendComment from "../Comment/SendComment";
import ShowComment from "../Comment/ShowComment";
import { toast } from "react-toastify";
import { useParams, useLocation } from "react-router";
import Loading from "./../../../../AdminComponents/pages/Loading/Loading";
import {
  addCoursestudent,
  getCourseByid,
  getLike,
  likeCourse,
  dislikeCourse,
} from "./../../../../core/Services/UserServices/Comment";
import { StateContext } from "../../../../AdminComponents/context/DataContext";
import { UserContext } from "../../../../AdminComponents/context/UserContext/UserContext";
import { coursesList } from "../../../../core/Services/AdminServices/AdminPanelServices";

const CoursePage = () => {
  const { courseId } = useParams();
  const { userData } = useContext(UserContext);
  const { courses, setCourses } = useContext(StateContext);
  const [like, setLike] = useState([]);
  const [course, setCourse] = useState({});
  const detaileCourse = async () => {
    try {
      const { data } = await getCourseByid(courseId);
      const result = data.result;
      setCourse(result);
    } catch (error) {
      console.log(error);
    }
  };
  // const sid = localStorage.getItem("ID");
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
  //   console.log(UserCourse)
  const [checkBuyed, setCheckBuyed] = useState({});
  const buyedStatus = UserCourse.some((item) => item._id === courseId);
  // console.log(buyedStatus);

  const loadData = async () => {
    const { data } = await getLike(courseId);
    const result = data.result;
    setLike(result);
  };
  const { pathname } = useLocation();
  useEffect(() => {
    detaileCourse();
    loadData();
    if (buyedStatus) {
      setCheckBuyed(true);
    }
    if (!buyedStatus) {
      setCheckBuyed(false);
    }
  }, [buyedStatus, pathname]);

  const [Courseid, setCourseid] = useState("");
  const [Userid, setUserid] = useState("");

  const handleSubmitLike = async (courseId) => {
    setCourseid(courseId);
    setUserid(localStorage.getItem("ID"));
    const userData = { Courseid, Userid };
    if (Userid) {
      try {
        const { status } = await likeCourse(userData);
        if (status === 200) {
          toast.success("Like", {
            position: "top-right",
            closeOnClick: "true",
          });
          loadData();
        }
      } catch (error) {
        console.log(error);
        toast.error("DontLike", {
          position: "top-right",
          closeOnClick: "true",
        });
      }
    } else {
      toast.error("LoginLike", { position: "top-right", closeOnClick: "true" });
    }
  };
  const handleSubmitDisLike = async (courseId) => {
    setCourseid(courseId);
    setUserid(localStorage.getItem("ID"));
    const userData = { Courseid, Userid };
    if (Userid) {
      try {
        const { status } = await dislikeCourse(userData);
        if (status === 200) {
          toast.success("DisLike", {
            position: "top-right",
            closeOnClick: "true",
          });
          loadData();
        }
      } catch (error) {
        console.log(error);
        toast.error("DontDislike", {
          position: "top-right",
          closeOnClick: "true",
        });
      }
    } else {
      toast.error("LoginLike", { position: "top-right", closeOnClick: "true" });
    }
  };

  // const Sid = localStorage.getItem("ID");
  const handleSubmit = async (event) => {
    const UId = userData["_id"];
    if (userData["_id"]) {
      event.preventDefault();
      const Cid = {
        courseId: course._id,
      };
      try {
        OpenHandler();
        const { status } = await addCoursestudent(UId, Cid);
        if (status === 200) {
          toast.success("دوره با موفقیت خریداری شد", {
            position: "top-right",
            closeOnClick: true,
          });
          CloseHandler();
          try {
            const { data } = await coursesList();
            let resultCourse = data.result;
            setCourses(resultCourse);
          } catch (error) {
            console.log(error);
          }
          // setCheckBuyed(true)
        }
      } catch (ex) {
        if (!window.navigator.onLine) {
          toast.error("مشکلی پیش آمده است", {
            position: "top-right",
            closeOnClick: true,
          });
          CloseHandler();
        }
        if (window.navigator.onLine) {
          if (localStorage.getItem("Role") !== "admin") {
            toast.error("add_fail", {
              position: "top-right",
              closeOnClick: true,
            });
            console.log(ex);
            CloseHandler();
          } else {
            toast.error("permission", {
              position: "top-right",
              closeOnClick: true,
            });
            console.log(ex);
            CloseHandler();
          }
        }
      }
    } else {
      toast.error("login_Account", {
        position: "top-right",
        closeOnClick: true,
      });
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
      <Header />
      <Loading true={True} />
      <div className="container">
        <div className="row courseId">
          <div className="col-md-8 introduction">
            <div className="singleCourse">
              <div className="single">
                <img
                  src={
                    course.lesson && course.lesson.image
                      ? course.lesson && course.lesson.image
                      : require("../../../../Assets/UserAssets/Header/loading_me.gif")
                  }
                  alt=""
                />
              </div>
              <div className="singleInformation">
                <h5 className="pb-2">{course.title}</h5>
                <p className="txt">
                  {course.lesson && course.lesson.description}
                </p>
              </div>
              <div className="dore">
                <h4 className="p-3">سرفصل های دوره</h4>
                <div className="detail p-2 mb-2">
                  <p>معرفی این دوره</p>
                  <p className="text-primary">رایگان</p>
                  <span className="text-secondary">00:15:12</span>
                </div>
                <div className="detail p-2 mb-2">
                  <p>معرفی این دوره</p>
                  <p className="text-primary">رایگان</p>
                  <span className="text-secondary">00:15:12</span>
                </div>
                <div className="detail p-2 mb-2">
                  <p>معرفی این دوره</p>
                  <p className="text-primary">رایگان</p>
                  <span className="text-secondary">00:15:12</span>
                </div>
                <div className="like">
                  <i
                    onClick={() => handleSubmitLike(course._id)}
                    class="fa-solid fa-heart"
                  ></i>
                  <span>{like.like}</span>
                  <i
                    onClick={() => handleSubmitDisLike(course._id)}
                    class="fa-solid fa-heart-crack dislike"
                  ></i>
                  <span>{like.dislike}</span>
                </div>
              </div>
            </div>
            <SendComment />
            <ShowComment />
          </div>
          <div className="col-md-4 teacher">
            <form onSubmit={handleSubmit}>
              <div className="information">
                <h5 className="mb-2">اطلاعات این دوره</h5>
                <p className="txt">
                  سطح دوره: پیشرفته وضعیت دوره: در حال برگزاری
                  <br />
                  قیمت :{course.cost}تومان
                  <br />
                  {course.startDate && course.startDate.slice(0, 10)} : تاریخ
                  شروع <br />
                  {course.endDate && course.endDate.slice(0, 10)} : تاریخ پایان
                </p>
                {checkBuyed ? (
                  <button className="not-receive">دوره خریداری شده</button>
                ) : (
                  <button type="submit" className="receive">
                    خرید دوره
                  </button>
                )}
              </div>
            </form>
            <div className="teacherDetails">
              <div className="userCoursePage">
                <img
                  src={require("../../../../Assets/UserAssets/UserContent/CoursePage/User-avatar.svg.png")}
                  alt=""
                />
              </div>
              <div className="modares">
                <h5 className="m-3">
                  {course.teacher && course.teacher.fullName} : مدرس
                </h5>
                <p className="txt">
                  {course.teacher && course.teacher.email} : ایمیل
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CoursePage;
