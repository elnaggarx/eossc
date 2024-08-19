import React from 'react';

const Card = (props) => {
  return (
    <div className='services-card'>
        {props.icon}
        <h4 className='card-title'>{props.title}</h4>
    <p className='card-desc'>{props.desc}</p>
    </div>
  )
}

export default Card
