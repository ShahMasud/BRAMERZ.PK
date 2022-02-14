import React from 'react'
import '../Services/style.scss';
import {Navbar, Nav, Container } from 'react-bootstrap';
import { BsLightbulb, BsClock } from "react-icons/bs";
import { BiPencil } from "react-icons/bi";
import { FiMonitor } from "react-icons/fi";
import { AiOutlineMobile } from "react-icons/ai";
import { MdOutlineTouchApp, MdAutoGraph } from "react-icons/md";
// import DigitalStratigy from '../DigitalStratigy';
import { LinkContainer } from 'react-router-bootstrap';



const Services = () => {
  return (
   <section className='servicesSec'>
       <h2>Services</h2>

       <Navbar className='Navbar' bg="white" expand="lg">
        <Container className='Container'>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className='Nav'>

                <LinkContainer to="/DigitalStratigy">
                <Nav.Link><BsLightbulb/></Nav.Link>
                </LinkContainer>
                <LinkContainer to="/Design">
                <Nav.Link><BiPencil/></Nav.Link>
                </LinkContainer>
                <LinkContainer to="/Web">
                <Nav.Link><FiMonitor/></Nav.Link>
                </LinkContainer>
                <LinkContainer to="/Mobile">
                <Nav.Link><AiOutlineMobile/></Nav.Link>
                </LinkContainer>
                <LinkContainer to="/SocialMedia">
                <Nav.Link><MdOutlineTouchApp/></Nav.Link>
                </LinkContainer>
                <LinkContainer to="/OnlineMediaBuying">
                <Nav.Link><BsClock/></Nav.Link>
                </LinkContainer>
                <LinkContainer to="/SEO">
                <Nav.Link><MdAutoGraph/></Nav.Link>
                </LinkContainer>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
   </section>
  )
}

export default Services
