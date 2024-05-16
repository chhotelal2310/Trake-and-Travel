import React from "react"; //6.9k (gzipped:2.7k)
import "./footer.css";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from 'react-router-dom';
import logo from "../../assets/images/logo.png";


const quick__links = [
    {
        path: '/home',
        display: 'Home'
    },
    {
        path: '/about',
        display: 'About'
    },
    {
        path: '/tours',
        display: 'Tours'
    },
];

const quick__links2 = [
    {
        path: '/gallery',
        display: 'Gallery'
    },
    {
        path: '/login',
        display: 'Login'
    },
    {
        path: '/register',
        display: 'Register'
    },
];

const Footer = () => {

    const year = new Date().getFullYear();
    return (
        <footer className="footer">
            <Container>
                <Row>
                    <Col lg='3'>
                        <div className="logo">
                            <img src={logo} alt="" />
                            <p> Explore the  <strong> Tourism in India </strong> with us your trusted travel companion for unforgettable adventures, expert insights, and seamless journeys.</p>

                            {/* <div className="social__links  d-flex  align-items-center gap-4">
                                <span>
                                    <Link to='#'><i class="ri-youtube-line"></i></Link>
                                </span>

                                <span>
                                    <Link to={'https://github.com/chhotelal2310'}><i class="ri-github-fill"></i></Link>
                                </span>

                                <span>
                                    <Link to='#'><i class="ri-facebook-circle-line"></i></Link>
                                </span>

                                <span>
                                    <Link to='#'><i class="ri-instagram-line"></i></Link>
                                </span>

                            </div> */}
                            <div className="social__links d-flex align-items-center gap-4">
                                <span>
                                    <a href="https://twitter.com/ChhotelalP76022" target="_blank" rel="noopener noreferrer">
                                        <i className="ri-twitter-line"></i>
                                    </a>
                                </span>
                                <span>
                                    <a href="https://github.com/chhotelal2310" target="_blank" rel="noopener noreferrer">
                                        <i className="ri-github-fill"></i>
                                    </a>
                                </span>
                                <span>
                                    <a href="https://www.facebook.com/chhotelal.patel.50309" target="_blank" rel="noopener noreferrer">
                                        <i className="ri-facebook-circle-line"></i>
                                    </a>
                                </span>
                                <span>
                                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                        <i className="ri-instagram-line"></i>
                                    </a>
                                </span>
                            </div>

                        </div>
                    </Col>

                    <Col lg="3">
                        <h5 className="footer__link-title">Discover</h5>
                        <ListGroup className="footer__quick-links">
                            {
                                quick__links.map((item, index) => (
                                    <ListGroupItem key={index} className="ps-0 border-0">
                                        <Link to={item.path} id='Discover'>{item.display}</Link>
                                    </ListGroupItem>
                                ))
                            }
                        </ListGroup>
                    </Col>
                    <Col lg="3">
                        <h5 className="footer__link-title">Quick Links</h5>
                        <ListGroup className="footer__quick-links">
                            {
                                quick__links2.map((item, index) => (
                                    <ListGroupItem key={index} className="ps-0 border-0">
                                        <Link to={item.path} id='Discover'>{item.display}</Link>
                                    </ListGroupItem>
                                ))
                            }
                        </ListGroup>
                    </Col>
                    <Col lg="3">
                        <h5 className="footer__link-title">Contact</h5>
                        <ListGroup className="footer__quick-links">
                            <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                                <h6 className="mb-0 d-flex align-items-center gap-2">
                                    <span><i class="ri-map-pin-line"></i></span>
                                    Address:
                                </h6>
                                <p className="mb-0">Uttar Pradesh ,India</p>
                            </ListGroupItem>

                            <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                                <h6 className="mb-0 d-flex align-items-center gap-2">
                                    <span><i class="ri-mail-line"></i></span>
                                    Email:
                                </h6>
                                <p className="mb-0">chhotupatel@705gmail.com</p>
                            </ListGroupItem>

                            <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-3">
                                <h6 className="mb-0 d-flex align-items-center gap-2">
                                    <span><i class="ri-phone-fill"></i></span>
                                    Phone:
                                </h6>
                                <p className="mb-0">+91-7348651529</p>

                            </ListGroupItem>
                        </ListGroup>
                    </Col>

                    <Col lg='12' className="text-center pt-5">
                        <p className="copyright">@ Copyright {year}, design and develop by Chhotelal Patel and Abhishek Goyal. All rights reversed.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
};
export default Footer;

