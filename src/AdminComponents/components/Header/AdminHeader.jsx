import React from 'react';
import './../../../AdminComponents/components/Header/AdminHeader.css'
import { Link } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars, faBell, faEnvelope, faSearch} from '@fortawesome/free-solid-svg-icons'

const adminHeader = (props) => {
    return ( 
        <div className='container'>
            <div className='row'>
                <div className='col-md-12'>
                    <nav className='navbarAdmin'>
                        <div className='responsiveUserpanel'>
                            <FontAwesomeIcon className='hamburgerAdmin' icon={faBars} onClick={props.Click}/>
                        </div>
                        <div style={{color:"#999999",fontSize:"20px"}}>
                            <FontAwesomeIcon className='m-1' icon={faSearch}/>
                            <FontAwesomeIcon className='m-1 bell' icon={faBell}/>
                            <FontAwesomeIcon className='m-1' icon={faEnvelope}/>
                        </div>
                    </nav>
                </div>
            </div>

        </div>
     );
}
 
export default adminHeader;