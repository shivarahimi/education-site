import React, { useEffect, useState } from 'react';
import Sidebar from './../../components/Sidebar/Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { getAllStudent } from '../../../core/Services/AdminServices/StudentServices';
import { useParams, useLocation } from 'react-router-dom';
import { getCourseByid } from './../../../core/Services/UserServices/Comment';
import { toast } from 'react-toastify';
import { confirmAlert } from 'react-confirm-alert';
import { deleteStudent } from './../../../core/Services/AdminServices/StudentServices';
import { addStudentToCourse } from '../../../core/Services/AdminServices/AdminPanelServices';
import './../../../AdminComponents/pages/StudentsCourse/StudentsCourse.css'


const StudentsCourse = (props) => {
    const[addStu,setAddstu] = useState([])
    const[course,setCourse] = useState({})

  const {courseId} = useParams()
  const LoadData = async () => {
      try {
          const {data} = await getCourseByid(courseId)
          const result = data.result
          setCourse(result)
      } catch (error) {
          console.log(error);
      }
  }
 
  const studentList = async () => {
    try {
        const {data} = await getAllStudent()
        const result = data.result
        setAddstu(result)
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

  const { pathname } = useLocation();

  useEffect(() => {
    LoadData()
  }, [pathname])

  const filtered = (addStu) => {
    const filtering = addStu.filter(item => {
      const exist = item.courses.some(item => item._id === course._id)
      return exist
    })
    return filtering
  }
  const termsStudents = filtered(addStu)

  console.log(termsStudents)
     
    const deleteStudents = async (sId) => {
        try {
            const {status} = await deleteStudent(sId)
            if(status === 200){
                toast.success("دانشجو با موفقیت حذف شد",{position:'top-right',closeOnClick:'true'})
                LoadData()
                studentList()
            }
        } catch (error) {
            toast.error("مشکلی پیش آمده است",{position:'top-right',closeOnClick:'true'})
        }
    }
    const confirm = (item) => {
    confirmAlert({
        customUI: ({ onClose }) => {
          return (
            <div dir='rtl' className='p-4' style={{backgroundColor:"cadetblue",borderRadius:"1em"}}>
              <h1 style={{color:"white"}}>پاک کردن؟</h1>
              <p className='p-2' style={{color:"white"}}>آیا میخواهی{item.fullName} پاک کنی؟</p>
              <button className="btn mx-2" style={{backgroundColor:"green",color:"white"}}
                onClick={() => {
                    deleteStudents(item._id);
                    onClose();
                }}
              >
                بله مطمئن هستم!
              </button>
              <button onClick={onClose} className="btn" style={{backgroundColor:"red",color:"white"}}>انصراف</button>
            </div>
          );
        }
      })
    }
    useEffect(() => {
        LoadData()
        studentList()
    },[])
    const[StudValue,setStudValue]=useState()
    const handleSubmit = async event => {
            event.preventDefault();
            const Cid = {
                courseId: course._id
            }
            try {
                const { status } = await addStudentToCourse(StudValue, Cid);
                if (status === 200) {
                    toast.success(('دانشجو با موفقیت به دوره اضافه شد'), {
                        position: "top-right",
                        closeOnClick: true
                    });
                    LoadData()
                    studentList()
                }
            } catch (ex) {
                if (!window.navigator.onLine) {
                    toast.error(('Check'), {
                        position: "top-right",
                        closeOnClick: true
                    });
                }
                
            }

    };
    return ( 
    <div className='container'>
      <div className='row'>
          <Sidebar/>
            <div className='col-md-9 content'>
              <form onSubmit={handleSubmit}>
                <div className='addStudent'>
                <select style={{textAlign:"right"}} onChange={e=>{setStudValue(e.target.value)}}>
                    <option>دانشجو مورد نظر را انتخاب کنيد</option>
                    {
                      addStu.map(item=>
                        <option value={item._id}>
                          {item.fullName}
                        </option>
                        )
                    }
                  </select>
                  <button className='addstudentAdmin' type="submit">افزودن</button>
                </div>
              </form>
            
                <div className='profile'>
                    <h4 className='dashboardAdmin'>دانشجوها</h4>
                    <div className="userDashboard">
                        <table className='table table-striped table-hover table-responsive'>
                            <thead>
                                <tr>
                                    <th>حذف</th>
                                    <th>ایمیل</th>
                                    <th>نام</th>
                                </tr>
                            </thead>
                            <tbody>
                                {termsStudents.map(item => (
                                    <tr key={item._id}>
                                    <th><FontAwesomeIcon icon={faTrash} style={{color:"#828a8f",cursor:"pointer"}}
                                    onClick={() => confirm(item)}
                                    /></th>
                                    <th>{item.email}</th>
                                    <th>{item.fullName}</th>
                                </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
      </div>
    </div>
     );
}
 
export default StudentsCourse;