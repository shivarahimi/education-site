import React from 'react';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { getAdminByid } from '../../../core/Services/AdminServices/AdminServices';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { removeCooki } from '../../context/UserContext/cooki';
import { useContext } from 'react';
import { AdminContext } from '../../context/AdminContext/AdminContext';

const Logout = () => {
    const {setAdminData,setAdminToken,adminToken} = useContext(AdminContext)
    const navigate = useNavigate()
    // const [admin, setAdmin] = useState([]);
    // const [id, setId] = useState([]);
    
    // const LoadData = async () => {
    //     const id = localStorage.getItem("ID")
    //     const {data} = await getAdminByid(id)
    //     const result = data.result
    //     setAdmin(result)
    //     setId(id)
    // }
    useEffect(() => {
        removeCooki("admin-token",`${adminToken}`,"/",2)
        setAdminToken(null)
        setAdminData(null)
        navigate("/")
        // localStorage.clear()
        // LoadData()
        // localStorage.clear()
        navigate('/')
        toast.success('خروج موفقیت آمیز بود',{position:'top-right',closeOnClick:'true'})
    }, [])
    return ( 
        <div></div>
     );
}
 
export default Logout;