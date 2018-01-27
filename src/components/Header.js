import React from 'react';
import WelcomeCarosel from './small-components/WelcomeCarosel';
import HeaderMenu from './small-components/HeaderMenu';
import ModalForm from './small-components/ModalForm';

const menuNav = [
    {
        Link: '/',
        label: 'HOME',
    },
    {
      Link: '/about us',
      label: 'ABOUT US'
    },
    {
        Link: '/industary',
        label: 'INDUSTARY'
    },
    {
        Link: '/pricing',
        label: 'PRICING'
    },
    {
        Link: '/pages',
        label: 'PAGES'
    },
    {
        Link: '/contact us',
        label: 'CONTACT US'
    }
];
class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <div className="nav-header">
                    <div className="container">
                        <div className="logo">
                            <img src="images/logo.png" alt="logo"/>
                        </div>
                        <HeaderMenu items = { menuNav }/>
                        <ModalForm/>
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
                <WelcomeCarosel/>
            </header>
        );
    };
}


export default Header;