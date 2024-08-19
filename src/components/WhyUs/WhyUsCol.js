import React from 'react'

const WhyUsCol = (props) => {
  return (
    <div className='why-us-col'>
        {props.icon}
        <h4>{props.title}</h4>
        <p>{props.desc}</p>
    </div>
  )
}

export default WhyUsCol
