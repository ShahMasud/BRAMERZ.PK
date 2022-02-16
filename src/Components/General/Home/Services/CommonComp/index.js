import React from 'react'
import '../../Services/style.scss'
const CommonComp = (props) => {

  return (
    <div className='mainDiv'>
    <h3>{props?.data?.title}</h3>
    <p>{props?.data?.text}</p>
    </div>
    
  )
}

export default CommonComp
