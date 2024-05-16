import React from 'react'
import Slider from 'react-slick'
import ava01 from '../../assets/images/ava-1.jfif'
import ava02 from '../../assets/images/ava-2.jpg'
import ava03 from '../../assets/images/ava-3.jfif'

import ava04 from '../../assets/images/ava-4.jpg'
import ava05 from '../../assets/images/ava-5.jpg'
import ava06 from '../../assets/images/ava-6.jfif'

import ava07 from '../../assets/images/ava-7.jfif'
import ava08 from '../../assets/images/ava-8.jfif'
import ava09 from '../../assets/images/ava-9.jfif'

import ava10 from '../../assets/images/ava-10.jfif'
import ava11 from '../../assets/images/ava-11.jfif'
import ava12 from '../../assets/images/ava-12.jpg'



const Testimonials = () => {

  const settings={
    dots:true,
    infinite:true,
    autoplay:true,
    speed:1000,
    swipeToSlide:true,
    autoplaySpeed:2000,
    slidesToShow:3,

    responsive:[
      {
        breakpoint: 992,
        settings:{
           slidesToShow:2,
           slidesToScroll:1,
           infinite:true,
           dots:true,
        },
      },
      {
        breakpoint: 576,
        settings:{
           slidesToShow:1,
           slidesToScroll:1,
        },
      },
    ],
  };
  return <Slider{ ...settings}>
    <div className="testimonial py-4 px-3">
    <p>
    Absolutely incredible! Their dedication to customer satisfaction shone through in every aspect of our trip. Impeccable service and attention to detail made our vacation unforgettable.

      <div className="d-flex align-items-center gap-4 mt-3">
        <img src ={ava01} className='w-25 h-25 rounded-2' alt="" />
        <div>
          <h5 className="mb-0 mt-3">Dhairya Mishra</h5>
          <p>
            Customer
          </p>
        </div>
      </div>
    </p>

    </div>




    <div className="testimonial py-4 px-3">
    <p>
    Remarkable experience! From personalized itineraries to prompt responses, their team exhibited exceptional professionalism. Their passion for travel resonates in the seamless and memorable journeys they curate.

      <div className="d-flex align-items-center gap-4 mt-3">
        <img src ={ava02} className='w-25 h-25 rounded-2' alt="" />
        <div>
          <h5 className="mb-0 mt-3"> Adity Singh</h5>
          <p>
            Customer
          </p>
        </div>
      </div>
    </p>
    </div>
    <div className="testimonial py-4 px-3">
    <p>
    Exceeded expectations! Our travel dreams were brought to life thanks to their expert guidance. Their knowledgeable staff went above and beyond, ensuring every moment was filled with adventure and delight.
      <div className="d-flex align-items-center gap-4 mt-3">
        <img src ={ava03} className='w-25 h-25 rounded-2' alt="" />
        <div>
          <h5 className="mb-0 mt-3">Saumya Awasthi</h5>
          <p>
            Customer
          </p>
        </div>
      </div>
    </p>
    </div>

    <div className="testimonial py-4 px-3">
    <p>
    Exceptional service at its finest! Their commitment to creating unique and tailored experiences truly sets them apart. Our group had an amazing time, and we can't wait to plan our next adventure with them.
      <div className="d-flex align-items-center gap-4 mt-3">
        <img src ={ava04} className='w-25 h-25 rounded-2' alt="" />
        <div>
          <h5 className="mb-0 mt-3">Akhilesh Patel</h5>
          <p>
            Customer
          </p>
        </div>
      </div>
    </p>
    </div>


    <div className="testimonial py-4 px-3">
    <p>
    Remarkable experience! From personalized itineraries to prompt responses, their team exhibited exceptional professionalism. Their passion for travel resonates in the seamless and memorable journeys they curate.

      <div className="d-flex align-items-center gap-4 mt-3">
        <img src ={ava05} className='w-25 h-25 rounded-2' alt="" />
        <div>
          <h5 className="mb-0 mt-3">Harshita Kashyap</h5>
          <p>
            Customer
          </p>
        </div>
      </div>
    </p>
    </div>


    <div className="testimonial py-4 px-3">
    <p>
    The majestic beauty of the Taj Mahal at sunrise was breathtaking. The serene ambiance complemented by its rich history left an indelible mark on my heart and memorable journeys they curate.

      <div className="d-flex align-items-center gap-4 mt-3">
        <img src ={ava06} className='w-25 h-25 rounded-2' alt="" />
        <div>
          <h5 className="mb-0 mt-3">Raj Agrawal</h5>
          <p>
            Customer
          </p>
        </div>
      </div>
    </p>

    </div>


    <div className="testimonial py-4 px-3">
    <p>
    Exploring the pink hues of Jaipur's palaces was like stepping into a royal past. The vibrant markets and friendly locals made the experience even more enchanting.

      <div className="d-flex align-items-center gap-4 mt-3">
        <img src ={ava07} className='w-25 h-25 rounded-2' alt="" />
        <div>
          <h5 className="mb-0 mt-3">Arunita Pandey</h5>
          <p>
            Customer
          </p>
        </div>
      </div>
    </p>

    </div>


    <div className="testimonial py-4 px-3">
    <p>
    The sandy beaches of Goa provided the perfect escape from reality. The laid-back vibe and delicious seafood were the highlights of my trip.he vibrant markets and friendly locals.

      <div className="d-flex align-items-center gap-4 mt-3">
        <img src ={ava08} className='w-25 h-25 rounded-2' alt="" />
        <div>
          <h5 className="mb-0 mt-3">Abhay Verma</h5>
          <p>
            Customer
          </p>
        </div>
      </div>
    </p>

    </div>



    <div className="testimonial py-4 px-3">
    <p>
    The spiritual aura of Varanasi along the Ganges was deeply moving. Witnessing the evening Aarti ceremony was a profound and unforgettable experience.
      <div className="d-flex align-items-center gap-4 mt-3">
        <img src ={ava09} className='w-25 h-25 rounded-2' alt="" />
        <div>
          <h5 className="mb-0 mt-3">Garima Dixit</h5>
          <p>
            Customer
          </p>
        </div>
      </div>
    </p>

    </div>


    <div className="testimonial py-4 px-3">
    <p>
    Cruising through the tranquil backwaters of Kerala was like navigating through a different world. The lush greenery and the rhythmic paddling were mesmerizing.

      <div className="d-flex align-items-center gap-4 mt-3">
        <img src ={ava10} className='w-25 h-25 rounded-2' alt="" />
        <div>
          <h5 className="mb-0 mt-3">Anil Raghuvansi</h5>
          <p>
            Customer
          </p>
        </div>
      </div>
    </p>

    </div>



    <div className="testimonial py-4 px-3">
    <p>
    The rugged landscapes of Leh-Ladakh offered an adventure like no other. The peaceful monasteries set against dramatic backdrops were visually stunning.

      <div className="d-flex align-items-center gap-4 mt-3">
        <img src ={ava11} className='w-25 h-25 rounded-2' alt="" />
        <div>
          <h5 className="mb-0 mt-3">Akshara Rajput</h5>
          <p>
            Customer
          </p>
        </div>
      </div>
    </p>

    </div>



    <div className="testimonial py-4 px-3">
    <p>
    The grandeur of the Mysore Palace during the Dasara festival was captivating. The city’s rich culture and history were evident in every corner.The rugged landscapes of Leh-Ladakh offered an adventure like no other

      <div className="d-flex align-items-center gap-4 mt-3">
        <img src ={ava12} className='w-25 h-25 rounded-2' alt="" />
        <div>
          <h5 className="mb-0 mt-3">Khushi Verma</h5>
          <p>
            Customer
          </p>
        </div>
      </div>
    </p>

    </div>


  </Slider>
};

export default Testimonials
