import React from 'react';

import ListNavFooter1 from './listNavFooter1';
import ListNavFooter2 from './listNavFooter2';
import ListSocialFooter from './listSocialFooter';
const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="top-footer">
                    <div className="logo">
                        <img src="images/logo.png" alt="logo"/>
                    </div>
                    <ul className="top-footer-list">
                        <li className="">
                            <h2>navigation</h2>
                           <ListNavFooter1/>
                        </li>
                        <li className="">
                            <h2>Industary</h2>
                          <ListNavFooter2/>
                        </li>
                        <li className="news-letter">
                            <h2>News letter</h2>
                            <p>Enter your email address to subscribe our notification of our new post & features by email.</p>
                            <form className="news-letter-form">
                                <input type="email" placeholder="Email Address"/>
                                <button type="submit" className="btn-back subscribe">Subscribe</button>
                            </form>
                        </li>
                    </ul>
                </div>
                <div className="bottom-footer">
                    <p className="copyright">Copyright © 2017 Consultplus theme.</p>
                   <ListSocialFooter/>
                </div>
            </div>
        </footer>
    );
};

export default Footer;