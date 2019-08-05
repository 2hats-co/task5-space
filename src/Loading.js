import React from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from 'react-loader-spinner';
import './Loading.css';


const Loading = () => {
    return (
        <div className="load-wrapper">
            <Loader
                type="Circles"
                color="Blue"
                height={300} width={300}
            />
            <h1 className="loading">Please wait...</h1>
        </div>)
};

export default Loading;