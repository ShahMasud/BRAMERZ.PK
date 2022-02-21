import '../Products/style.scss'
import React from 'react'
import { Col, Container, Row, Button } from 'react-bootstrap'
import Baner from '../Home/Baner'
import product from '../../../Assets/Images/product.png'
import product2 from '../../../Assets/Images/product2.png'
import product3 from '../../../Assets/Images/product3.jpg'
import Footer from '../Footer'

const Products = () => {
  return (
    <>
    <Baner/>
    <div className="Team">
          <div className='teamTitle'>
            <div><h1>FROM OUR INNOVATION LAB</h1></div>  
         </div>
         
        </div>

        <Container className='productContainer'>
          <Row className='productRow '>
          <Col className='column-1 commonCol'>
              <img className='images' src={product} alt="" />
              <h6>eCommerce Platform</h6>
              <p>From set-up to conversion, a fully services e-commerce platform.</p>
              <Button variant="outline-dark">VISIT NOW</Button>
          </Col>
          
          <Col className='column-2 commonCol'>
              <img className='images' src={product2} alt="" />
              <h6>eCommerce Platform</h6>
              <p>From set-up to conversion, a fully services e-commerce platform.</p>
              <Button variant="outline-dark">VISIT NOW</Button>
      
          </Col>
          <Col className='column-3 commonCol'>
              <img className='images' src={product3} alt="" />
              <h6>eCommerce Platform</h6>
              <p>From set-up to conversion, a fully services e-commerce platform.</p>
              <Button variant="outline-dark">VISIT NOW</Button>
    
          </Col>
           
          </Row>
          </Container>
          <Footer/>

    
    </>
  )
}

export default Products