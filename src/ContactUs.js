import React from 'react';
import { Link } from 'react-router-dom';
import ModalForm from './components/small-components/ModalForm';
import WriteUs from './components/WriteUsSection';

class ContactUs extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            header: "Contact Us",
            headerSection: "Connect us"
        }
    }
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
                                    <li className="nav-li"><Link to="/">home</Link></li>
                                    <li className="nav-li"><Link to="/about us">about us</Link></li>
                                    <li className="nav-li"><Link to="/industary">industry</Link></li>
                                    <li className="nav-li"><Link to="/pricing">pricing</Link></li>
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
                            <h2>{this.state.header}</h2>
                        </div>
                    </div>
                </header>
                <section className="connect">
                    <div className="container">
                        <div className="connect-info">
                            <header className="sections-header left-header">
                                <h2>{this.state.headerSection}</h2>
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
                            <iframe  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2234.952216149054!2d-3.212410084062471!3d55.932866280601914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4887c70c0bdfdccd%3A0x739396a168781a3c!2zNDQgTW9ybmluZ3NpZGUgUmQsIEVkaW5idXJnaCBFSDEwIDRCRiwg0JLQtdC70LjQutC-0LHRgNC40YLQsNC90ZbRjw!5e0!3m2!1suk!2sua!4v1515262595697"  className="iframe" title="This is a unique title"></iframe>
                        </div>
                    </div>
                </section>
               <WriteUs/>
            </div>
        );
    };
}
export default ContactUs;