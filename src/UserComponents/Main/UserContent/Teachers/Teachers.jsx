import React, { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import { StateContext } from '../../../../AdminComponents/context/DataContext';
import Header from '../../Header/Header';
import Footer from '../../MainContent/Footer/Footer';
import './../../../../style/UserStyle/UserContent/Teachers/Teachers.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'

const Teachers = () => {
    const{teachers} = useContext(StateContext)
    
    return ( 
        <Fragment>
        <Header/>
        <div className='container'>
            <div className='row allTeachers'>
                <h3 className='teachersIntroduction'>...با اساتید ما بیشتر آشنا شوید</h3>
            {
                teachers.map((item) => (
                    <div className='col-12 col-md-4'> 
                        <Link to={{pathname : `/home/teachers/${item._id}`, state : item}} key={item._id}>
                        <div className='oneTeacher'>
                            <div className='teacherspicList'><img src={item.profile} alt=''/></div>
                            <div className='moarefi'>
                                <h6 className='summeryTeacher text-primary'>{item.fullName}</h6>
                                <div className='d-flex'>
                                <FontAwesomeIcon className='teacherIcon' icon={faPhone}/>
                                <FontAwesomeIcon className='teacherIcon' icon={faEnvelope}/>
                                </div>
                                <FontAwesomeIcon className=' allnewsArrow' icon={faArrowLeft}/>
                            </div>
                        </div>
                        </Link>
                    </div>
                ))
            }
            </div>
        </div>
        <Footer/>
        </Fragment>
        
     );
}
 
export default Teachers;