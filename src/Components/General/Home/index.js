import React from 'react'
import '../Home/style.scss'
import { Container, Nav, Button } from 'react-bootstrap'
import { } from 'bootstrap'
import Services from '../Services'


const Home = () => {
  return (
    <section className='Section'>
      <Container fluid>
        <div className='main_div'>
          <div className='logo'><h1>b</h1></div>

          <div className='Search' >
          <Nav.Link className='search' href="#search">SEARCH</Nav.Link>
          <Button>click</Button>
            
          </div>
        </div>

        <div className='text-center center-div'>
          <p>Award Winning Full Service</p>
          <h1>Digital Agency</h1>
          <Button variant="outline-light">GET STARTED</Button>
        </div>
    </Container>
    </section>
  )
}

export default Home
