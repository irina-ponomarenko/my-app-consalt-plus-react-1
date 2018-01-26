import React from 'react';
import Testimonials from './components/Testimonials';
import ModalForm from './components/small-components/ModalForm';
import { Link } from 'react-router-dom';
class Industary extends React.Component {
    render() {
        return (
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
                                    <li className="nav-li active"><Link to="/industary">industry</Link></li>
                                    <li className="nav-li"><Link to="/pricing">pricing</Link></li>
                                    <li className="nav-li"><Link to="/pages">pages</Link></li>
                                    <li className="nav-li"><Link to="/contact us">contact us</Link></li>
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
                            <h2>Industary</h2>
                        </div>
                    </div>
                </header>
                <section className="industry">
                    <div className="container">
                        <header className="sections-header left-header">
                            <h2>choose your industry</h2>
                        </header>
                        <div className="wrapper-blog-info indastry-wrapper">
                            <div className="card blog-card-our card-industry">
                                <img className="card-img-top" src="images/industry-1.png" alt="Card image cap"/>
                                <div className="card-body">
                                    <h5 className="card-title">Business</h5>
                                    <p className="card-text">Many desktop publishing packages and web page editors now
                                        use Lorem Ipsum
                                        as their default model text, and a search</p>
                                    <button type="button" className="btn-back submit">Choose your service</button>
                                </div>
                            </div>
                            <div className="card blog-card-our card-industry">
                                <img className="card-img-top" src="images/industry-2.png" alt="Card image cap"/>
                                <div className="card-body">
                                    <h5 className="card-title">Education</h5>
                                    <p className="card-text">Many desktop publishing packages and web page editors now
                                        use Lorem Ipsum as their default model text, and a search</p>
                                    <button type="button" className="btn-back submit">Choose your service</button>
                                </div>
                            </div>
                        </div>
                        <div className="wrapper-blog-info indastry-wrapper">
                            <div className="card blog-card-our card-industry">
                                <img className="card-img-top" src="images/industry-3.png" alt="Card image cap"/>
                                <div className="card-body">
                                    <h5 className="card-title">technology</h5>
                                    <p className="card-text">Many desktop publishing packages and web page editors now
                                        use Lorem Ipsum
                                        as their default model text, and a search</p>
                                    <button type="button" className="btn-back submit">Choose your service</button>
                                </div>
                            </div>
                            <div className="card blog-card-our card-industry">
                                <img className="card-img-top" src="images/industry-4.png" alt="Card image cap"/>
                                <div className="card-body">
                                    <h5 className="card-title">real estate</h5>
                                    <p className="card-text">Many desktop publishing packages and web page editors now
                                        use Lorem Ipsum as their default model text, and a search</p>
                                    <button type="button" className="btn-back submit">Choose your service</button>
                                </div>
                            </div>
                        </div>
                        <div className="wrapper-blog-info indastry-wrapper">
                            <div className="card blog-card-our card-industry">
                                <img className="card-img-top" src="images/industry-5.png" alt="Card image cap"/>
                                <div className="card-body">
                                    <h5 className="card-title">telecommunication</h5>
                                    <p className="card-text">Many desktop publishing packages and web page editors now
                                        use Lorem Ipsum
                                        as their default model text, and a search</p>
                                    <button type="button" className="btn-back submit">Choose your service</button>
                                </div>
                            </div>
                            <div className="card blog-card-our card-industry">
                                <img className="card-img-top" src="images/industry-6.png" alt="Card image cap"/>
                                <div className="card-body">
                                    <h5 className="card-title">BANKING & FINANCIAL</h5>
                                    <p className="card-text">Many desktop publishing packages and web page editors now
                                        use Lorem Ipsum as their default model text, and a search</p>
                                    <button type="button" className="btn-back submit">Choose your service</button>
                                </div>
                            </div>
                        </div>
                        <div className="wrapper-blog-info indastry-wrapper">
                            <div className="card blog-card-our card-industry">
                                <img className="card-img-top" src="images/industry-7.png" alt="Card image cap"/>
                                <div className="card-body">
                                    <h5 className="card-title">Law</h5>
                                    <p className="card-text">Many desktop publishing packages and web page editors now
                                        use Lorem Ipsum
                                        as their default model text, and a search</p>
                                    <button type="button" className="btn-back submit">Choose your service</button>
                                </div>
                            </div>
                            <div className="card blog-card-our card-industry">
                                <img className="card-img-top" src="images/industry-8.png" alt="Card image cap"/>
                                <div className="card-body">
                                    <h5 className="card-title">Construction</h5>
                                    <p className="card-text">Many desktop publishing packages and web page editors now
                                        use Lorem Ipsum as their default model text, and a search</p>
                                    <button type="button" className="btn-back submit">Choose your service</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Testimonials/>
            </div>
        );
    };
}
export  default Industary;