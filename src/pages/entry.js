

import React  from 'react';
import { Link } from "react-router-dom";
import { Col, Row } from 'antd';
import { SmileOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';

import logoImg from '../../styles/images/logo.jpg';

const Entry = () => {
    
    return (
        <div className="entryContainer">
			<header id="header">
                <Row>
                    <Col span={8}><Link to="/"><img src = { logoImg } alt="logo"/></Link></Col>
                    <Col span={8}><h1 className="titleText">Test Irox</h1></Col>
                    <Col span={8}><div className="linkToHome"><Link to="/home"><u>entry</u></Link></div></Col>
                </Row>
			</header>
			<div id="heading"></div>
			<section className="wrapper">
				<div className="inner">
                    <div className="entryPage">
                        <div className="innerEntryPage">
                            <div className="bannerContainer">
                                <h1> Wellcome to the test of Irox </h1>
                                <h2> Hope you will enjoy from our new site <SmileOutlined/></h2>
                            </div>
                        </div>
                    </div>
				</div>
			</section>
        </div>
      
    );
}
export default Entry;