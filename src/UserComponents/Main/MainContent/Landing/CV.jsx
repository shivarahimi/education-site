import React from 'react';
import CountUp from 'react-countup';
import './../../../../style/UserStyle/MainPage/Landing/CV.css'

const CV = () => {
    return ( 
        <section className="counter">
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-xl-3 count">
                    <div className="radius"><img src={require('../../../../Assets/UserAssets/MainPage/LandingPage/CV/senior-male-professor-explaining-writing-green-chalkboard.jpg')} alt=""/></div>
                    <div className="detailLanding">
                        <CountUp className='percentage' end={200} duration={10}/>
                        <hr className="bold"/>
                        <p className="informationCV">اساتید</p>
                    </div>
                </div>
                <div className="col-md-6 col-xl-3 count">
                    <div className="radius"><img src={require('../../../../Assets/UserAssets/MainPage/LandingPage/CV/young-beautiful-african-woman-student-resting-relaxing-sitting-cafe-smiling-drinking-coffee.jpg')} alt=""/></div>
                    <div className="detailLanding">
                        <CountUp className='percentage' end={800} duration={10}/>
                        <hr className="bold"/>
                        <p className="informationCV">دانشجویان</p>
                    </div>
                </div>
                <div className="col-md-6 col-xl-3 count">
                    <div className="radius"><img src={require('../../../../Assets/UserAssets/MainPage/LandingPage/CV/working-code.jpg')} alt=""/></div>
                    <div className="detailLanding">
                        <CountUp className='percentage' end={500} duration={10}/>
                        <hr className="bold"/>
                        <p className="informationCV">پروژه وب سایت</p>
                    </div>
                </div>
                <div className="col-md-6 col-xl-3 count">
                    <div className="radius"><img src={require('../../../../Assets/UserAssets/MainPage/LandingPage/CV/close-up-entrepreneur-woman-hands-using-smart-phone-course-deadline-businesswoman-texting-late-night-while-working-important-project-using-smartphone.jpg')} alt=""/></div>
                    <div className="detailLanding">
                        <CountUp className='percentage' end={100} duration={10}/>
                        <hr className="bold"/>
                        <p className="informationCV">پروژه اپ موبایل</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
     );
}
 
export default CV;