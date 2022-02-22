import React, {useState } from 'react'
import '../Services/style.scss';
import {Container, Row } from 'react-bootstrap';


import sData from './sData';


const Services = () => {

    const [data, setData]=useState(sData[0]);    
    
  return (
   <>
      
       <Container className='container'>
        
       <h2>Services</h2>
       <Row lg={6} md={6} sm={4} xs={4} className='servicesRow'>{sData.map((item)=> <div onClick={()=>{setData(item)}}> <div className='icon'>{item.icon}</div> </div>)}</Row>
       <h2>{data.title}</h2>
       <p> {data.text}</p>
       </Container>
   
   </>
  )
}

export default Services
