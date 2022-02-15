import React from 'react'
import '../Clients/style.scss'
import { Container } from 'react-bootstrap'
import cocacola from '../../../../Assets/Images/cocacola.png'
import pepsi from '../../../../Assets/Images/pepsi.png'
import nestle from '../../../../Assets/Images/nestle.png'
import samsung from '../../../../Assets/Images/samsung.png'


const Clients = () => {
  return (
   <Container fluid className='container'>
   <h3>Clients</h3>
   <p>Some of the brands we’ve had the pleasure of working with.</p>
      <div className='mainDIV'>
      <img src={cocacola} alt="" />
      <img src={pepsi} alt="" />
      <img src={nestle} alt="" />
      <img src={samsung} alt="" />
      </div>
   </Container>
  )
}

export default Clients
