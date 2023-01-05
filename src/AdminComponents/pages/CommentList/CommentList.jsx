// import React, { useEffect, useState } from 'react';
// import { getCommentList } from '../../../core/Services/UserServices/Comment';
// import Sidebar from './../../components/Sidebar/Sidebar';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

// const CommentList = () => {

//     const[comment,setComment] = useState([])
//     const LoadData = async () => {
//         try {
//             const {data} = await getCommentList()
//             const result = data.result
//             console.log(result)
//             setComment(result)
//         } catch (error) {
//             console.log(error);
//         }
//     }
//     useEffect(() => {
//         LoadData()
//     },[])
//     return ( 
//         <div className='container'>
//             <div className='row'>
//                 <Sidebar/>
//                     <div className='col-md-9 content'>
//                         <div className='profile'>
//                             <h4 className='dashboardAdmin'>کامنت ها</h4>
//                             <div className="userDashboard">
//                                 <table className='table table-striped table-hover table-responsive'>
//                                     <thead>
//                                         <tr>
//                                             <th>نمایش</th>
//                                             <th>وضعیت</th>
//                                             <th>تاریخ</th>
//                                             <th>ایمیل</th>
//                                             <th>نام</th>
                                        
//                                         </tr>
//                                     </thead>
//                                     <tbody>
//                                         {admins.map(item => (
//                                             <tr key={item._id}>
//                                                 <th><FontAwesomeIcon icon={faPen} style={{color:"#828a8f",cursor:"pointer"}}
//                                                 onClick={() => adminEdit(item)}
//                                                 /></th>
//                                             <th><FontAwesomeIcon icon={faTrash} style={{color:"#828a8f",cursor:"pointer"}}
//                                             onClick={() => confirm(item)}
//                                             /></th>
//                                             <th><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></th>
//                                             <th>{item.isActive?"فعال":"غیرفعال"}</th>
//                                             <th>{item.role}</th>
//                                             <th>{item.phoneNumber}</th>
//                                             <th>{item.email}</th>
//                                             <th>{item.fullName}</th>
//                                         </tr>
//                                         ))}
                                        
//                                     </tbody>
//                                 </table>
//                             </div>
//                         </div>

//                     </div>
//             </div>
//         </div>
//      );
// }
 
// export default CommentList;