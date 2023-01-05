import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './../../../../style/UserStyle/MainPage/Landing/Asatid.css'

const Asatid = () => {
    return ( 
        <section className="experts">
        <div className="overlay">
            <h2 className="titleExperts">اساتید</h2>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-xl-3 introduceLanding">
                        <div className="pictureAsatid"><img src={require('../../../../Assets/UserAssets/MainPage/LandingPage/Asatid/portrait-female-teacher-holding-notepad-green.jpg')} alt=""/></div>
                        <div className="pictureAsatid-overlay pictureAsatid-blur">
                            <i className="fa-brands fa-instagram icon"></i>
                            <i className="fa-brands fa-twitter icon"></i>
                            <i className="fa-solid fa-envelope-open icon"></i>
                            <i className="fa-brands fa-whatsapp icon"></i>
                        </div>
                        <h6 className="teacherAsatid">دکتر رضانژاد</h6>
                        <p className="job">برنامه نویس جاوااسکریپت</p>
                    </div>
                    <div className="col-md-6 col-xl-3 introduceLanding">
                        <div className="pictureAsatid"><img src={require('../../../../Assets/UserAssets/MainPage/LandingPage/Asatid/instructor_4.png')} alt=""/></div>
                        <div className="pictureAsatid-overlay pictureAsatid-blur">
                        <i className="fa-brands fa-instagram icon"></i>
                            <i className="fa-brands fa-twitter icon"></i>
                            <i className="fa-solid fa-envelope-open icon"></i>
                            <i className="fa-brands fa-whatsapp icon"></i>
                        </div>
                        <h6 className="teacherAsatid">دکتر سیدنژاد</h6>
                        <p className="job">برنامه نویس پایتون</p>
                    </div>
                    <div className="col-md-6 col-xl-3 introduceLanding">
                        <div className="pictureAsatid"><img src={require('../../../../Assets/UserAssets/MainPage/LandingPage/Asatid/woman-using-tablet.jpg')} alt=""/></div>
                        <div className="pictureAsatid-overlay pictureAsatid-blur">
                        <i className="fa-brands fa-instagram icon"></i>
                            <i className="fa-brands fa-twitter icon"></i>
                            <i className="fa-solid fa-envelope-open icon"></i>
                            <i className="fa-brands fa-whatsapp icon"></i>
                        </div>
                        <h6 className="teacherAsatid">دکتر قربانی</h6>
                        <p className="job">برنامه نویس جاوا</p>
                    </div>
                    <div className="col-md-6 col-xl-3 introduceLanding">
                        <div className="pictureAsatid"><img src={require('../../../../Assets/UserAssets/MainPage/LandingPage/Asatid/instructor_4.png')} alt=""/></div>
                        <div className="pictureAsatid-overlay pictureAsatid-blur">
                        <i className="fa-brands fa-instagram icon"></i>
                            <i className="fa-brands fa-twitter icon"></i>
                            <i className="fa-solid fa-envelope-open icon"></i>
                            <i className="fa-brands fa-whatsapp icon"></i>
                        </div>
                        <h6 className="teacherAsatid">دکتر رحیمی</h6>
                        <p className="job">برنامه نویس متلب</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
     );
}
 
export default Asatid;