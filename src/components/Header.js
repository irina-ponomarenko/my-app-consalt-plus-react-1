import React from 'react';
import Welcome_carosel from './small-components/welcome-carosel';
import Header_menu from './small-components/header-menu';
import Modal_form from './small-components/modal-form';
const Header = () => {
    return (
        <header className="header">
            <div className="nav-header">
                <div className="container">
                    <div className="logo">
                        <img src="images/logo.png" align="logo"/>
                    </div>
                    <Header_menu/>
                    <Modal_form/>
                    <div className="contact-nav">
                        <div className="phone">
                            <span className="icon-call-out"></span>
                            <a href="tell:9156856664555">+91 5685 6664 555</a>
                        </div>
                        <div className="mail">
                            <a href="">
                                <span className="icon-envelope-open"></span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <Welcome_carosel/>
        </header>
    );
};

export default Header;