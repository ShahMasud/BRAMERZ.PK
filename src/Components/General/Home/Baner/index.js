import React from 'react'
import { Container, Nav, Button, NavDropdown, Navbar, Offcanvas, Form, FormControl,} from 'react-bootstrap'
import '../Baner/style.scss';
import { NavLink } from 'react-router-dom';


const Baner = (props) => {
  
  return (
    
    <section className='Section' style={{backgroundImage:`url(${props.img})`}}>
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
        <Offcanvas.Title id="offcanvasNavbarLabel">hello</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body className='menu'>
        <Nav className="justify-content-end flex-grow-1 pe-3">
          <NavLink className= "navlink" to="/Home"> HOME</NavLink>
          <NavLink className= "navlink" to="/About">ABOUT</NavLink>
          <NavLink className= "navlink" to="/Team">TEAM</NavLink>
          <NavLink className= "navlink" to="/Work">WORK</NavLink>
          <NavLink className= "navlink" to="/Products">PRODUCTS</NavLink>
          <NavLink className= "navlink" to="/Client">CLIENTS</NavLink>
        </Nav>
        
      </Offcanvas.Body>

      </div>
    </div>
    </Navbar.Offcanvas>
  </Container>
</Navbar>


{(props?.heading)? <div className='theStart'>
  <h3>Award Winning Full Service</h3>
  <h2>Digital Agency</h2>
  <Button className='btn' variant="secondary">GET STARTED</Button>
 
  
</div>: null}
    
    </section>
  )
}

export default Baner
