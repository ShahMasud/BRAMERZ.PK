import React from 'react'
import '../About/style.scss'
import Baner from '../Home/Baner'
import computer from '../../../Assets/Images/computer.jpg'
import cup from '../../../Assets/Images/cup.jpg'
import { Col, Container, Row } from 'react-bootstrap'
import Footer from '../Footer'
import abc1 from '../../../Assets/Images/abc1.png'
import abc2 from '../../../Assets/Images/abc2.png'
import abc3 from '../../../Assets/Images/abc3.png'
import abc4 from '../../../Assets/Images/abc4.png'
import abc5 from '../../../Assets/Images/abc5.png'
import abc6 from '../../../Assets/Images/abc6.png'


const About = () => {
 
  return (
     <>
        <Baner heading={false} />
        <div  className="about">
          <div className='aboutTitle'>
            <div><h1>bramerz</h1></div>
            <p>Helping You <strong>GO BIG</strong></p>
         </div>
        </div>

        
          <section>
          <Container fluid className='mainContainer'>
           <div className='row'>
             <div className='col col-lg-6 col-md-12 col-sm-12 col-12  column-1' >
             
             <img style={{width:"100%", height:"100%", }} src={computer} alt=""/>
             </div>
             <div className='col col-lg-6 col-md-12 col-sm-12 col-12  column-2'>
                <p>Established in 2006, Bramerz is considered to be one of the leading digital agencies of Pakistan and with a team of 100+, there is immense experience working on products, 
                     projects & campaigns of varied domains & sizes.
                     Our founders come with a diverse background of working at companies like Google, Facebook, Twitter, ASUS, Red Bull, Akzo Nobel and are considered to be the thought leaders
                     in their domains and along with other key members of our team talk frequently at various conferences and events.
                     Technology is changing the way consumers are living their everyday lives and only those brands and companies will survive the challenge that accept this digital transformation
                     and are acting fast to embrace the future.
                </p>
                
              </div>

             <div className='col col-lg-6 col-md-12 col-sm-12 col-12  column-3'>
                <p>
                  At Bramerz, we appreciate this constantly changing environment and work with brands transform their user expectations into digital experiences.
                  Working at an intersection of technology and media, our expertise lie in the areas of Digital Strategy, Creative, Search Engines, Media, PR & 
                  Technology and beyond our services wing, there is an in-house venture arm that works on cutting edge solutions to fuel our own product initiatives.
                  If above is what you’re looking for in your digital partner, drop us a note!
                </p>
             </div>

             <div className='col col-lg-6 col-md-12 col-sm-12 col-12 column-4' >
             <img style={{width:"100%", height:"100%", objectFit:"cover"}} src={cup} alt="" />
            
             </div>
           </div>

          </Container>
          </section>

          <section>
            <Container className='awardsContainer'>
              <h2>Awards</h2>
              <Row>
                <Col lg={4} md={4} sm={6}><img src={abc1} alt="" />
                <p>Bramerz, 2011</p>
                </Col>
                
                <Col lg={4} md={4} sm={6}><img src={abc2} alt="" />
                <p>Bramerz for Best in Digital, 2013</p>
                </Col>
                <Col lg={4} md={4} sm={6}><img src={abc3} alt="" />
                <p>Bramerz for Best in Gender Diversity, 2014</p>
                </Col>
                <Col lg={4} md={4} sm={6}><img src={abc4} alt="" />
                <p>Olaround for Best in Mobile Applications, 2014</p>
                </Col>
                <Col lg={4} md={4} sm={6}><img src={abc5} alt="" />
                <p>Bramerz for Best in Social Media-IT, 2015, 2017</p>
                </Col>
                <Col lg={4} md={4} sm={6}><img src={abc6} alt="" />
                <p>Fishry for Best in Retail and Supply Chain, 2015-17</p>
                </Col>
              </Row>

            </Container>
            <Footer/>
          </section>
     </>


  )
}

export default About
