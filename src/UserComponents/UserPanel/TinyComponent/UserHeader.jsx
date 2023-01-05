import React from 'react';
import './../../../style/UserStyle/UserPanel/UserHeader.css'
import { Link } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars, faHouse} from '@fortawesome/free-solid-svg-icons'

const UserHeader = (props) => {
    return ( 
        <div className='container'>
            <div className='row'>
                <div className='col-md-12'>
                    <nav className='navbarUser'>
                        <div className='responsiveUserpanel'>
                            <FontAwesomeIcon className='hamburgerUser' icon={faBars} onClick={props.Click}/>
                        </div>
                        <Link to='/home'>
                            <FontAwesomeIcon className='homeUser' icon={faHouse} onClick={props.Click}/>
                        </Link>
                    </nav>
                </div>
            </div>

        </div>
     );
}
 
export default UserHeader;