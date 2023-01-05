import React, { Fragment } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'
import './../../../../style/UserStyle/MainPage/Footer/Footer.css'

const Footer = () => {
    return ( 
        <Fragment>
        <footer>
        <div className="container">
            <div className="row relation">
                <div className="col-md-6 leftLanding">
                    <div className="logoFooter">
                        <img className="star" src={require('../../../../Assets/UserAssets/MainPage/Footer/logo (1).png')} alt=""/>
                    </div>
                    <p className="matn">بهترین سایت آموزشی برای <br/>یادگیری ما رو به دوستانتون<br/> معرفی کنید</p>
                </div>
                <div className="col-md-6 rightLanding">
                    <h6 className="onvan">آدرس</h6>
                    <div className="addressFooter">
                        <p className="matn">ساری-میدان خزر آموزشگاه استار</p>
                        <i className="fa-solid fa-location-dot icon"></i>
                    </div>
                    <div className="addressFooter">
                        <p className="matn">011-33354688</p>
                        <i className="fa-solid fa-phone icon"></i>
                    </div>
                    <div className="addressFooter">
                        <p className="matn">Example@gmail.com</p>
                        <i className="fa-solid fa-envelope icon"></i>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    <section className="copy-right">
        <div className="container">
            <div className="row">
                <div className="col-xl-12">
                    <p className="me">در تاریخ 1401/03/11 ری اکتی شدم 😉<br/>طراحی شده توسط من عزیز😊 در تاریخ 1401/01/21 امیدوارم خوشتون بیاد</p>
                </div>
            </div>
        </div>
    </section>
        </Fragment>
     );
}
 
export default Footer;