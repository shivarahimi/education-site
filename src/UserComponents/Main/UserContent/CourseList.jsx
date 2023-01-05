import React, { Fragment, useContext, useEffect, useState } from 'react';
import './../../../style/UserStyle/UserContent/CourseList.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from '../Header/Header';
import { paginate } from './../../Common/paginate';
import Pagination from './../../Common/Pagination';
import { Link } from 'react-router-dom';
import { StateContext } from './../../../AdminComponents/context/DataContext'

const CourseList = () => {
    const{allCourses,courses} = useContext(StateContext)
    const[search,setSearch] = useState("")
    const[perPage] = useState(9)
    const[currentPage,setCurrentPage] = useState(1)

    const filteredCourses = courses.filter(course => course.title.includes(search))
    useEffect(() => {
        allCourses()
    },[])

    const courseList = paginate(filteredCourses,currentPage,perPage)
    const handlePageChange = page => {
        setCurrentPage(page)
    }
    return ( 
        <Fragment>
            <Header/>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 allCourses'>
                        <div className='topCourse'>
                            <h6 className='webProgramming'>دوره های برنامه نویسی وب</h6>
                            <div className='row'>
                                <div className='searchCourseListHeader'>
                                    <div className='col-6'>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle order" data-toggle="dropdown" href="#">مرتب سازی</a>
                                        <div className="dropdown-menu">
                                            <a href="#" className="dropdown-item">java-script</a>
                                            <a href="#" className="dropdown-item">java-script</a>
                                            <a href="#" className="dropdown-item">java-script</a>
                                        </div>
                                    </li>
                                    </div>
                                    <div className='col-6 searchCourseList'>
                                        <input 
                                        className='searchForCoursename' 
                                        placeholder='...جستجوی دوره'
                                        type="search"
                                        onChange={e => setSearch(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='coursesList'>
                            <div className='row'>
                                {courseList.map((item) => (
                                    <div className='col-6 col-md-4'>
                                        <Link to = {{pathname : `/home/courseList/${item._id}`,state : item}} key={item._id}>
                                        <div className='oneCourse'>
                                            <div className='coursesPic'><img src={item.lesson.image} alt=''/></div>
                                            <p className='doreCourseList m-2 text-center'>{item.title}</p>
                                            <div className='priceList'>
                                                <p className='text-primary costCourselist'>{item.cost}Toman</p>
                                                <div className='d-flex flex-row-reverse'>
                                                    <i class="fa-solid fa-clock timer"></i>
                                                    <span className='text-secondary dateCourselist mr-2'>{item.startDate.slice(0,10)}</span>
                                                </div>
                                            </div>
                                        </div>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <Pagination 
                        totalCourses={filteredCourses.length}
                        currentPage={currentPage}
                        perPage={perPage}
                        onPageChange={handlePageChange}
                        />
                    </div>
                </div>
            </div>
        </Fragment>
     );
}
 
export default CourseList;