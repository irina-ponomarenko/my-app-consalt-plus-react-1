import React from 'react';
import { Link } from 'react-router-dom';
import ModalForm from './components/small-components/ModalForm';

const ContactUs =()=>{
    return(
        <div>
            <header className="header">
                <div className="nav-header">
                    <div className="container">
                        <div className="logo">
                            <img src="images/logo.png" align="logo"/>
                        </div>
                        <div className="menu">
                            <button type="button" id="btn-click-menu"><span className="icon-menu"></span></button>
                            <ul className="navigation">
                                <li className="nav-li"><Link to="/">home</Link></li>
                                <li className="nav-li"><Link to="/about us">about us</Link></li>
                                <li className="nav-li"><Link to="/industary">industry</Link></li>
                                <li className="nav-li"><Link to="/services">services</Link></li>
                                <li className="nav-li"><Link to="/pages">pages</Link></li>
                                <li className="nav-li active"><Link to="/contact us">contact us</Link></li>
                            </ul>
                        </div>
                      <ModalForm/>
                        <div className="contact-nav">
                            <div className="phone">
                                <span className="icon-call-out"></span>
                                <Link to="tell:9156856664555">+91 5685 6664 555</Link>
                            </div>
                            <div className="mail">
                                <Link to="">
                                    <span className="icon-envelope-open"></span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="welcome-massege">
                    <div className="container">
                        <h2>Contact Us</h2>
                    </div>
                </div>
            </header>
            <section className="connect">
                <div className="container">
                    <div className="connect-info">
                        <header className="sections-header left-header">
                            <h2>Connect us</h2>
                        </header>
                        <ul className="info-text">
                            <li>
                                <div className="icon-information">
                                    <span className="icon-call-out"></span>
                                </div>
                                <div className="wrapper-text-li">
                                    <h5>Call Us</h5>
                                    <span>+885 6586 5554</span>
                                </div>
                            </li>
                            <li>
                                <div className="icon-information">
                                    <span className="icon-envelope-open"></span>
                                </div>
                                <div className="wrapper-text-li">
                                    <h5>Email</h5>
                                    <span>info@consultplus.com</span>
                                </div>
                            </li>
                            <li>
                                <div className="icon-information">
                                    <span className="icon-location-pin"></span>
                                </div>
                                <div className="wrapper-text-li">
                                    <h5>Address</h5>
                                    <span>Department 98</span>
                                    <span>44-46 Morningside Road</span>
                                    <span>Edinburgh, Scotland</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="map">
                        <iframe  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2234.952216149054!2d-3.212410084062471!3d55.932866280601914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4887c70c0bdfdccd%3A0x739396a168781a3c!2zNDQgTW9ybmluZ3NpZGUgUmQsIEVkaW5idXJnaCBFSDEwIDRCRiwg0JLQtdC70LjQutC-0LHRgNC40YLQsNC90ZbRjw!5e0!3m2!1suk!2sua!4v1515262595697" className="iframe"></iframe>
                    </div>
                </div>
            </section>
            <section className="write-us">
                <div className="container">
                    <header className="sections-header">
                        <h2>Write to Us</h2>
                    </header>
                    <form className="write">
                        <div className="wrapper-input">
                            <div className="write-name">
                                <label for="id-name">Name</label>
                                <input type="text" id="id-name"/>
                            </div>
                            <div className="write-name">
                                <label for="id-email">Email</label>
                                <input type="email" id="id-email"/>
                            </div>
                        </div>
                        <div className="wrapper-input">
                            <div className="write-name">
                                <label for="id-phone">Phone</label>
                                <input type="text" id="id-phone"/>
                            </div>
                            <div className="write-name">
                                <label for="id-serv">Service</label>
                                <select id="id-serv">
                                    <option></option>
                                    <option></option>
                                    <option></option>
                                </select>
                            </div>
                        </div>
                        <div className="write-name-area">
                            <label for="comment-id">Comment</label>
                            <textarea id="comment-id" rows="5"></textarea>
                        </div>
                        <button type="submit" className="btn-back submit">Submit Now</button>
                    </form>
                </div>
            </section>
        </div>
    );
}
export default ContactUs;