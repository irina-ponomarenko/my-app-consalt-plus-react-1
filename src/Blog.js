import React from 'react';
import { Link } from 'react-router-dom';
import ModalForm from './components/small-components/ModalForm';
import PaginationForm from './components/small-components/PaginationPage';
const Blog =()=>{
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
                                <li className="nav-li active"><Link to="">services</Link></li>
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
                        <h2>blog</h2>
                    </div>
                </div>
            </header>
            <section className="blog-page">
                <div className="container">
                    <header className="sections-header left-header">
                        <h2 className="margin-h2-blog">Blog page</h2>
                    </header>
                    <div className="masonry-blog">
                        <div className="card-columns">
                            <div className="card card-masonry">
                                <div className="card-body">
                                    <button type="button" className="img-title">
                                        <p>Health</p>
                                        <i className="fa fa-quote-left" aria-hidden="true"></i>
                                    </button>
                                    <h5 className="card-title card-h5">Blog Heading Here</h5>
                                    <p className="card-text card-p">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown</p>
                                    <div className="footer-card">
                                        <p className="card-text"><small className="text-muted"><i className="fa fa-clock-o" aria-hidden="true"></i>5-12-2016</small></p>
                                        <Link to=""><i className="fa fa-share-alt" aria-hidden="true"></i></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="card p-3">
                                <blockquote className="blockquote mb-0 card-body">
                                    <button type="button" className="img-title">
                                        <p>Health</p>
                                        <i className="fa fa-link" aria-hidden="true"></i>
                                    </button>
                                    <h5 className="card-title card-h5">Blog Heading Here</h5>
                                    <p className="card-text card-p-bloquote card-p">Industry Lorem Ipsum has been the industry's standard dummy text
                                        ever since the 1500s, when an unknown</p>
                                    <div className="footer-card">
                                        <p className="card-text"><small className="text-muted"><i className="fa fa-clock-o" aria-hidden="true"></i>5-12-2016</small></p>
                                        <Link to=""><i className="fa fa-share-alt" aria-hidden="true"></i></Link>
                                    </div>
                                </blockquote>
                            </div>
                            <div className="card card-masonry">
                                <button type="button" className="img-title after-img">
                                    <p>Business</p>
                                    <i className="fa fa-youtube-play" aria-hidden="true"></i>
                                </button>
                                <img className="card-img-top" src="images/card-masonry-3.jpg" alt="Card image cap"/>
                                    <div className="card-body">
                                        <h5 className="card-title">Blog Heading Here</h5>
                                        <p className="card-text">Typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since
                                            the 1500s, when an unknown.</p>
                                        <div className="footer-card">
                                            <p className="card-text"><small className="text-muted"><i className="fa fa-clock-o" aria-hidden="true"></i>5-12-2016</small></p>
                                            <Link to=""><i className="fa fa-share-alt" aria-hidden="true"></i></Link>
                                        </div>
                                    </div>
                            </div>
                            <div className="card card-masonry">
                                <button type="button" className="img-title after-img">
                                    <p>Business</p>
                                    <i className="fa fa-picture-o" aria-hidden="true"></i>
                                </button>
                                <img className="card-img-top" src="images/card-masonry-1.jpg" alt="Card image cap"/>
                                    <div className="card-body">
                                        <h5 className="card-title">Blog Heading Here</h5>
                                        <p className="card-text">Typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since
                                            the 1500s, when an unknown.</p>
                                        <div className="footer-card">
                                            <p className="card-text"><small className="text-muted"><i className="fa fa-clock-o" aria-hidden="true"></i>5-12-2016</small></p>
                                            <Link to=""><i className="fa fa-share-alt" aria-hidden="true"></i></Link>
                                        </div>
                                    </div>
                            </div>
                            <div className="card card-masonry">
                                <div className="card-body">
                                    <button type="button" className="img-title">
                                        <p>Education</p>
                                        <i className="fa fa-link" aria-hidden="true"></i>
                                    </button>
                                    <h5 className="card-title card-h5">Blog Heading Here</h5>
                                    <p className="card-text card-p">Simply dummy text of the printing and typesetting industry.
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown.</p>
                                    <div className="footer-card">
                                        <p className="card-text"><small className="text-muted"><i className="fa fa-clock-o" aria-hidden="true"></i>5-12-2016</small></p>
                                        <Link to=""><i className="fa fa-share-alt" aria-hidden="true"></i></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="card card-masonry">
                                <button type="button" className="img-title after-img">
                                    <p>Technology</p>
                                    <i className="fa fa-picture-o" aria-hidden="true"></i>
                                </button>
                                <img className="card-img-top" src="images/card-masonry-6.jpg" alt="Card image cap"/>
                                    <div className="card-body">
                                        <h5 className="card-title">Blog Heading Here</h5>
                                        <p className="card-text">Typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since
                                            the 1500s, when an unknown.</p>
                                        <div className="footer-card">
                                            <p className="card-text"><small className="text-muted"><i className="fa fa-clock-o" aria-hidden="true"></i>5-12-2016</small></p>
                                            <Link to=""><i className="fa fa-share-alt" aria-hidden="true"></i></Link>
                                        </div>
                                    </div>
                            </div>
                            <div className="card">
                                <div className="card-body">
                                    <button type="button" className="img-title">
                                        <p>Health</p>
                                        <i className="fa fa-quote-left" aria-hidden="true"></i>
                                    </button>
                                    <h5 className="card-title card-h5">Blog Heading Here</h5>
                                    <p className="card-text card-p">Typesetting industry. Lorem Ipsum has been the industry's standard dummy
                                        text ever since the 1500s, when an unknown.</p>
                                    <div className="footer-card">
                                        <p className="card-text"><small className="text-muted"><i className="fa fa-clock-o" aria-hidden="true"></i>5-12-2016</small></p>
                                        <Link to=""><i className="fa fa-share-alt" aria-hidden="true"></i></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <button type="button" className="img-title after-img">
                                    <p>Business</p>
                                    <i className="fa fa-picture-o" aria-hidden="true"></i>
                                </button>
                                <div className="card-busines">
                                    <p className="card-text"><small className="text-muted"><i className="fa fa-clock-o" aria-hidden="true"></i>5-12-2016</small></p>
                                    <Link to=""><i className="fa fa-share-alt" aria-hidden="true"></i></Link>
                                </div>
                                <img className="card-img" src="images/card-masonry-8.jpg" alt="Card image"/>
                            </div>
                            <div className="card p-3">
                                <blockquote className="blockquote mb-0 card-body">
                                    <button type="button" className="img-title">
                                        <p>Health</p>
                                        <i className="fa fa-link" aria-hidden="true"></i>
                                    </button>
                                    <h5 className="card-title card-h5">Blog Heading Here</h5>
                                    <p className="card-text card-p-bloquote card-p">Industry Lorem Ipsum has been the industry's standard dummy text
                                        ever since the 1500s, when an unknown</p>
                                    <div className="footer-card">
                                        <p className="card-text"><small className="text-muted"><i className="fa fa-clock-o" aria-hidden="true"></i>5-12-2016</small></p>
                                        <Link to=""><i className="fa fa-share-alt" aria-hidden="true"></i></Link>
                                    </div>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                    <PaginationForm/>
                </div>
            </section>
        </div>
    );
}
export default Blog;