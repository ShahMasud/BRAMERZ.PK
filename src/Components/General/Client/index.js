import React, { useState } from 'react'
import { propTypes } from 'react-bootstrap/esm/Image'
import '../Client/style.scss'
import Baner from '../Home/Baner'
import Clients from '../Home/Clients'
import img from '../../../Assets/Images/client.png'
import Testimonials from './Testimonials'
import Testimonial from './Testimonial'
import { Button } from 'react-bootstrap'
import { FaGreaterThan, FaLessThan } from "react-icons/fa";

const Client = () => {
  const [data, setData] = useState(Testimonials[0]);

  const changeData = (event) =>{
    const name = event.target.dataset.name;
    console.log(name);
    // event.preventValue();
    

    switch (name) {
      case 'less': setData(Testimonials[0])
      break;
      case 'greater' : setData(Testimonials[1])
      
      break;
      default: return <h2>no data found</h2>;
  }}
  return (
    <>
      <Baner/>

          <div className="Team">
            <div className='teamTitle'>
              <div>
              <h1>BRANDS WE WORK WITH</h1>
              <p>YOU ARE NEXT</p>
            </div>  
          </div>
        </div>

      <Clients heading={false}/>
      <div className='text-center'>
        <h3>What Our Client Say</h3>
        {/* <img className='rounded-circle' src={img} alt="" /> */}
        <Testimonial dataa={data}/>

       
        
        
        <div className='d-flex justify-content-center gap-3'>
        <Button  className='bg-transparent text-black border-0'> <FaLessThan onClick={changeData} data-name="less"/> </Button>
        <Button  className='bg-transparent text-black border-0'> <FaGreaterThan onClick={changeData} data-name='greater'/> </Button>
        </div>

        
       
      </div>
     
    </>
  )
}

export default Client