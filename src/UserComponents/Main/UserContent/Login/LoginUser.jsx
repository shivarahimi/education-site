import React, { Fragment, useContext, useRef, useState } from "react";
import "./../../../../../src/style/UserStyle/UserContent/Auth/LoginUser.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../../../core/Services/UserServices/UserGeneralServices";
import { toast } from "react-toastify";
import SimpleReactValidator from "simple-react-validator";
import Loading from "../../../../AdminComponents/pages/Loading/Loading";
import { getStudentByid } from "./../../../../core/Services/AdminServices/StudentServices";
import { UserContext } from "./../../../../AdminComponents/context/UserContext/UserContext";
import { setCooki } from "./../../../../AdminComponents/context/UserContext/cooki/index";

const LoginUser = () => {
  const navigate = useNavigate();
  // const { student,studentDetaile } = useContext(StateContext);
  const { setUserData, setUserToken } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [, forceUpdate] = useState();

  const validator = useRef(
    new SimpleReactValidator({
      messages: {
        required: "پر کردن این فیلد الزامی میباشد",
        min: "کمتر از 5 کاراکتر نباید باشد",
        email: "ایمیل نوشته شده صحیح نیست",
      },
      element: (message) => <div className="message">{message}</div>,
    })
  );

  const userLogin = async (event) => {
    OpenHandler();
    event.preventDefault();
    const user = {
      email,
      password,
    };
    console.log(user);
    try {
      if (validator.current.allValid()) {
        const { status, data } = await loginUser(user);
        console.log(user);
        if (status === 200) {
          toast.success("ورود موفقیت آمیز بود", {
            position: "top-right",
            closeOnClick: "true",
          });
          CloseHandler();
          console.log(data);
          setCooki("user-token", `${data.result.jwtToken}`, "/", 2);
          setUserToken(data.result.jwtToken);
          const userInfo = await getStudentByid(
            data.result.studentModel["_id"]
          );
          console.log("userInfo", userInfo.data.result);
          setUserData(userInfo.data.result);
          // if (save) {
          // }
          setTimeout(() => {
            navigate("/userPanel/userDashboard", { replace: true });
          }, 600);
          // axios.defaults.headers["x-auth-token"] = localStorage.getItem("jwtToken");
          // setCooki("jwtToken",data.result["jwtToken"])
          // setCooki("ID",data.result.studentModel["_id"])
          // setCooki("UserName",data.result.studentModel["fullName"])
          // navigate('/userPanel/userDashboard',{replace:true})
        }
      } else {
        validator.current.showMessages();
        forceUpdate(1);
      }
    } catch (ex) {
      toast.error("مشکلی پیش آمده است", {
        position: "top-right",
        closeOnClick: "true",
      });
      CloseHandler();
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
      <div className="containerLogin">
        <div className="row page align-items-center">
          <div className="Loginpicture col-12 col-xl-6">
            <img
              src={require("../../../../Assets/UserAssets/UserContent/Auth/close-up-female-student-typing-laptop-table_1262-3468.jpg")}
              alt=""
            />
          </div>
          <div className="col-12 col-xl-6">
            <h3 className="title">ورود</h3>
            <form id="form" onSubmit={userLogin}>
              <div className="row" id="email">
                <div className="col-md-12">
                  <input
                    className="typeForm"
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={(event) => {
                      validator.current.showMessageFor("email");
                      setEmail(event.target.value);
                    }}
                  />
                  {validator.current.message("email", email, "required|email")}
                </div>
              </div>
              <div className="row" id="password">
                <div className="col-md-12" style={{ position: "relative" }}>
                  <input
                    className="typeForm"
                    type="password"
                    name="password"
                    placeholder="password"
                    value={password}
                    onChange={(event) => {
                      setPassword(event.target.value);
                      validator.current.showMessageFor("password");
                    }}
                  />
                  {validator.current.message(
                    "password",
                    password,
                    "required|min:5"
                  )}
                </div>
              </div>
              <div className="row remember">
                <div className="col-6 col-md-6">
                  <a href="#" className="forget">
                    فراموشی رمز
                  </a>
                </div>
                <div className="col-6 col-md-6 tik">
                  <p style={{ marginRight: "3px" }}>مرا به خاطر بسپار</p>
                  <input type="checkbox" />
                </div>
              </div>
              <div className="row login">
                <div className="col-md-12">
                  <button id="sendBtn" type="submit">
                    ورود
                  </button>
                </div>
              </div>
              <div className="row register">
                <div className="col-md-4 d-flex justify-content-start">
                  <Link to="/" className="reg">
                    صفحه اصلی
                  </Link>
                </div>
                <div className="col-md-8">
                  <Link to="/home/register" className="reg">
                    ثبت نام کنید
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default LoginUser;
