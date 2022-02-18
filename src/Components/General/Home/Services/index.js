import React, { Component, useState } from 'react'
import '../Services/style.scss';
import {Container, Row, Col } from 'react-bootstrap';
import { BsLightbulb, BsClock } from "react-icons/bs";
import { BiPencil } from "react-icons/bi";
import { FiMonitor } from "react-icons/fi";
import { AiOutlineMobile } from "react-icons/ai";
import { MdOutlineTouchApp, MdAutoGraph } from "react-icons/md";

import CommonComp from './CommonComp';
import sData from './CommonComp/sData';


const Services = () => {

    const [data, setData]=useState();
    const Display = (event) =>{
        console.log("clicked");
        const name= event.target.dataset.name;
        console.log(name);
        
        switch (name) {
            case '0': setData(sData[0]) 
            break;
            case '1' : setData(sData[1])
            break;
            case '2' : setData(sData[2])
            break;
            case '3' :  setData(sData[3])
            break;
            case '4' :  setData(sData[4])
            break;
            case '5' :  setData(sData[5])
            break;
            case '6' :  setData(sData[6])
            break;

            default: return <h2>no data found</h2>;
                
        }

        

    }
  return (
   <>
       <Container className='container'>
       <h2>Services</h2>
       <Row className='servicesRow'>
           <Col lg={1} md={2} sm={2} xs={2} style={(data==sData[0])?{color:'red'}:{color:''}}><BsLightbulb  onClick={Display} data-name="0"  /></Col>
           <Col lg={1} md={2} sm={2} xs={2} style={(data==sData[1])?{color:'red'}:{color:''}} ><BiPencil className='icon' onClick={Display} data-name="1"  /></Col>
           <Col lg={1} md={2} sm={2} xs={2} style={(data==sData[2])?{color:'red'}:{color:''}}><FiMonitor className='icon' onClick={Display} data-name="2"  /></Col>
           <Col lg={1} md={2} sm={2} xs={2} style={(data==sData[3])?{color:'red'}:{color:''}}><AiOutlineMobile  className='icon' onClick={Display} data-name="3"  /></Col>
           <Col lg={1} md={2} sm={2} xs={2} style={(data==sData[4])?{color:'red'}:{color:''}}><MdOutlineTouchApp className='icon' onClick={Display} data-name="4"  /></Col>
           <Col lg={1} md={2} sm={2} xs={2} style={(data==sData[5])?{color:'red'}:{color:''}}><BsClock className='icon' onClick={Display} data-name="5"  /></Col>
           <Col lg={1} md={2} sm={2} xs={2} style={(data==sData[6])?{color:'red'}:{color:''}}><MdAutoGraph  className='icon' onClick={Display} data-name="6"  /></Col>
       </Row>

       
           <CommonComp data={data}/>
       

       
        
   </Container>
   
   </>
  )
}

export default Services
