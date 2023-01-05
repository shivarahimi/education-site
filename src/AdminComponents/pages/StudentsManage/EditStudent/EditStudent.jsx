import React, { Fragment, useEffect, useState } from 'react';

// import './../../style/UserStyle/UserPanel/UserPanelUpdateInfo.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Sidebar from './../../../../AdminComponents/components/Sidebar/Sidebar';
import { toast } from 'react-toastify';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { getStudentByid } from './../../../../core/Services/AdminServices/StudentServices';
import { updateStudent } from '../../../../core/Services/UserServices/StudentService';

const EditStudent = () => {

    const navigate = useNavigate()
    const {studentId} = useParams()
    const [student, setStudent] = useState([]);

    const detaileStudent = async () => {
        try {
            const {data} = await getStudentByid(studentId)
            const result = data.result
            setStudent(result)
        } catch (error) {
            console.log(error);
        }
    }

    const { pathname } = useLocation();

    useEffect(() => {
        detaileStudent()
    }, [pathname])

    const Property = (key, e) => {
        switch (key) {
            case "fullName":
                setStudent({ ...student, fullName: e.target.value })
                break;
            case "phoneNumber":
                setStudent({ ...student, phoneNumber: e.target.value })
                break;
            case "birthDate":
                setStudent({ ...student, birthDate: e.target.value })
                break;
            case "nationalId":
                setStudent({ ...student, nationalId: e.target.value })
                break;
            case "email":
                setStudent({ ...student, email: e.target.value })
                break;
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        const Students = {
            fullName : student.fullName,
            phoneNumber : student.phoneNumber,
            birthDate : student.birthDate,
            nationalId : student.nationalId,
            email : student.email,
        }
        try {
            const {status,data} = await updateStudent(Students,studentId)
            if (data) {
                navigate("/app/StudentsManage/StudentsList")
            }
            if (status === 200) {
                toast.success('دانش آموز با موفقیت ویرایش شد',{position:'top-right',closeOnClick:'true'})
            }
        } catch (ex) {
            toast.error('مشکلی پیش آمده است',{position:'top-right',closeOnClick:'true'})
        }
    }
    return ( 
        <Fragment>
            <div className='container'>
                <div className='row'>
                    <Sidebar/>
                <form className='col-md-9 content' onSubmit={handleSubmit}>
                    <div className='profile'>
                        <h4 className='updateInformationAdmin'>ویرایش دانش آموز</h4>
                            <div className="userInformation">
                                <div className='row mb-2'>
                                    <div className="col-md-6" id='password'>
                                        <input className="typeFormPanel" 
                                        type="text" 
                                        name="birthDate"
                                        placeholder="birthDate"
                                        value={student.birthDate}
                                        onChange={e => { Property("birthDate", e) }}
                                        />
                                    </div>
                                    <div className="col-md-6 username">
                                        <input className="typeFormPanel" 
                                        type="text" 
                                        name="fullName"
                                        placeholder="fullname"
                                        value={student.fullName}
                                        onChange={e => { Property("fullName", e) }}
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-4" id="email">
                                        <input className="typeFormPanel" 
                                        type="email" 
                                        name="email"
                                        placeholder="Email"
                                        value={student.email}
                                        onChange={e => { Property("email", e) }}
                                        />
                                    </div>
                                    <div className="col-md-4" id="call">
                                        <input className="typeFormPanel" 
                                        type="text" 
                                        name="phoneNumber"
                                        placeholder="phoneNumber"
                                        value={student.phoneNumber}
                                        onChange={e => { Property("phoneNumber", e) }}
                                        />
                                    </div>
                                    <div className="col-md-4" id="call">
                                        <input className="typeFormPanel" 
                                        type="text" 
                                        name="nationalId"
                                        placeholder="nationalId"
                                        value={student.nationalId}
                                        onChange={e => { Property("nationalId", e) }}
                                        />
                                    </div>
                                </div>
                                <button className='updateAdmin' type='submit'>ویرایش</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </Fragment>
     );
}
 
export default EditStudent;