import React, { Fragment, useEffect, useState } from 'react';

// import './../../style/UserStyle/UserPanel/UserPanelUpdateInfo.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Sidebar from '../../components/Sidebar/Sidebar';
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';
import { getNewsByid } from './../../../core/Services/UserServices/Landing';
import { updateNew } from '../../../core/Services/AdminServices/AdminPanelServices';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera } from '@fortawesome/free-solid-svg-icons';

const EditeNews = () => {
    const navigate = useNavigate()
    const {newsAdminId} = useParams()
    const[news,setNews] = useState({})
    const detaileNews = async () => {
        try {
            const {data} = await getNewsByid(newsAdminId)
            const result = data.result
            setNews(result)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        detaileNews()
    },{})
    const changeInput=(key,e)=>{
        // eslint-disable-next-line default-case
        switch(key){
            case "title":
                setNews({...news,title : e.target.value})
            break;
            case "category":
                setNews({...news,category : e.target.value})
            break;
            case "image" : 
                setNews({...news,image : e.target.value})
            break;
            case "text" : 
                setNews({...news,text : e.target.value})
            break;
        }
    }
    const handleSubmit = async (event) => {
        event.preventDefault()
        const New = {
            title:news.title,
            category:news.category,
            image:news.image,
            text:news.text
        }
        try {
            const {status,data} = await updateNew(New,newsAdminId)
            if (data) {
                navigate("/app/NewsListAdmin")
            }
            if (status === 200) {
                toast.success('خبر با موفقیت ویرایش شد',{position:'top-right',closeOnClick:'true'})
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
                        <h4 className='updateInformationAdmin'>ویرایش اخبار</h4>
                            <div className="userInformation">
                                <div className='row'>
                                    <div className="col-md-6" id='email'>
                                        <input className="typeFormPanel" 
                                        type="text" 
                                        name="category"
                                        placeholder="category"
                                        value={news.category}
                                        onChange={e => { changeInput("category", e) }}
                                        />
                                    </div>
                                    <div className="col-md-6 email">
                                        <input className="typeFormPanel" 
                                        type="text" 
                                        name="title"
                                        placeholder="title"
                                        value={news.title}
                                        onChange={e => { changeInput("title", e) }}
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
                                            onChange={e=>{ changeInput("image",e)}}
                                        />
                                    </div>
                                    <div className="col-md-6" id="call">
                                        <input className="typeFormPanel" 
                                        type="text" 
                                        name="text"
                                        placeholder="text"
                                        value={news.text}
                                        onChange={e => { changeInput("text", e) }}
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
 
export default EditeNews;