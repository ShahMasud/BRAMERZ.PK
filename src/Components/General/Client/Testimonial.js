import React from 'react'

const Testimonial = (props) => {
  return (
    <div className='' style={{height:"200px"}}>
    <img src={props?.dataa?.src}/>
    <p>{props?.dataa?.text}</p>
    </div>
  )
}

export default Testimonial