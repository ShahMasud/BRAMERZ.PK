import React, { useState } from 'react'
import '../Work/style.scss'
import Baner from '../Home/Baner'
import sData from './sData'
import Footer from '../Footer'



const Works = () => {
    const [data, setData]= useState(sData);


    const renderData = () =>{
        setData(sData);
    }
  return (
    <>
        <Baner heading={false} />
        <div className="Team">
          <div className='teamTitle'>
            <div><h1>some stories we're proud of</h1></div>  
         </div>
        </div>

        <div className='workDiv mb-1'>
            
            <ul>
                <li onClick={renderData}>All</li>
                <li onClick={renderData}>app development</li>
                <li onClick={renderData}>content development</li>
                <li onClick={renderData}>design</li>
                <li onClick={renderData}>social media</li>
                <li onClick={renderData}>web development</li>
            </ul>

            <div className='' >
            {data}
            </div>
        </div>
        <Footer/>
        
      
    </>
  )
}

export default Works
