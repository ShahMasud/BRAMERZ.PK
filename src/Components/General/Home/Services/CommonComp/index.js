import React from 'react'
import '../../Services/style.scss'
import sData from './sData'
const CommonComp = (props) => {

  const findData=sData.map((curVal)=>{
    return curVal
  })

  return (
    <div className='mainDiv'>
    <h3>{props?.data?.title}</h3>
    <p>{props?.data?.text}</p>
    </div>
    
  )
}

export default CommonComp
