import React from 'react';
import Header from '../../Header/Header';
import './../../../../style/UserStyle/UserContent/ContactUs/ContactUs.css'
import Footer from './../../MainContent/Footer/Footer';

const ContactUs = () => {
    return ( 
        <div>
            <Header/>
            <div className='container'>
                <div className='row contactUs d-flex justify-content-between align-items-center'>
                    <div className='col-6 col-md-6 contactPic'>
                        <img src={require('../../../../Assets/UserAssets/UserContent/ContactUs/5293.jpg')} alt=""/>
                    </div>
                    <div className='col-6 col-md-6'>
                        <h3 className='m-3' style={{color:"#123f87",fontSize:"20px",textAlign:"center"}}>تماس با ما</h3>
                        <div className="contactInfo">
                        <p className="matn">ساری-میدان خزر آموزشگاه استار</p>
                        <i className="fa-solid fa-location-dot icon"></i>
                    </div>
                    <div className="contactInfo">
                        <p className="matn">011-33354688</p>
                        <i className="fa-solid fa-phone icon"></i>
                    </div>
                    <div className="contactInfo">
                        <p className="matn">Example@gmail.com</p>
                        <i className="fa-solid fa-envelope icon"></i>
                    </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
     );
}
 
export default ContactUs;