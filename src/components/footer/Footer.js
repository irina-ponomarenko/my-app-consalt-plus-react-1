import React from 'react';

import List_nav_footer_1 from './list-nav-footer-1';
import List_nav_footer_2 from './list-nav-footer-2';
import List_social_footer from './list-social-footer';
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
                           <List_nav_footer_1/>
                        </li>
                        <li className="">
                            <h2>Industary</h2>
                          <List_nav_footer_2/>
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
                   <List_social_footer/>
                </div>
            </div>
        </footer>
    );
};

export default Footer;