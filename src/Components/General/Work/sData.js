import React from 'react'
import { Col, Container, Row, NavLink } from 'react-bootstrap'
import bulleh from '../../../Assets/Images/bulleh.jpg'
import bulleh2 from '../../../Assets/Images/bulleh2.jpg'
import bulleh3 from '../../../Assets/Images/bulleh3.jpg'
import bulleh4 from '../../../Assets/Images/bulleh4.jpg'
import bulleh5 from '../../../Assets/Images/bulleh5.jpg'
import bulleh6 from '../../../Assets/Images/bulleh6.jpg'

const sData = () => {
  return (
    <Container fluid className='bg-info'>
        <Row style={{justifyContent:"center"}}>
        <Col style={{padding:"0px"}} lg={4}><img style={{width:"100%", height:"400px"}} src={bulleh} alt="" /></Col>
        <Col style={{padding:"0px"}} lg={4}><img style={{width:"100%", height:"400px"}} src={bulleh2} alt="" /></Col>
        <Col style={{padding:"0px"}} lg={4}><img style={{width:"100%", height:"400px"}} src={bulleh3} alt="" /></Col>
        <Col style={{padding:"0px"}} lg={4}><img style={{width:"100%", height:"400px"}} src={bulleh4} alt="" /></Col>
        <Col style={{padding:"0px"}} lg={4}><img style={{width:"100%", height:"400px"}} src={bulleh5} alt="" /></Col>
        <Col style={{padding:"0px"}} lg={4}><img style={{width:"100%", height:"400px"}} src={bulleh6} alt="" /></Col>
        <Col style={{padding:"0px"}} lg={4}><img style={{width:"100%", height:"400px"}} src={bulleh2} alt="" /></Col>
        <Col style={{padding:"0px"}} lg={4}><img style={{width:"100%", height:"400px"}} src={bulleh3} alt="" /></Col>
        <Col style={{padding:"0px"}} lg={4}><img style={{width:"100%", height:"400px"}} src={bulleh} alt="" /></Col>
       
        </Row>
    </Container>
  )
}

export default sData