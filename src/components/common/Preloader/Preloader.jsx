import React from "react";
import preloaderSrc from '../../../files/img/Ball-1s-200px.svg';
import './Preloader.scss';

const Preloader = () => {
    return <img src={preloaderSrc} alt="loader" className="preloader" />
}

export default Preloader;