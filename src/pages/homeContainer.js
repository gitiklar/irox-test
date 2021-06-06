import React from 'react';
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';

import logoImg from '../../styles/images/logo.jpg';

const HomeContainer = ({children}) => {

    return (
        <div className="homeContainer">
            <header id="header">
                <Link to="/"><img src={logoImg} alt="logo"/></Link>
                 <div className="divHello">
                    <span> &nbsp; &nbsp; Hello guest &nbsp;</span>
                 </div>
            </header>
            <div id="heading" >
                <div className="menuLine">
                    <Link to="/">Back to entry</Link>
                    <Link to="/table">table</Link>
                </div>
            </div>
            <section id="main">
                <div className="inner">
                    {children}
                </div>
            </section>
        </div>
    );
};

export default HomeContainer;