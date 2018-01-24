import React from 'react';
import ModalForm from './components/small-components/ModalForm';
import { Link } from 'react-router-dom';
const PageError =()=>{
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
                                <li className="nav-li active"><Link to="">Home</Link></li>
                                <li className="nav-li"><Link to="">about us</Link></li>
                                <li className="nav-li"><Link to="">industry</Link></li>
                                <li className="nav-li"><Link to="">services</Link></li>
                                <li className="nav-li"><Link to="">pages</Link></li>
                                <li className="nav-li"><Link to="">Contact us</Link></li>
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
                        <h2>about us</h2>
                    </div>
                </div>
            </header>
            <section className="error-404">
                <div className="container">
                    <div className="wrapper-error-info">
                        <div className="text-error">
                            <h1 className="error">
                                404
                            </h1>
                        </div>
                        <div className="content-error">
                            <span>OOPS!!</span>
                            <p>The page you are looking for cannot be found</p>
                            <button type="submit" className="btn-back margin-back">Back to home page</button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default PageError;