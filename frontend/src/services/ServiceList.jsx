
import React from 'react';
import ServiceCard from './ServiceCard';
import { Col } from 'reactstrap';
import weaterImg from '../assets/images/weather.png';
import guideImg from '../assets/images/guide.png';
import customizationImg from '../assets/images/customization.png';

const servicesData = [
    {
        weather_link:'https://weather-app-nu-ecru.vercel.app/',
        imgUrl: weaterImg,
        title: "Calculate Weather",
        desc: "Predict atmospheric conditions, temperature, and precipitation using advanced meteorological methods.",
    },
    {
        imgUrl: guideImg,
        title: "Best Tour Guide",
        desc: "Your passport to immersive experiences, our tour guides elevate your travels with expertise,enthusiasm.",
    },
    {
        imgUrl: customizationImg,
        title: "customization",
        desc: "Tailoring experiences to your unique preferences,our customization transforms ordinary moments.",
    },
]

const ServiceList = () => {
    return (
        <>
            {
                servicesData.map((item, index) => (
                    <Col lg='3' md="6" sm="12" className='mb-4' key={index}>
                        <ServiceCard item={item} />
                    </Col>
                ))}
        </>
    )
}

export default ServiceList;