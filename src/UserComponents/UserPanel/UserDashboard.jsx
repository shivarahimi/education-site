import React, { Fragment, useContext } from "react";
import { UserContext } from "../../AdminComponents/context/UserContext/UserContext";

import "./../../style/UserStyle/UserPanel/UserDashboard.css";
import UserSideBar from "./TinyComponent/UserSideBar";

const UserDashboard = () => {
  const { userData } = useContext(UserContext);
  // const [student, setStudent] = useState(userData);
  // console.log("userData", userData);
  // const studentsDetaile = async () => {
  //     const id = localStorage.getItem("ID")
  //     const {data} = await getStudentByid(id)
  //     const result = data.result
  //     console.log(result);
  //     setStudent(result)
  // }
  // useEffect(() => {
  //     studentsDetaile()
  // },[])

  return (
    <Fragment>
      {!userData ? (
        <></>
      ) : (
        <div className="container">
          <div className="row">
            <UserSideBar />
            <form className="col-md-9 content">
              <div className="profile">
                <h4 className="dashboard">داشبورد</h4>
                <div className="userDashboard">
                  <h5 className="mb-4 text-primary">اطلاعات کاربری</h5>
                  <div className="row mb-2">
                    <div className="col-md-6" id="password">
                      <p>{userData.birthDate} : birthDate</p>
                    </div>
                    <div className="col-md-6 username">
                      <p>{userData.fullName}: Fullname</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6" id="email">
                      <p>{userData.email} : Email</p>
                    </div>
                    <div className="col-md-6" id="call">
                      <p>{userData.phoneNumber} : Phonenumber</p>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default UserDashboard;
