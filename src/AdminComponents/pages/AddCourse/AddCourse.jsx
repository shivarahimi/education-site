import React, { Fragment, useEffect, useState } from 'react';

// import './../../style/UserStyle/UserPanel/UserPanelUpdateInfo.css'
import './../../../AdminComponents/pages/AddLesson/AddLesson.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Sidebar from './../../../AdminComponents/components/Sidebar/Sidebar';
import { toast } from 'react-toastify';
import { addCourses, allTeacher } from './../../../core/Services/AdminServices/AdminPanelServices';
import { getAllLesson } from './../../../core/Services/UserServices/Landing';

const AddCourse = () => {
    const [lesson,setLesson] = useState([])
    const [teach,setTeach] = useState([])
    const showTeacher = async () => {
        try {
            const {data} = await allTeacher()
            const result = data.result
            setTeach(result)
        } catch (error) {
            console.log(error);
        }
    }
    const showLesson = async () => {
        try {
            const {data} = await getAllLesson()
            const result = data.result
            setLesson(result)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        showTeacher()
        showLesson()
    },[])

    const [CName, setCname] = useState()
    const [CCost, setCcost] = useState()
    const [CSDate, setCsDate] = useState()
    const [CEDate, setCeDate] = useState()
    const [CCapacity, setCcapacity] = useState()
    const [CteacherId, setCteacherId] = useState()
    const [ClessonId, setClessonId] = useState()

    const handleSubmit = async (event) => {
        event.preventDefault()
        const CourseData = {
            title:CName,cost:CCost,
            endDate:CEDate,startDate:CSDate,
            capacity:CCapacity,teacher:CteacherId,
            lesson:ClessonId
        }
        try {
            const {status} = await addCourses(CourseData)
            if (status === 200) {
                toast.success('ترم با موفقیت اضافه شد',{position:'top-right',closeOnClick:'true'})
            }
        } catch (error) {
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
                        <h4 className='updateInformationAdmin'> افزودن ترم</h4>
                            <div className="userInformation">
                                <div className='row'>
                                    <div className="col-md-6 username mb-2">
                                        <input className="typeFormPanel" 
                                        type="text" 
                                        placeholder="قیمت ترم"
                                        value={CCost}
                                        onChange={e => setCcost(e.target.value)}
                                        />
                                    </div>
                                    <div className="col-md-6" id='password'>
                                        <input className="typeFormPanel" 
                                        type="text" 
                                        placeholder="نام ترم"
                                        value={CName}
                                        onChange={e => setCname(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className="col-md-4 username mb-2">
                                        <input className="typeFormPanel" 
                                        type="text" 
                                        placeholder="تاریخ پایان ترم"
                                        value={CEDate}
                                        onChange={e => setCeDate(e.target.value)}
                                        />
                                    </div>
                                    <div className="col-md-4" id='password'>
                                        <input className="typeFormPanel" 
                                        type="text" 
                                        placeholder="تاریخ آغاز ترم"
                                        value={CSDate}
                                        onChange={e => setCsDate(e.target.value)}
                                        />
                                    </div>
                                    <div className="col-md-4 username mb-2">
                                        <input className="typeFormPanel" 
                                        type="text" 
                                        placeholder="ظرفیت دوره"
                                        value={CCapacity}
                                        onChange={e => setCcapacity(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className='col-md-6 mb-2'>
                                        <select value={CteacherId}  style={{textAlign:"right"}}
                                        onChange={e => setCteacherId(e.target.value)}>
                                            <option>استاد مورد نظرتان را انتخاب کنید</option>
                                            {
                                                teach.map(item => 
                                                    <option value={item._id}>{item.fullName}</option>
                                                )
                                            }
                                        </select>
                                    </div>
                                    <div className='col-md-6'>
                                        <select value={ClessonId} style={{textAlign:"right"}}
                                        onChange={e => setClessonId(e.target.value)}
                                        >
                                            <option>دوره مورد نظرتان را انتخاب کنید</option>
                                            {
                                                lesson.map(item => 
                                                    <option value={item._id}>{item.lessonName}</option>
                                                )
                                            }
                                        </select>
                                    </div>

                                </div>

                                <button className='updateAdmin' type='submit'>افزودن</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </Fragment>
     );
}
 
export default AddCourse;