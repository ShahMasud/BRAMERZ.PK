import React from 'react'
import { Container, Nav, Button, NavDropdown, Navbar, Offcanvas, Form, FormControl, NavLink } from 'react-bootstrap'
import '../Baner/style.scss';

const Baner = () => {
  return (
    <section className='Section'>
    <Navbar className='navbar' expand={false}>
    <Container fluid>
    <Navbar.Brand href="#"><div className='logo'><h1>b</h1></div></Navbar.Brand>
    <Nav.Link href="#action1" className='search'>SEARCH</Nav.Link>

    <Navbar.Toggle aria-controls="offcanvasNavbar" />
    <Navbar.Offcanvas style={{width:"100%"}}
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      placement="end"
    >
    <div className='row'>
    <div className='col  column-One'>
      <div className='title'><h1>bramerz</h1></div>
      <p>Helping You <strong>GO BIG</strong></p>
    </div>
      <div className='col  column-Two'>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title id="offcanvasNavbarLabel"></Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body className='menu'>
        <Nav className="justify-content-end flex-grow-1 pe-3">
          <Nav.Link  to="/Home"> HOME</Nav.Link>
          <Nav.Link to="/About">ABOUT</Nav.Link>
          <Nav.Link href="#action1">TEAM</Nav.Link>
          <Nav.Link href="#action2">WORK</Nav.Link>
          <Nav.Link href="#action1">PRODUCTS</Nav.Link>
          <Nav.Link href="#action2">CLIENTS</Nav.Link>
          
        </Nav>
        
      </Offcanvas.Body>

      </div>
    </div>
    </Navbar.Offcanvas>
  </Container>
</Navbar>

<div className='theStart'>
  <h3>Award Winning Full Service</h3>
  <h2>Digital Agency</h2>
  <Button className='btn' variant="secondary">GET STARTED</Button>
</div>
    
    </section>
  )
}

export default Baner
