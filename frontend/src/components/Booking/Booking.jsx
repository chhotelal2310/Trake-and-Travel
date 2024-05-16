
//CHAT GPT
// import React, { useState } from 'react';
//  import './booking.css';
// import { Form, FormGroup, ListGroup, ListGroupItem, Button } from 'reactstrap';

// import { useNavigate } from 'react-router-dom';
// function Booking({ tour, avgRating }) {
//     const { price, reviews } = tour;

//     const navigate = useNavigate();

//     const [credentials, setCredentials] = useState({
//         userId: '01',
//         userEmail: 'example@gmail.com',
//         fullName: '',
//         phone: '',
//         guestSize: 1,
//         bookAt: ''
//     });

//     const handleChange = e => {
//         setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value }));
//     };

//     const servicefee = 10;
//     const totalAmount = Number(price) * Number(credentials.guestSize) + Number(servicefee);

//     const handleClick = e => {
//         e.preventDefault();
//         console.log(credentials);
//         navigate('/thank-you');
//     };

//     return (
//         <div className="booking">
//             {/* ... */}
//             <div className="booking__form">
//                 <h5>Information</h5>
//                 <Form onSubmit={handleClick}> {/* Change div to Form */}
//                     <FormGroup>
//                         <input type="text" placeholder='Full Name' id='fullName' required onChange={handleChange} />
//                     </FormGroup>
//                     <FormGroup>
//                         <input type="number" placeholder='Phone' id='phone' required onChange={handleChange} />
//                     </FormGroup>
//                     <FormGroup className='d-flex align-items-center gap-3'>
//                         <input type="date" placeholder='' id='bookAt' required onChange={handleChange} />
//                         <input type="number" placeholder='Guest' id='guestSize' required onChange={handleChange} />
//                     </FormGroup>
//                     <button className="btn primary__btn w-100 mt-4" type="submit">Book Now</button>
//                 </Form>
//             </div>
//             {/* ... */}
//         </div>
//     );
// }

// export default Booking;



import React, { useState,useContext } from 'react';
import './booking.css';
import { Form, FormGroup, ListGroup, ListGroupItem, Button } from 'reactstrap';

import { useNavigate } from 'react-router-dom';
import {AuthContext} from '../../context/AuthContext';
import { BASE_URL } from '../../utils/config';


//yeha locha hai 54.36 
function Booking({ tour, avgRating }) {
    const { price, reviews,title } = tour;

    const navigate = useNavigate()

    const {user} = useContext(AuthContext)

    const [booking, setBooking] = useState({
        userId: user && user._id,
        userEmail: user && user.email,
        tourName:title,
        fullName: '',
        phone: '',
        guestSize: 1,
        bookAt: ''
    });

    const handleChange = e => {
        setBooking(prev => ({ ...prev, [e.target.id]: e.target.value }))
    };

    // send data to the server

    const servicefee = 10
    const totalAmount = Number(price) * Number(booking.guestSize) + Number(servicefee)

    const handleClick =async e => {
        e.preventDefault()
       // console.log(credentials);

       console.log(booking);
       
       try {
           if(!user || user===undefined || user===null){
               return alert('please sign in')
           }

           const res = await fetch(`${BASE_URL}/booking`,{
               method:'post',
               headers:{
                 'content-type':'application/json'
               },
               credentials:'include',
               body:JSON.stringify(booking)
           })

          const result = await res.json()

          if(!res.ok) {
           return alert(result.message);
          }
          navigate('/thank-you');

       } catch (err) {
           alert(err.message);
       }
        //navigate('/thank-you')
    }
    return (
        <div className="booking">
            <div className="booking__top d-flex align-items-ceneter justify-content-between">
                <h3> Rs.{price*80} <span> /per person</span></h3>
                <span className='tour__rating  d-flex  align-items-center '>
                    <i class="ri-star-fill"></i>
                    {avgRating === 0 ? null : avgRating}({reviews?.length})
                </span>
            </div>

            {/* ======================== Booking form start========================= */}
            <div className="booking__form">
                <h5>Information</h5>
                <Form className="booking__info-form" onSubmit={handleClick}>
                    <FormGroup>
                        <input type="text" placeholder='Full Name' id='fullName' required onChange={handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <input type="number" placeholder='Phone' id='phone' required onChange={handleChange} />
                    </FormGroup>
                    <FormGroup className='d-flex align-items-center gap-3'>
                        <input type="date" placeholder='' id='bookAt' required onChange={handleChange} />
                        <input type="number" placeholder='Guest' id='guestSize' required onChange={handleChange} />
                    </FormGroup>
                </Form>
            </div>
            {/* ============================ Booking form End =======================*/}




            {/* ============================ Booking bottom =======================*/}
            <div className="booking__bottom">
                <ListGroup>
                    <ListGroupItem className="border-0 px-0">
                        <h5 className='d-flex align-items-center gap-1'>
                            Rs. {price*80} <i class="ri-close-line"></i> 1 person</h5>
                        <span> Rs. {price*80}</span>
                    </ListGroupItem>
                    <ListGroupItem className="border-0 px-0">
                        <h5> service charge</h5>
                        <span> Rs.{servicefee*80}</span>
                    </ListGroupItem>
                    <ListGroupItem className="border-0 px-0 total">
                        <h5> Total</h5>
                        <span> Rs.{totalAmount*80}</span>
                    </ListGroupItem>

                    <Button className="btn primary__btn w-100 mt-4" onClick={handleClick}> Book Now</Button>
                </ListGroup>
            </div>
        </div>
    );
};

export default Booking;