import React, { Fragment, useContext, useRef, useState } from "react";

import "./../../../../src/AdminComponents/pages/login/Login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import SimpleReactValidator from "simple-react-validator";
import Loading from "./../../../AdminComponents/pages/Loading/Loading";
import { loginAdmin } from "./../../../core/Services/AdminServices/AdminGeneralServices";
import { useEffect } from "react";
import { AdminContext } from "../../context/AdminContext/AdminContext";

const Login = () => {
  const { setAdminData, setAdminToken } = useContext(AdminContext);
  const navigate = useNavigate();
  useEffect(() => {
    const adminToken = localStorage.getItem("admin-token");

    if (adminToken && (adminToken !== null || adminToken !== undefined)) {
      setAdminToken(adminToken);
    }
  }, []);

  // const LoadData = async () => {
  //     try {
  //         const {data} = await getAllAdmin()
  //         const result = data.result
  //         setAdmins(result)
  //     } catch (error) {
  //         console.log(error);
  //     }
  // }
  // useEffect(() => {
  //     LoadData()
  // },[])
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

  const AdminLogin = async (event) => {
    OpenHandler();
    event.preventDefault();
    const user = {
      email,
      password,
    };
    console.log(user);
    try {
      if (validator.current.allValid()) {
        const { status, data } = await loginAdmin(user);
        if (status === 200) {
          setAdminData(data.result.employeeModel);
          toast.success("ورود موفقیت آمیز بود", {
            position: "top-right",
            closeOnClick: "true",
          });
          navigate("/admin", { replace: true });
          localStorage.setItem("admin-token", data.result.jwtToken);
          CloseHandler();
          // console.log("admin", data.result);
          // setCooki("admin-token", `${data.result.jwtToken}`, "/", 2);
          // setAdminToken(data.result.jwtToken);
          // const adminInfo = await getAdminByid(
          //   data.result.employeeModel["_id"]
          // );
          // console.log("adminInfo", adminInfo.data.result);
          // setAdminData(adminInfo.data.result);
          // setTimeout(() => {
          //   navigate("/admin", { replace: true });
          // }, 600);
          // setAdminData(data.result.employeeModel);
          // const allAdmin = [...admins,data]
          // setAdmins(allAdmin)
          // localStorage.setItem("jwtToken",data.result["jwtToken"])
          // localStorage.setItem("ID",data.result.employeeModel["_id"])
          // localStorage.setItem("Role","admin")
          // navigate("/admin", { replace: true });
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
              src={require("../../../Assets/UserAssets/UserContent/Auth/close-up-female-student-typing-laptop-table_1262-3468.jpg")}
              alt=""
            />
          </div>
          <div className="col-12 col-xl-6">
            <h3 className="title"> ورود ادمین</h3>
            <form id="form" onSubmit={AdminLogin}>
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
                <div className="col-md-12">
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
                <div className="col-md-12 d-flex justify-content-center align-items-center">
                  <Link to="/" className="reg">
                    صفحه اصلی
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

export default Login;
