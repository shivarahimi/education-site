import React, { Fragment, useEffect, useState } from 'react';

// import './../../style/UserStyle/UserPanel/UserPanelUpdateInfo.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Sidebar from './../../../../AdminComponents/components/Sidebar/Sidebar';
import { toast } from 'react-toastify';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { activeEmployee, deactiveEmployee, getAdminByid, updateAdmin } from '../../../../core/Services/AdminServices/AdminServices';

const EditAdmin = () => {

    const navigate = useNavigate()
    const {adminId} = useParams()
    const [admin, setAdmin] = useState([]);

    const [activeStatus, setActiveStatus] = useState(false);
    const detaileAdmin = async () => {
        try {
            const {data} = await getAdminByid(adminId)
            const result = data.result
            setAdmin(result)
        } catch (error) {
            console.log(error);
        }
    }
        
    const { pathname } = useLocation();

    useEffect(() => {
        detaileAdmin()
        if (admin.isActive) {
            setActiveStatus(true)
        }
        if (!admin.isActive) {
            setActiveStatus(false)
        }
    }, [pathname])

    const Property = (key, e) => {
        switch (key) {
            case "fullName":
                setAdmin({ ...admin, fullName: e.target.value })
                break;
            case "phoneNumber":
                setAdmin({ ...admin, phoneNumber: e.target.value })
                break;
            case "birthDate":
                setAdmin({ ...admin, birthDate: e.target.value })
                break;
            case "nationalId":
                setAdmin({ ...admin, nationalId: e.target.value })
                break;
            case "email":
                setAdmin({ ...admin, email: e.target.value })
                break;
            case "address":
                setAdmin({ ...admin, address: e.target.value })
                break;
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        const Admins = {
            fullName : admin.fullName,
            phoneNumber : admin.phoneNumber,
            birthDate : admin.birthDate,
            nationalId : admin.nationalId,
            email : admin.email,
            address : admin.address
        }
        try {
            const {status,data} = await updateAdmin(Admins,adminId)
            if (data) {
                navigate("/app/AdminManage/AdminsList")
            }
            if (status === 200) {
                toast.success('مدرس با موفقیت ویرایش شد',{position:'top-right',closeOnClick:'true'})
            }
        } catch (ex) {
            toast.error('مشکلی پیش آمده است',{position:'top-right',closeOnClick:'true'})
        }
    }
    const handleActive = async event => {
        event.preventDefault();
        try {
            const { status } = await activeEmployee(adminId);
            if (status === 200) {
                toast.success(" مدرس با موفقیت فعال شد", {
                    position: "top-right",
                    closeOnClick: true
                });
                setActiveStatus(true)

            }
        } catch (ex) {
            toast.error("مشکلی پیش آمده است", {
                position: "top-right",
                closeOnClick: true
            });
            console.log(ex);
        }
    };

    const handleDeActive = async event => {
        event.preventDefault();
        try {
            const { status } = await deactiveEmployee(adminId);
            if (status === 200) {
                toast.success(" مدرس با موفقیت غیر فعال شد", {
                    position: "top-right",
                    closeOnClick: true
                });
                setActiveStatus(false)

            }
        } catch (ex) {
            toast.error("مشکلی پیش آمده است", {
                position: "top-right",
                closeOnClick: true
            });
            console.log(ex);
        }
    };
    return ( 
        <Fragment>
            <div className='container'>
                <div className='row'>
                    <Sidebar/>
                <form className='col-md-9 content' onSubmit={handleSubmit}>
                    <div className='profile'>
                        <h4 className='updateInformationAdmin'>ویرایش ادمین</h4>
                            <div className="userInformation">
                                <div className='row'>
                                    <div className="col-md-6" id='email'>
                                        <input className="typeFormPanel" 
                                        type="text" 
                                        name="birthDate"
                                        placeholder="birthDate"
                                        value={admin.birthDate}
                                        onChange={e => { Property("birthDate", e) }}
                                        />
                                    </div>
                                    <div className="col-md-6 email">
                                        <input className="typeFormPanel" 
                                        type="text" 
                                        name="fullName"
                                        placeholder="fullname"
                                        value={admin.fullName}
                                        onChange={e => { Property("fullName", e) }}
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6" id="email">
                                        <input className="typeFormPanel" 
                                        type="email" 
                                        name="email"
                                        placeholder="Email"
                                        value={admin.email}
                                        onChange={e => { Property("email", e) }}
                                        />
                                    </div>
                                    <div className="col-md-6" id="call">
                                        <input className="typeFormPanel" 
                                        type="text" 
                                        name="phoneNumber"
                                        placeholder="phoneNumber"
                                        value={admin.phoneNumber}
                                        onChange={e => { Property("phoneNumber", e) }}
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                <div className="col-md-6" id="call">
                                        <input className="typeFormPanel" 
                                        type="text" 
                                        name="phoneNumber"
                                        placeholder="address"
                                        value={admin.address}
                                        onChange={e => { Property("address", e) }}
                                        />
                                    </div>
                                    <div className="col-md-6" id="email">
                                        <input className="typeFormPanel" 
                                        type="text" 
                                        name="email"
                                        placeholder="nationalId"
                                        value={admin.nationalId}
                                        onChange={e => { Property("nationalId", e) }}
                                        />
                                    </div>
                                </div>
                                <button className='updateAdmin' type='submit'>ویرایش</button>
                                {/* <div className='m-4'>
                                <h3>وضعیت کاربر : {activeStatus ? "فعال" : "غیر فعال"}</h3>
                                {activeStatus ?
                                    <button onClick={handleDeActive}>غیر فعال کردن</button> :
                                    <button onClick={handleActive}>فعال کردن</button>}
                                </div> */}
                                <form >
                                
                            </form>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </Fragment>
     );
}
 
export default EditAdmin;