import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import ModalForm from '../components/small-components/ModalForm';
import PaginationForm from '../components/small-components/PaginationPage';

class Blog extends  React.Component {
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
                                            <Link to="/blog post"><p>Health</p></Link>
                                            <i className="fa fa-quote-left" aria-hidden="true"></i>
                                        </button>
                                        <h5 className="card-title card-h5">Blog Heading Here</h5>
                                        <p className="card-text card-p">Lorem Ipsum is simply dummy text of the printing
                                            and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                                            text ever since the 1500s, when an unknown</p>
                                        <div className="footer-card">
                                            <p className="card-text">
                                                <small className="text-muted"><i className="fa fa-clock-o"
                                                                                 aria-hidden="true"></i>5-12-2016
                                                </small>
                                            </p>
                                            <Link to=""><i className="fa fa-share-alt" aria-hidden="true"></i></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="card p-3">
                                    <blockquote className="blockquote mb-0 card-body">
                                        <button type="button" className="img-title">
                                            <Link to="/blog post"><p>Health</p></Link>
                                            <i className="fa fa-link" aria-hidden="true"></i>
                                        </button>
                                        <h5 className="card-title card-h5">Blog Heading Here</h5>
                                        <p className="card-text card-p-bloquote card-p">Industry Lorem Ipsum has been
                                            the industry's standard dummy text
                                            ever since the 1500s, when an unknown</p>
                                        <div className="footer-card">
                                            <p className="card-text">
                                                <small className="text-muted"><i className="fa fa-clock-o"
                                                                                 aria-hidden="true"></i>5-12-2016
                                                </small>
                                            </p>
                                            <Link to=""><i className="fa fa-share-alt" aria-hidden="true"></i></Link>
                                        </div>
                                    </blockquote>
                                </div>
                                <div className="card card-masonry">
                                    <button type="button" className="img-title after-img">
                                        <Link to="/blog post"><p>Business</p></Link>
                                        <i className="fa fa-youtube-play" aria-hidden="true"></i>
                                    </button>
                                    <img className="card-img-top" src="images/card-masonry-3.jpg" alt="card-masonry-3"/>
                                    <div className="card-body">
                                        <h5 className="card-title">Blog Heading Here</h5>
                                        <p className="card-text">Typesetting industry. Lorem Ipsum has been the
                                            industry's standard dummy text ever since
                                            the 1500s, when an unknown.</p>
                                        <div className="footer-card">
                                            <p className="card-text">
                                                <small className="text-muted"><i className="fa fa-clock-o"
                                                                                 aria-hidden="true"></i>5-12-2016
                                                </small>
                                            </p>
                                            <Link to=""><i className="fa fa-share-alt" aria-hidden="true"></i></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="card card-masonry">
                                    <button type="button" className="img-title after-img">
                                        <Link to="/blog post"><p>Business</p></Link>
                                        <i className="fa fa-picture-o" aria-hidden="true"></i>
                                    </button>
                                    <img className="card-img-top" src="images/card-masonry-1.jpg" alt="card-masonry-1"/>
                                    <div className="card-body">
                                        <h5 className="card-title">Blog Heading Here</h5>
                                        <p className="card-text">Typesetting industry. Lorem Ipsum has been the
                                            industry's standard dummy text ever since
                                            the 1500s, when an unknown.</p>
                                        <div className="footer-card">
                                            <p className="card-text">
                                                <small className="text-muted"><i className="fa fa-clock-o"
                                                                                 aria-hidden="true"></i>5-12-2016
                                                </small>
                                            </p>
                                            <Link to=""><i className="fa fa-share-alt" aria-hidden="true"></i></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="card card-masonry">
                                    <div className="card-body">
                                        <button type="button" className="img-title">
                                            <Link to="/blog post"><p>Education</p></Link>
                                            <i className="fa fa-link" aria-hidden="true"></i>
                                        </button>
                                        <h5 className="card-title card-h5">Blog Heading Here</h5>
                                        <p className="card-text card-p">Simply dummy text of the printing and
                                            typesetting industry.
                                            Lorem Ipsum has been the industry's standard dummy text ever since the
                                            1500s, when an unknown.</p>
                                        <div className="footer-card">
                                            <p className="card-text">
                                                <small className="text-muted"><i className="fa fa-clock-o"
                                                                                 aria-hidden="true"></i>5-12-2016
                                                </small>
                                            </p>
                                            <Link to=""><i className="fa fa-share-alt" aria-hidden="true"></i></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="card card-masonry">
                                    <button type="button" className="img-title after-img">
                                        <Link to="/blog post"><p>Technology</p></Link>
                                        <i className="fa fa-picture-o" aria-hidden="true"></i>
                                    </button>
                                    <img className="card-img-top" src="images/card-masonry-6.jpg" alt="card-masonry-6"/>
                                    <div className="card-body">
                                        <h5 className="card-title">Blog Heading Here</h5>
                                        <p className="card-text">Typesetting industry. Lorem Ipsum has been the
                                            industry's standard dummy text ever since
                                            the 1500s, when an unknown.</p>
                                        <div className="footer-card">
                                            <p className="card-text">
                                                <small className="text-muted"><i className="fa fa-clock-o"
                                                                                 aria-hidden="true"></i>5-12-2016
                                                </small>
                                            </p>
                                            <Link to=""><i className="fa fa-share-alt" aria-hidden="true"></i></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-body">
                                        <button type="button" className="img-title">
                                            <Link to="/blog post"><p>Health</p></Link>
                                            <i className="fa fa-quote-left" aria-hidden="true"></i>
                                        </button>
                                        <h5 className="card-title card-h5">Blog Heading Here</h5>
                                        <p className="card-text card-p">Typesetting industry. Lorem Ipsum has been the
                                            industry's standard dummy
                                            text ever since the 1500s, when an unknown.</p>
                                        <div className="footer-card">
                                            <p className="card-text">
                                                <small className="text-muted"><i className="fa fa-clock-o"
                                                                                 aria-hidden="true"></i>5-12-2016
                                                </small>
                                            </p>
                                            <Link to=""><i className="fa fa-share-alt" aria-hidden="true"></i></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <button type="button" className="img-title after-img">
                                        <Link to="/blog post"><p>Business</p></Link>
                                        <i className="fa fa-picture-o" aria-hidden="true"></i>
                                    </button>
                                    <div className="card-busines">
                                        <p className="card-text">
                                            <small className="text-muted"><i className="fa fa-clock-o"
                                                                             aria-hidden="true"></i>5-12-2016
                                            </small>
                                        </p>
                                        <Link to=""><i className="fa fa-share-alt" aria-hidden="true"></i></Link>
                                    </div>
                                    <img className="card-img" src="images/card-masonry-8.jpg" alt="card-masonry-8"/>
                                </div>
                                <div className="card p-3">
                                    <blockquote className="blockquote mb-0 card-body">
                                        <button type="button" className="img-title">
                                            <Link to="/blog post"><p>Health</p></Link>
                                            <i className="fa fa-link" aria-hidden="true"></i>
                                        </button>
                                        <h5 className="card-title card-h5">Blog Heading Here</h5>
                                        <p className="card-text card-p-bloquote card-p">Industry Lorem Ipsum has been
                                            the industry's standard dummy text
                                            ever since the 1500s, when an unknown</p>
                                        <div className="footer-card">
                                            <p className="card-text">
                                                <small className="text-muted"><i className="fa fa-clock-o"
                                                                                 aria-hidden="true"></i>5-12-2016
                                                </small>
                                            </p>
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
}
export default Blog;