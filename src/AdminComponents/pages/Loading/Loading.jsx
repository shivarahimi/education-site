import React from 'react';
import './../../../AdminComponents/pages/Loading/Loading.css'
import { useState, useEffect } from 'react';

const Loader = (props) => {

    useEffect(() => {
        if (props.true) {
            setLoaderState(true)
        }
        if (!props.true) {
            setLoaderState(false)
        }
    }, [props.true])

    const [loaderState, setLoaderState] = useState(false);
    
    return (
        <div className={loaderState ? "Loader" : "Loader LoaderHide"}>
            <div className="Loader_Box">
                <div className="container">
                    <img src={require('./../../../Assets/UserAssets/Header/loading_me.gif')} alt="Loding" />
                </div>
            </div>
        </div>
    )
}
export default Loader

