import React from 'react'
import Services from '../Home/Services'
import PSL from '../Home/PSL'
import MCB from '../Home/MCB'
import Nescafe from '../Home/Nescafe'
import Baner from '../Home/Baner'
import Subscribe from '../Home/SubscribeForm'
import Clients from '../Home/Clients'
import img from '../../../Assets/Images/milkyway.jpg';
import Footer from '../Footer'

const Home = () => {
    return (
      <section className='Section'>
      <Baner heading={true}  img={img} /> 
      <Services/>
      <PSL/>
      <MCB/>
      <Nescafe/>
      <Subscribe/>
      <Clients/>
      <Footer/>
      </section>
    )
  }
  
  export default Home
  
