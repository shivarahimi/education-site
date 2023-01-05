import React, { Fragment, useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router';
import { toast } from 'react-toastify';
import { getLessonByid } from '../../../core/Services/UserServices/Comment';
import { editLesson } from './../../../core/Services/AdminServices/AdminPanelServices';
import { useNavigate } from 'react-router-dom';
import Sidebar from './../../components/Sidebar/Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';

const EditeLesson = () => {
    
    const navigate = useNavigate()
    const {lessonAdminId} = useParams()
    const [lesson,setLesson] = useState([])
    
    const detaileLesson = async () => {
        try {
            const {data} = await getLessonByid(lessonAdminId)
            const result = data.result
            setLesson(result)
        } catch (error) {
            console.log(error);
        }
    }
    const { pathname } = useLocation();
    useEffect(() => {
        detaileLesson()
    }, [pathname])
    const setPrp=(key,e)=>{
        // eslint-disable-next-line default-case
        switch(key){
            case "lessonName":
                setLesson({...lesson,lessonName : e.target.value})
            break;
            case "topics":
                setLesson({...lesson,topics : e.target.value})
            break;
            case "description" : 
                setLesson({...lesson,description : e.target.value})
            break;
            case "category" : 
                setLesson({...lesson,category : e.target.value})
            break;
            case "image" : 
                setLesson({...lesson,image : e.target.value})
            break;
        }
    }
    const handleSubmit = async (event) => {
        event.preventDefault()
        const Lessons = {
            lessonName:lesson.lessonName,
            description:lesson.description,
            image:lesson.image,
            category:lesson.category,
            topics:[lesson.topics]
        }
        try {
            const {status,data} = await editLesson(Lessons,lessonAdminId)
            if (data) {
                navigate("/app/LessonList")
            }
            if (status === 200) {
                toast.success('دوره با موفقیت ویرایش شد',{position:'top-right',closeOnClick:'true'})
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
                        <h4 className='updateInformationAdmin'>ویرایش دوره</h4>
                            <div className="userInformation">
                                <div className='row'>
                                    <div className="col-md-6 email">
                                        <input className="typeFormPanel" 
                                        type="text" 
                                        name="topics"
                                        placeholder="topics"
                                        value={lesson.topics}
                                        onChange={e => { setPrp("topics", e) }}
                                        />
                                    </div>
                                    <div className="col-md-6" id='email'>
                                        <input className="typeFormPanel" 
                                        type="text" 
                                        name="lessonName"
                                        placeholder="lessonName"
                                        value={lesson.lessonName}
                                        onChange={e => { setPrp("lessonName", e) }}
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className='col-md-6 mb-2'>
                                        <label For="uploadPic" style={{backgroundColor:"rgb(125 122 122)"}}>
                                            ارسال عکس
                                            <FontAwesomeIcon icon={faCamera} className="m-2"/>
                                            </label>
                                            <input id="uploadPic" type="file"
                                            accept='image/png,image/gif,image/jpeg'
                                            onChange={e=>{ setPrp("image",e)}}
                                        />
                                    </div>
                                    <div className="col-md-6" id="email">
                                        <input className="typeFormPanel" 
                                        type="text" 
                                        name="description"
                                        placeholder="description"
                                        value={lesson.description}
                                        onChange={e => { setPrp("description", e) }}
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
 
export default EditeLesson;