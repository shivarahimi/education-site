import React, { Fragment, useContext, useState } from 'react';
import './../../../../style/UserStyle/UserContent/NewsList/NewsList.css'
import Header from '../../Header/Header';
import { Link } from 'react-router-dom';
import { StateContext } from '../../../../AdminComponents/context/DataContext';
import GoToTop from '../../../../AdminComponents/components/GoToTop/GoToTop';

const NewsList = () => {
    const{totalPost,news} = useContext(StateContext)
    const[currentPage,setCurrentPage] = useState(1)
    const[postPerPage] = useState(6)

    const lastPost = currentPage * postPerPage
    const firstPost = lastPost - postPerPage
    const getCurrentPost = news.slice(firstPost,lastPost)

    const pageNumber = []
    for (let i = 1; i <= Math.ceil(totalPost/6); i++) {
    pageNumber.push(i)        
    }

    const Pagination = (number) => setCurrentPage(number)
    return ( 
        <Fragment>
            <Header/>
            <div className='container'>
                <div className='row newsList'>
                    <div className='col-md-8'>
                        <div className='allNewslist'>
                            {
                                getCurrentPost.map((item) => (
                                    <Link to={{pathname : `/home/newsList/${item._id}`, state : item}} key={item._id}>
                                    <div className='oneNews'>
                                        <div className='newspicList'><img src={item.image} alt=''/></div>
                                        <div className='moarefi'>
                                            <h6 className='summery-news text-primary'>{item.title}</h6>
                                            <p className='textNews-news'>{item.text}</p>
                                            <button className='NewslistBtn'>نمایش بیشتر</button>
                                        </div>
                                    </div>
                                    </Link>
                                ))
                            }
                        </div>
                        <ul className='pNews'>
                        {pageNumber.map((number) =>
                            <li className='pNew'onClick={e => Pagination(number)} key={number}>{number}</li>
                        )}
                        </ul>
                    </div>
                    <div className='col-md-4'>
                        <div className='papular'>
                            <h6>محبوب ترین خبرها</h6>
                            <hr className='bold'/>
                            <div className='sub'>
                                <p className='textNewslist'>هشدار حمله هکرها به ایران</p>
                                <div className='newsListPic'><img src={require('../../../../Assets/UserAssets/UserContent/NewsList/Bottom/2441887.jpg')} alt=''/></div>
                            </div>
                            <div className='sub'>
                                <p className='textNewslist'>هشدار حمله هکرها به ایران</p>
                                <div className='newsListPic'><img src={require('../../../../Assets/UserAssets/UserContent/NewsList/Bottom/2441887.jpg')} alt=''/></div>
                            </div>
                            <div className='sub'>
                                <p className='textNewslist'>هشدار حمله هکرها به ایران</p>
                                <div className='newsListPic'><img src={require('../../../../Assets/UserAssets/UserContent/NewsList/Bottom/2441887.jpg')} alt=''/></div>
                            </div>
                            <div className='sub'>
                                <p className='textNewslist'>هشدار حمله هکرها به ایران</p>
                                <div className='newsListPic'><img src={require('../../../../Assets/UserAssets/UserContent/NewsList/Bottom/2441887.jpg')} alt=''/></div>
                            </div>
                        </div>
                    </div>
                    <GoToTop/>
                </div>
            </div>
        </Fragment>
     );
}
 
export default NewsList;