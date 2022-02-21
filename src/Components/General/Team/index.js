import React from 'react'
import '../Team/style.scss'
import Baner from '../Home/Baner'
import { Container, Row, Col } from 'react-bootstrap'
import Footer from '../Footer'
import userData from './userData'
import { Card } from 'react-bootstrap'
import imag from '../../../Assets/Images/boy.jpg'


const Team = () => {

    const renderCard =(props)=>{
        return(
            <Card style={{ width: '18rem', padding:"0px" }}>
            <Card.Img className='imaG' variant="top" src={imag} />
            {/* <Card.Body>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>
            
                </Card.Text>
            
            </Card.Body> */}
            </Card>


        )
    }
  return (

    <>
        <Baner heading={false} />
        <div className="Team">
          <div className='teamTitle'>
            <div><h1>what we're made of</h1></div>  
         </div>
        </div>

        <Container>
        <Row className='justify-content-center'>{userData.map(renderCard)}</Row>
        
        </Container>
        <Footer/>
      
        </>
  )
}

export default Team
