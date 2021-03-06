import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Testimonials from '../components/Testimonials';
import CaroselPagination from '../components/small-components/CaroselPagination';
import ModalForm from '../components/small-components/ModalForm';

class Careers extends React.Component {
    render() {
        return (
            <div>
                <header className="header">
                    <div className="nav-header">
                        <div className="container">
                            <div className="logo">
                                <img src="images/logo.png" alt="logo"/>
                            </div>
                            <div className="menu">
                                <button type="button" id="btn-click-menu"><span className="icon-menu"></span></button>
                                <ul className="navigation">
                                    <li className="nav-li"><NavLink to="/" exact activeClassName="active">home</NavLink></li>
                                    <li className="nav-li"><NavLink to="/about us" activeClassName="active">about us</NavLink></li>
                                    <li className="nav-li"><NavLink to="/industary" activeClassName="active">industry</NavLink></li>
                                    <li className="nav-li"><NavLink to="/pricing" activeClassName="active">pricing</NavLink></li>
                                    <li className="nav-li"><NavLink to="/pages" activeClassName="active">pages</NavLink></li>
                                    <li className="nav-li"><NavLink to="/contact us" activeClassName="active">contact us</NavLink></li>
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
                            <h2>Careers</h2>
                        </div>
                    </div>
                </header>
                <section className="job">
                    <div className="container">
                        <header className="sections-header left-header">
                            <h2>New jobs</h2>
                        </header>
                        <form className="job-form-wrapper">
                            <div className="apply-wrapper">
                                <div className="wrapper-account">
                                    <div className="account-manager">
                                        <label htmlFor="manager">accountant manager</label>
                                        <input type="text" id="manager" placeholder="full time"/>
                                    </div>
                                    <div className="location">
                                        <label htmlFor="local"><span className="icon-location-pin"></span>Location :</label>
                                        <input type="text" id="local" placeholder="San francisco"/>
                                    </div>
                                </div>
                                <button type="button" className="btn-back apply">Apply Now</button>
                            </div>
                            <div className="apply-wrapper">
                                <div className="wrapper-account">
                                    <div className="account-manager">
                                        <label htmlFor="systam">Computer & information systam manager</label>
                                        <input type="text" id="systam" placeholder="full time"/>
                                    </div>
                                    <div className="location">
                                        <label htmlFor="local-1"><span className="icon-location-pin"></span>Location
                                            :</label>
                                        <input type="text" id="local-1" placeholder="San francisco"/>
                                    </div>
                                </div>
                                <button type="button" className="btn-back apply">Apply Now</button>
                            </div>
                            <div className="apply-wrapper">
                                <div className="wrapper-account">
                                    <div className="account-manager">
                                        <label htmlFor="sales">sales executive</label>
                                        <input type="text" id="sales" placeholder="full time"/>
                                    </div>
                                    <div className="location">
                                        <label htmlFor="local-3"><span className="icon-location-pin"></span>Location
                                            :</label>
                                        <input type="text" id="local-3" placeholder="San francisco"/>
                                    </div>
                                </div>
                                <button type="button" className="btn-back apply">Apply Now</button>
                            </div>
                            <div className="apply-wrapper">
                                <div className="wrapper-account">
                                    <div className="account-manager">
                                        <label htmlFor="education">education consultants</label>
                                        <input type="text" id="education" placeholder="full time"/>
                                    </div>
                                    <div className="location">
                                        <label htmlFor="local-4"><span className="icon-location-pin"></span>Location
                                            :</label>
                                        <input type="text" id="local-4" placeholder="San francisco"/>
                                    </div>
                                </div>
                                <button type="button" className="btn-back apply">Apply Now</button>
                            </div>
                            <div className="wrapper-new">
                                <div className="ident">
                                    <label htmlFor="name">first Name</label>
                                    <input type="text" id="name"/>
                                </div>
                                <div className="ident">
                                    <label htmlFor="last">Last Name</label>
                                    <input type="text" id="last"/>
                                </div>
                                <div className="ident">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" id="email"/>
                                </div>
                            </div>
                            <div className="wrapper-new">
                                <div className="ident">
                                    <label htmlFor="phone">Phone number</label>
                                    <input type="text" id="phone"/>
                                </div>
                                <div className="ident">
                                    <label htmlFor="city">Location (City)</label>
                                    <input type="text" id="city"/>
                                </div>
                                <div className="ident file">
                                    <label htmlFor="resume">Resume/CV</label>
                                    <input type="file" id="resume" placeholder="Attach, Dropbox"/>
                                </div>
                            </div>
                            <div className="ident area">
                                <label htmlFor="write">Write your self / copy paste your Resume</label>
                                <textarea id="write" rows="6"></textarea>
                            </div>
                            <button type="submit" id="applic" className="btn-back application">Submit application
                            </button>
                        </form>
                    </div>
                </section>
                <section className="companies">
                    <div className="container">
                        <header className="sections-header">
                            <h2>Companies we’ve helped</h2>
                            <p>Lorem Ipsum is simply dummy</p>
                        </header>
                        <CaroselPagination/>
                    </div>
                </section>
                <Testimonials/>
            </div>
        );
    };
}
export default Careers;