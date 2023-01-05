import React from 'react';
import './../../../../style/UserStyle/MainPage/Landing/FullScreen.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const FullScreen = () => {

    return ( 
    <section class="fullscreen">
        <div class="container-fluid">
            <div class="row full">
                <Carousel>
                    <Carousel.Item>
                        <div className='col-12 fullPic'>
                            <img src={require('../../../../Assets/UserAssets/MainPage/LandingPage/Banners/beautiful-young-woman-home-office-working-from-home-teleworking-concept.jpg')} alt=""/>
                            <Carousel.Caption>
                                <Link to="/home/courseList">همه دروس</Link>
                            </Carousel.Caption>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className='col-12 fullPic'>
                            <img src={require('../../../../Assets/UserAssets/MainPage/LandingPage/Banners/brunette-woman-typing-email-laptop-computer-while-sitting-home-selective-focus-hand.jpg')} alt=""/>
                            <Carousel.Caption>
                            <Link to="/home/courseList">همه دروس</Link>
                            </Carousel.Caption>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className='col-12 fullPic'>
                            <img src={require('../../../../Assets/UserAssets/MainPage/LandingPage/Banners/laptop-with-blank-white-screen.jpg')} alt=""/>
                            <Carousel.Caption>
                            <Link to="/home/courseList">همه دروس</Link>
                            </Carousel.Caption>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className='col-12 fullPic'>
                            <img src={require('../../../../Assets/UserAssets/MainPage/LandingPage/Banners/media-journalism-global-daily-news-content-concept.jpg')} alt=""/>
                            <Carousel.Caption>
                            <Link to="/home/courseList">همه دروس</Link>
                            </Carousel.Caption>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    </section>
     );
}
 
export default FullScreen;