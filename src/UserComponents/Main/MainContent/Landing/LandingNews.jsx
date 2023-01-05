import React, { useContext } from 'react';
import {Link} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import './../../../../style/UserStyle/MainPage/Landing/LandingNews.css'
import { StateContext } from '../../../../AdminComponents/context/DataContext';

const LandingNews = () => {
    const{news} = useContext(StateContext)
    const NewNews = news.slice(0,2)
    return ( 
        <section className="news">
        <h2 className="titleNews">اخبار</h2>
        <div className="container">
            <div className="row all">
                    {NewNews.map(item => (
                        <Link to={{pathname : `/home/newsList/${item._id}`, state : item}} key ={item._id}>
                            <div className="col-md-12 new">
                                <h6 className='summery text-primary'>{item.title}</h6>
                                <p className='text'>{item.text}</p>
                                <div className='newspic'><img src={item.image} alt=''/></div>
                            </div>
                        </Link>
                    ))}
                <Link to='/home/newsList'>
                    <i class="fa-solid fa-arrow-left allnewsArrow"></i>
                    <button className="allnews">همه اخبار</button>
                </Link>
            </div>
        </div>
    </section>
     );
}
 
export default LandingNews;