import React from 'react';
import './service-card.css';

const ServiceCard = ({item}) => {
    const {imgUrl,title,desc, weather_link}=item;
  return (
    <div className='service__item'>
        <div className='service__img'>
           <a href={weather_link} target='_blank'> <img src={imgUrl} alt=''/></a>
        </div>
        <h5>{title}</h5>
        <p>{desc}</p>
    </div>
  )
}

export default ServiceCard;