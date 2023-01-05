import React, { Fragment, useContext, useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { StateContext } from '../../../../AdminComponents/context/DataContext';

const Search = () => {
    const{courses} = useContext(StateContext)

    const[search,setSearch] = useState("")
    const[change,setChange] = useState(false)
    const[True,setTrue]=useState(false)
    const menuRef = useRef()
        const CloseHandler = () => {
        setTrue(!True)
    }

    const filteredCourses = courses.filter(data => data.title.includes(search))
    useEffect(() => {
        let handler = (e) => {
            if (!menuRef.current.contains(e.target)) {
                setTrue(false)
            }
        }
        document.addEventListener("mousedown",handler)
        
        if (search.length) {
            setChange(true)
        }
        if (!search.length) {
            setChange(false)
        }
        return () => {
            document.removeEventListener("mousedown",handler)
        }
    },[search])
    
    return ( 
        <div ref={menuRef}>
            <div className={True?"search-bar":"search-bar active"} >
            <div>
                <FontAwesomeIcon className='magnifier' icon={faMagnifyingGlass} onClick={CloseHandler}/>
                <input 
                type="search" 
                className={True?"input":"input active"} 
                placeholder="جستجو..."
                onChange={e => setSearch(e.target.value)}
                />
            </div>
            <div className={change ? "searchResult" : "noThing"}>
            {filteredCourses.length ?
                <Fragment>
                    {filteredCourses.map(item => (
                <div className='col-6 col-md-4 searchCourse'>
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
            </Fragment>  :
            <div className='text-center' style={{color : 'red',padding : '5px'}}><p>چیزی پیدا نشد🤔</p></div>
        }
            </div>
        </div>
        </div>
        
     );
}
 
export default Search;