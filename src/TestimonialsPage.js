import React from 'react';
import HappyClientSection from './components/HappyClientSection';
import QuoteSection from './components/QuoteSection';
import ModalForm from './components/small-components/ModalForm';
import { Link } from 'react-router-dom';
const TestimonialsPage =()=>{
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
                                <li className="nav-li"><Link to="">Home</Link></li>
                                <li className="nav-li"><Link to="">about us</Link></li>
                                <li className="nav-li"><Link to="">industry</Link></li>
                                <li className="nav-li"><Link to="">services</Link></li>
                                <li className="nav-li active"><Link to="">pages</Link></li>
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
                        <h2>Pricing</h2>
                    </div>
                </div>
            </header>
            <HappyClientSection/>
            <QuoteSection/>
            <section className="project">
                <div className="container">
                    <header className="sections-header">
                        <h2>Projects</h2>
                    </header>
                    <div className="wrapper-card">
                        <div className="card card-project none-border">
                            <button type="button" className="after-img img-project">
                                Banking
                            </button>
                            <img className="card-img-top" src="images/project-card.png" alt="Card image cap"/>
                                <div className="card-body">
                                    <h5 className="card-title">Project Heading</h5>
                                    <p className="card-text">Popularised in the 1960s with the release
                                        Letraset sheets containing Lorem.</p>
                                </div>
                        </div>
                        <div className="card-carosel">
                            <div className="card card-project width-big">
                                <div id="carouselExampleIndicators-2" className="carousel slide" data-ride="carousel">
                                    <ol className="carousel-indicators indicators-header indicators-cards">
                                        <li data-target="#carouselExampleIndicators-2" data-slide-to="0" className="active"></li>
                                        <li data-target="#carouselExampleIndicators-2" data-slide-to="1"></li>
                                        <li data-target="#carouselExampleIndicators-2" data-slide-to="2"></li>
                                    </ol>
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img className="card-img-top" src="images/project-card-2.png" alt="Card image cap"/>
                                        </div>
                                        <div className="carousel-item">
                                            <img className="card-img-top" src="images/project-card-2.png" alt="Card image cap"/>
                                        </div>
                                        <div className="carousel-item">
                                            <img className="card-img-top" src="images/project-card-2.png" alt="Card image cap"/>
                                        </div>
                                    </div>
                                </div>
                                <button type="button" className="after-img img-project">
                                    Real Estate
                                </button>
                                <div className="card-body">
                                    <h5 className="card-title">Project Heading</h5>
                                    <p className="card-text">Popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
                                        passages. fact that a reader will be distracted by the readable of a page when.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button type="button" className="btn-back subscribe">Full Projects</button>
                </div>
            </section>
        </div>
    );
}
export default TestimonialsPage;