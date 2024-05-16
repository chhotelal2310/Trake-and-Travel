import React from "react";//6.9k (gzipped:2.7k);
import '../styles/home.css';
import { Container, Row, Col } from 'reactstrap';
import heroImg from '../assets/images/hero-img01.jpeg';
import heroImg02 from '../assets/images/hero-img02.jpg';
import heroVideo from '../assets/images/hero-video.mp4';
import worldImg from '../assets/images/world.jpg';
import experienceImg from "../assets/images/experience.png"
import Subtitle from './../shared/Subtitle';
import SearchBar from "../shared/SearchBar";
import ServiceList from "../services/ServiceList";
import FeaturedTourList from "../components/Featured-tours/FeaturedTourList";
import MasonryImagesGallery from "../components/Image-gallery/MasonryImagesGallery";
import Testimonials from "../components/Testimonial/Testimonials";
import NewsLetter from "../shared/NewsLetter";





const Home = () => {

    {/*======================================Hero section start=============================*/ }
    return (
        <>
            <section >
                <Container>
                    <Row>
                        <Col lg='6'>
                            <div className="hero__content">
                                <div className="hero__subtitle  d-flex  align-items-center ">
                                    <div className="section__subtitle">
                                        <Subtitle subtitle={"know Before You Go"} />
                                    </div>
                                    <a href="https://www.google.com/maps/place/India/@19.7222723,60.9460277,4z/data=!3m1!4b1!4m6!3m5!1s0x30635ff06b92b791:0xd78c4fa1854213a6!8m2!3d20.593684!4d78.96288!16zL20vMDNyazA?entry=ttu" target="_blank"> <img src={worldImg} alt="" style={{ borderRadius: "50px" }} /></a>
                                </div>
                                <h1>
                                    Traveling opens the door to creating {" "}
                                    <span className="highlight">memories</span>
                                </h1>
                                <p>Welcome to <strong> Tourism in India </strong> Your ultimate destination for seamless travel experiences! We specialize in curating unforgettable journeys for travel enthusiasts around the globe. Explore our user-friendly website designed to
                                    inspire your wanderlust and simplify your travel planning.
                                </p>
                            </div>
                        </Col>
                        <Col lg='2'>
                            <div className="hero__img-box">
                                <img src={heroImg} alt="" />
                            </div>
                        </Col>
                        <Col lg='2'>
                            <div className="hero__img-box  hero__video-box mt-4">
                                <video src={heroVideo} alt="" controls />
                            </div>
                        </Col>
                        <Col lg='2'>
                            <div className="hero__img-box mt-5">
                                <img src={heroImg02} alt="" />
                            </div>
                        </Col>
                        <SearchBar />
                    </Row>
                </Container>
            </section>
            {/*======================================Hero section end=============================*/}
            <section>
                <Container>
                    <Row>
                        <Col lg='3'>
                            <h5 className="services__subtitle">what we server</h5>
                            <h2 className="services__title"> We offer our best services</h2>
                        </Col>
                        <ServiceList />
                    </Row>
                </Container>
            </section>

            {/*==============================featured tour section start=========================*/}
            <section>
                <Container>
                    <Row>
                        <Col lg='12' className="mb-5">
                            <div className="section__subtitle">
                                <Subtitle subtitle={"Explore"} />
                            </div>
                            <h2 className="featured__tour-title">Our featured tours</h2>
                        </Col>
                        <FeaturedTourList />
                    </Row>
                </Container>
            </section>


            {/*==============================featured tour section end=========================*/}


            {/*================================Experience section start ============================*/}
            <section>
                <Container>
                    <Row>
                        <Col lg='6'>
                            <div className="experience__contenet">
                                <div className="section__subtitle">
                                    <Subtitle subtitle={"Experience"} />
                                </div>
                                <h2>
                                    With our all experience <br /> we will serve you
                                </h2>
                                <p>With our wealth of expertise, we're dedicated to providing exceptional service
                                    <br />  ensuring a seamless and memorable experience.
                                </p>
                            </div>
                            <div className="coutnter__wrapper d-flex align-items-center gap-5" >
                                <div className="counter__box">
                                    <span>2K+</span>
                                    <h6>Successful trip</h6>
                                </div>
                                <div className="counter__box">
                                    <span>50+</span>
                                    <h6>Regular clients</h6>
                                </div>
                                <div className="counter__box">
                                    <span>2</span>
                                    <h6>Years experience</h6>
                                </div>
                            </div>
                        </Col>
                        <Col lg='6'>
                            <div className="experience__img">
                                <img src={experienceImg} alt="" />
                            </div>
                        </Col>

                    </Row>
                </Container>
            </section>
            {/*================================Experience section end ============================*/}



            {/*==============================Gallery section strat ******************************/}
            <Container>
                <Row>
                    <Col lg="12">
                        <div className="section__subtitle">
                            <Subtitle subtitle={"Gallery"} />
                        </div>
                        <h2 className="gallery__title">
                            Visit our customers tours gallery
                        </h2>
                    </Col>
                    <Col lg='12'>
                        <MasonryImagesGallery />
                    </Col>
                </Row>
            </Container>


            {/*==============================Gallery section end ******************************/}



            {/*==============================testimonial section start ******************************/}

            <section>
                <Container>
                    <Row>
                        <Col lg='12'>
                            <div className="section__subtitle">
                                <Subtitle subtitle={'Fans Love'} />
                            </div>
                            <h2 className="testimonial__title"> What our fans say about us</h2>
                        </Col>
                        <Col lg='12'>
                            <Testimonials />
                        </Col>
                    </Row>
                </Container>
            </section>

            {/*==============================testimonial section end ******************************/}
            <NewsLetter />

        </>
    )
};
export default Home;