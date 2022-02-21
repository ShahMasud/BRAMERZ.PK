import React from 'react'
import '../Clients/style.scss'
import { Container } from 'react-bootstrap'
import cocacola from '../../../../Assets/Images/cocacola.png'
import pepsi from '../../../../Assets/Images/pepsi.png'
import nestle from '../../../../Assets/Images/nestle.png'
import samsung from '../../../../Assets/Images/samsung.png'


const Clients = (props) => {
  return (
   <Container fluid className='container'>
  {(props?.heading)? 
    <div><h3>Clients</h3>
   <p>Some of the brands we’ve had the pleasure of working with.</p>
   </div> : null}
      <div className='row mainDIV'>
      <div className='col'>
          <img className='images' src={cocacola} alt="" />
      </div>
      
      <div className='col'>
          <img className='images' src={pepsi} alt="" />
  
      </div>
          <div className='col'>
          <img className='images' src={nestle} alt="" />
 
      </div>
           <div className='col'>
          <img className='images' src={samsung} alt="" />

      </div>
            </div>
   </Container>
  )
}

export default Clients
