import { UserContext } from "./UserContext";
import { useState } from "react";
import { useJwt } from "react-jwt";
import { getStudentByid } from "./../../../core/Services/UserServices/StudentService";
import { useEffect } from "react";
const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState();
  const [userToken, setUserToken] = useState();

  const userCooki = document.cookie;
  // console.log(userCooki);
  const { decodedToken } = useJwt(userCooki);
  // console.log("decodedToken", decodedToken);
  // console.log("decodedTokenid", decodedToken["_id"]);
  const setUser = async () => {
    const userId = decodedToken["_id"];
    // console.log("userId", userId);
    try {
      let student = await getStudentByid(userId);

      // console.log("student", student.data.result);
      // let resultT = student.data.result;
      setUserData(student.data.result);
      // console.log("userData", userData);
    } catch (error) {
      console.log("erroruserData", error);
    }
  };

  // console.log("userData", userData);
  useEffect(() => {
    if (decodedToken) {
      setUserToken(decodedToken);
      setUser();
    }
  }, []);
  useEffect(() => {
    setUser();
  }, [decodedToken]);
  return (
    <UserContext.Provider
      value={{
        userToken,
        setUserToken,
        userData,
        setUserData,
        setUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
