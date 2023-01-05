import React from 'react';
import GoToTop from '../../AdminComponents/components/GoToTop/GoToTop';
import Loading from '../../AdminComponents/pages/Loading/Loading';
import Header from './Header/Header';
import Footer from './MainContent/Footer/Footer';
import Asatid from './MainContent/Landing/Asatid';
import Courses from './MainContent/Landing/Courses';
import CV from './MainContent/Landing/CV';
import FullScreen from './MainContent/Landing/FullScreen';
import LandingNews from './MainContent/Landing/LandingNews';

const MainPage = () => {
    return ( 
        <div>
            <Header/>
            <FullScreen/>
            <Courses/>
            <CV/>
            <Asatid/>
            <LandingNews/>
            <GoToTop/>
            <Footer/>
            <Loading/>
        </div>
     );
}
 
export default MainPage;