import React from 'react'
import Services from '../Home/Services'
import PSL from '../Home/PSL'
import MCB from '../Home/MCB'
import Nescafe from '../Home/Nescafe'
import Baner from '../Home/Baner'
import Subscribe from '../Home/SubscribeForm'
import Clients from '../Home/Clients'

const Home = () => {
    return (
      <section className='Section'>
      <Baner/> 
      <Services/>
      <PSL/>
      <MCB/>
      <Nescafe/>
      <Subscribe/>
      <Clients/>
      </section>
    )
  }
  
  export default Home
  
