import React, { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router";
import { getTeacherByid } from "./../../../../core/Services/AdminServices/AdminServices";
import "./../../../../style/UserStyle/UserContent/Teachers/Teacher.css";
import Header from "../../Header/Header";
import Footer from "../../MainContent/Footer/Footer";

const TeacherPage = () => {
  const { teacherId } = useParams();
  const [teacher, setTeacher] = useState({});
  const detaileTeacher = async () => {
    try {
      const { data } = await getTeacherByid(teacherId);
      const result = data.result;
      console.log(result);
      setTeacher(result);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    detaileTeacher();
  }, []);
  return (
    <Fragment>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-md-8 teacherPage">
            <div className="leftNews">
              <div className="single">
                <img
                  src={
                    teacher.profile
                      ? teacher.profile
                      : require("../../../../Assets/UserAssets/Header/loading_me.gif")
                  }
                  alt=""
                />
              </div>
              <div className="singleInformationTeacher">
                <h5 className="pb-2" style={{ color: "rgb(18, 63, 135)" }}>
                  {teacher.fullName}
                </h5>
                <p className="txt">{teacher.email} : ایمیل</p>
                <p className="txt">{teacher.phoneNumber}: تلفن</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default TeacherPage;
