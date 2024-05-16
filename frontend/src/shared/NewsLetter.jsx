import React from "react";
import "./newsletter.css";
import { Container, Row, Col } from "reactstrap";
import maleTourist from "../assets/images/abhi.jpg";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const NewsLetter = () => {
  let formRef = useRef('');


  // emailjs.send("service_ju6z857","template_twsui4r",{
  //   user_email: "chhotupatel705@gmail.com",
  //   from_name: "chhotupatel705@gmail.com",
  //   reply_to: "patelchhotelal2310@gmail.com",
  //   });

  const handleSubscribe = async (e) => {
    e.preventDefault();
    const SERVICE_ID = "service_ju6z857";
    const TEMPLATE_ID = "template_twsui4r";
    const PUBLIC_KEY = "y6luJxU7xDsYe14Kv";
    const emailInput = document.getElementById("email");

    // Access the value of the input element
    let emailValue = emailInput.value;
    if (emailValue === "" || emailValue === null) {
      toast.error('Please Enter the Email!', {
        position: "top-center",
        autoClose: 8000,
      });
      return;
    }

    let index = emailValue.search("@gmail.com");
    console.log('my index is : ', index);

    if (index < 0) {
      toast.error('This Email is not vailid!', {
        position: "top-center",
        autoClose: 8000,
      });
      return;
    }
    if (index === 0) {
      toast.error('Please Enter the vailid Email!', {
        position: "top-center",
        autoClose: 8000,
      });
      return;
    }
    // Log the value to the console
    console.log(emailValue);

    console.log(formRef.current);

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY).then(
      () => {
        toast.success('“Thank You for Subscribing”!', {
          position: "top-center",
          autoClose: 5000,
        });
        const form = document.getElementById("email");
        form.reset();
        // emailValue = "";
        return;
      },
      (err) => {
        toast.error('Credential Error for subscribing!', {
          position: "top-center",
          autoClose: 8000,
        });
        return;
      }

    );
    
  };

  return (
    <section className="newsletter">
      <Container>
        <Row>
          <Col lg="6">
            <div className="newsletter__content">
              <h2>Subscribe now to get useful tarveling information.</h2>
              <div className="newsletter__input">
                {/* <input type="email" ref={formRef} placeholder='Enter your email' name='user-email' />
                                <button type='submit' className="btn newsletter__btn" onClick={handleSubscribe} >Subscribe</button > */}

                <form ref={formRef} >
                  <input type="email" id="email" placeholder="Enter your email" name="email" />
                </form>
                <button type="submit" className="btn newsletter__btn" onClick={handleSubscribe}>
                  Subscribe
                </button>


              </div>
              <div>
                <ToastContainer />
              </div>

              <p>
                Subscribe today and unlock a <strong> Tourism in India </strong>{" "}
                of invaluable traveling insights delivered straight to your
                inbox, ensuring you stay informed and inspired for your next
                adventure!
              </p>
            </div>
          </Col>
          <Col lg="6">
            <div className="newsletter__img">
              <img src={maleTourist} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default NewsLetter;
