import React, { useEffect } from "react";
import { AdminContext } from "./AdminContext";
import { useState } from "react";
import {decodeToken} from "react-jwt";
import { getAdminByid } from "../../../core/Services/AdminServices/AdminServices";

const AdminProvider = ({ children }) => {
  const [adminData, setAdminData] = useState("");
  const [adminToken, setAdminToken] = useState();
  const handleAdminInfo = async (id, adminStoToken) => {
    try {
        const newad = await getAdminByid(id,adminStoToken)
        const newData = newad.data.result
        setAdminData(newData)
    } catch (error) {
        console.log(error);
    }
  };
  const adminStoToken = localStorage.getItem("admin-token")
  const decodeStoToken = decodeToken(adminStoToken)

  useEffect(() => {
    if (adminStoToken) {
        setAdminToken(adminStoToken)
        const decodeStoToken = decodeToken(adminStoToken)
        handleAdminInfo(decodeStoToken["_id"],adminStoToken)
    }
  },[])
  useEffect(() => {
    if (adminStoToken) {
        handleAdminInfo(decodeStoToken["_id"],adminStoToken)
    }
  },[adminStoToken])
  return (
    <AdminContext.Provider
      value={{
        adminData,
        setAdminData,
        adminToken,
        setAdminToken,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};

export default AdminProvider;
