import React, { Fragment, useEffect, useState } from 'react';

// import './../../style/UserStyle/UserPanel/UserPanelUpdateInfo.css'
import './../../../AdminComponents/pages/AddLesson/AddLesson.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Sidebar from './../../../AdminComponents/components/Sidebar/Sidebar';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';
import { addLessons } from '../../../core/Services/AdminServices/AdminPanelServices';
import { Upload } from '../../../core/Services/AdminServices/Upload';

const AddLesson = () => {
    const [file,setFile] = useState()

    const UploadImg = async event => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("image", file);
        try {
            const { status, data } = await Upload(formData);
            if (status === 200) {
                toast.success("آپلود عکس انجام شد", {
                    position: "top-right",
                    closeOnClick: true
                });
                AddLesson(data.result)
            }
        } catch (ex) {
            console.log(ex);
            toast.error("مشکل در آپلود عکس", {
                position: "top-right",
                closeOnClick: true
            });
        }
    }

    const [Ltitle, setLtitle] = useState()
    const [Ltopic, setLtopic] = useState([])
    const [Ldesc, setLdesc] = useState()
    const [Lcategory,setLcategory] = useState()

    let topicArray = []
    topicArray.push(Ltopic);

    const validator = (Info) => {
        if (!Info.lessonName)
            return "اسم دوره وارد نشده"
        else if (!Info.topics)
            return "زمينه دوره مشخص نشده"
        else if (!Info.description)
            return "توضيحات دوره مشخص نشده"
        else if (!Info.category)
            return "دسته بندی دوره مشخص نشده"
    };
    //اضافه کردن دوره ////////
    const AddLesson = (LImg) => {
        const LInfo = {
            lessonName: Ltitle,
            topics: topicArray,
            image: LImg,
            description: Ldesc,
            category: Lcategory
        }
        const error = validator(LInfo);
        if (error)
            return toast.error(error);
        addLessons(LInfo, (succ) => {
            if (!succ) {
                return toast.error("مشکلي پيش آمده");
            }
            else {
                toast.success("دوره با موفقيت اضافه شد");
            }
        })

    }

    return ( 
        <Fragment>
            <div className='container'>
                <div className='row'>
                    <Sidebar/>
                <form className='col-md-9 content'>
                    <div className='profile'>
                        <h4 className='updateInformationAdmin'>افزودن دوره</h4>
                            <div className="userInformation">
                                <div className='row mb-2'>
                                    <div className="col-md-4" id='password'>
                                        <input className="typeFormPanel" 
                                        value={Lcategory}
                                        onChange={e => setLcategory(e.target.value)}
                                        type="text" 
                                        placeholder="دسته بندی ها"
                                        />
                                    </div>
                                    <div className="col-md-4 username mb-2">
                                        <input className="typeFormPanel" 
                                        value={Ltopic}
                                        onChange={e => setLtopic(e.target.value)}
                                        type="text" 
                                        placeholder="موضوع دوره"
                                        />
                                    </div>
                                    <div className="col-md-4" id='password'>
                                        <input className="typeFormPanel" 
                                        value={Ltitle}
                                        onChange={e => setLtitle(e.target.value)}
                                        type="text" 
                                        placeholder="نام دوره"
                                        />
                                    </div>

                                </div>
                                <div className="row">
                                    <div className='col-md-6 mb-2'>
                                        <label For="uploadPic" style={{backgroundColor:"rgb(125 122 122)"}}>
                                            ارسال عکس
                                            <FontAwesomeIcon icon={faCamera} className="m-2"/>
                                            </label>
                                        <input id="uploadPic"
                                        type="file"
                                        onChange={e => setFile(e.target.files[0])}
                                        />
                                    </div>
                                    <div className='col-md-6'>
                                        <textarea 
                                        value={Ldesc} 
                                        onChange={e => setLdesc(e.target.value)}
                                        className="adminTextarea" placeholder="توضیحات"/>
                                    </div>
                                </div>
                                <button className='updateAdmin' type='submit' onClick={UploadImg}>افزودن</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </Fragment>
     );
}
 
export default AddLesson;