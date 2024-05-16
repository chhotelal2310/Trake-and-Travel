import React, { useState,useContext } from "react";
import { Container, Row, Col, Form, FormGroup, Button } from 'reactstrap';
import { Link,useNavigate } from 'react-router-dom';
import '../styles/login.css';
import registerImg from '../assets/images/register.png';
import userIcon from '../assets/images/user.png';
import {AuthContext} from './../context/AuthContext';
import { BASE_URL } from "./../utils/config";

const Register = () => {
    const [credentials, setCredentials] = useState({
        username:undefined,
        email: undefined,
        password: undefined,
    });
    
   const {dispatch}=useContext(AuthContext)
   const navigate=useNavigate();


    const handleChange =  e => {
        setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value }));
    };

    const handleClick =async e => {
        e.preventDefault();

        // Your Register logic goes here
        try {
            const res=await fetch(`${BASE_URL}/auth/register`,{
                method:'post',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(credentials)
            })
            const result=await res.json()

            if(!res.ok) alert(result.message)

            dispatch({type:"REGISTER_SUCCESS"})
            navigate('/login')
        } catch (err) {
            alert(err.message)
            
        }
        // Your login logic goes here
    };

    return (
        <section>
            <Container>
                <Row>
                    <Col lg='8' className="m-auto">
                        <div className="login__container d-flex justify-content-between">
                            <div className="login__img">
                                <img src={registerImg} alt="" />
                            </div>
                            <div className="login__form">
                                <div className="user">
                                    <img src={userIcon} alt="" />
                                </div>
                                <h2> Register </h2>
                                <Form onSubmit={handleClick}>
                                <FormGroup>
                                        <input type="text" placeholder="Username" required id="username" onChange={handleChange} />
                                    </FormGroup>
                                    <FormGroup>
                                        <input type="email" placeholder="Email" required id="email" onChange={handleChange} />
                                    </FormGroup>
                                    <FormGroup>
                                        <input type="password" placeholder="Password" required id="password" onChange={handleChange} />
                                    </FormGroup>
                                    <Button className="btn secondary__btn auth__btn" type="submit">Create Account</Button>
                                </Form>
                                <p>Already have an account? <Link to='/login'>Login</Link></p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Register;





















// import React from "react";//6.9k (gzipped:2.7k)
// import { Container, Row, Col, Form, FormGroup, Button}  from 'reactstrap';
// import { Link } from 'react-router-dom';
// import '../styles/login.css';
// import loginImg from '../assets/images/login.png'
// import userIcon from '../assets/images/user.png'
// import { useState } from "react";



// const Login=()=>{

//     const[credentials,setCredentials] = useState({
//        email:undefined,
//        password:undefined, 
//     });

//     const handleChange = e =>{
//         setCredentials(prev=>({...prev,[e.target.id]:e.target.value}))
//     };

//     const handleClick = e =>{
//         e.preventDefault();
//     };
//     return <section>
//         <Container>
//             <Row>
//                 <Col lg='8' className="m-auto">
//                     <div className="login__container d-flex justify-content-between">
//                         <div className="login__img">
//                          <img src ={loginImg} alt=""/>
//                         </div>

//                         <div className="login__form">
//                             <div className="user">
//                                 <img src={userIcon}  alt="" />
//                             </div>
//                             <h2> Login </h2>

//                            <Form>
//                             <FormGroup>
//                                 <input type="email" placeholder="Email" required id="email"  onChange={handleChange}/>
//                             </FormGroup>
//                             <FormGroup>
//                                 <input type="password" placeholder="Password" required id = "password" onChange={handleChange}/>
//                             </FormGroup>
//                             <Button className="btn secondary__btn auth__btn" type="submit">Login</Button>
//                            </Form>

//                            <p>Don't have an account? <Link to='/register'> Create</Link></p>
//                         </div>
//                     </div>

//                 </Col>
//             </Row>
//         </Container>
//     </section>
// };
// export default Login;