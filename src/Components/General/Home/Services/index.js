import React, { Component, useState } from 'react'
import '../Services/style.scss';
import {Container, Row, Col } from 'react-bootstrap';
import { BsLightbulb, BsClock } from "react-icons/bs";
import { BiPencil } from "react-icons/bi";
import { FiMonitor } from "react-icons/fi";
import { AiOutlineMobile } from "react-icons/ai";
import { MdOutlineTouchApp, MdAutoGraph } from "react-icons/md";

import DigitalStratigy from './DigitalStratigy';
import Design from './Design';
import Web from './Web';
import Mobile from './Mobile';
import SocialMedia from './SocialMedia';
import OnlineMediaBuying from './OnlineMediaBuying';
import SEO from './SEO';


const Services = () => {

    const [data, setData]=useState(DigitalStratigy);
   
    

    var elem = document.getElementById("intro");

    const Display = (event) =>{
       
        console.log("clicked");

        const name= event.target.dataset.name;
        console.log(event.target.dataset.name);
        
        switch (name) {
            case 'Digital': setData(DigitalStratigy)
            break;
            case 'Design' : setData(Design)
            break;
            case 'Web' : setData(Web)
            break;
            case 'Mobile' : setData(Mobile)
            break;
            case 'socialMedia' : setData(SocialMedia)
            break;
            case 'Clock' : setData(OnlineMediaBuying)
            break;
            case 'SEO' : setData(SEO)
            break;

            default: return <h2>no data found</h2>;
                
        }

    }
  return (
   <>
       <Container className='container'>
       <h2>Services</h2>
       <Row className='row'>
           <Col lg={1} md={2} sm={2} xs={2}><BsLightbulb className='icon' onClick={Display} data-name="Digital"/></Col>
           <Col lg={1} md={2} sm={2} xs={2} ><BiPencil className='icon' onClick={Display} data-name="Design"/></Col>
           <Col lg={1} md={2} sm={2} xs={2} ><FiMonitor className='icon' onClick={Display} data-name="Web"/></Col>
           <Col lg={1} md={2} sm={2} xs={2}><AiOutlineMobile  className='icon' onClick={Display} data-name="Mobile"/></Col>
           <Col lg={1} md={2} sm={2} xs={2} ><MdOutlineTouchApp className='icon' onClick={Display} data-name="socialMedia"/></Col>
           <Col lg={1} md={2} sm={2} xs={2} ><BsClock className='icon' onClick={Display} data-name="Clock"/></Col>
           <Col lg={1} md={2} sm={2} xs={2}><MdAutoGraph  className='icon' onClick={Display} data-name="SEO"/></Col>
       </Row>

       <div className='renderData'>
           {data}
       </div>

       
        
   </Container>
   
   </>
  )
}

export default Services
