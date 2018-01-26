import React from 'react';
import ComunicationSection from './components/ComunicationSection';
import SocialBlock from './components/small-components/SocialBlock';
import ModalForm from './components/small-components/ModalForm';
import { Link } from 'react-router-dom';

class BlogPost extends React.Component {
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
                                    <li className="nav-li"><Link to="/industary">industry</Link></li>
                                    <li className="nav-li active"><Link to="/services">services</Link></li>
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
                            <h2>blog</h2>
                        </div>
                    </div>
                </header>
                <section className="blog-post">
                    <div className="container">
                        <header className="sections-header left-header">
                            <h2>Blog post</h2>
                        </header>
                        <div className="card card-masonry">
                            <button type="button" className="img-title after-img">
                                <p>Business</p>
                                <i className="fa fa-picture-o" aria-hidden="true"></i>
                            </button>
                            <img className="card-img-top" src="images/blog-post.jpg" alt="Card image cap"/>
                            <div className="card-body">
                                <h5 className="card-title">Blog Heading Here</h5>
                                <p className="card-text">Lorem Ipsum is simply dummy text of the printing and
                                    typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
                                    since the 1500s, when an unknown printer took a galley of type and scrambled it to
                                    make a type specimen book.
                                    It has survived not only five centuries, but also the leap into electronic
                                    typesetting, remaining essentially unchanged</p>
                                <ul className="list-card-blog">
                                    <li><i className="fa fa-check" aria-hidden="true"></i>Lorem ipsum dolor sit amet,
                                        consectetur adipiscing elit.
                                    </li>
                                    <li><i className="fa fa-check" aria-hidden="true"></i>Proin tempus ipsum vitae velit
                                        convallis venenatis.
                                    </li>
                                    <li><i className="fa fa-check" aria-hidden="true"></i>Curabitur vel felis pretium,
                                        blandit arcu in, sollicitudin ipsum.
                                    </li>
                                </ul>
                            </div>
                            <div className="sub-card">
                                <img src="images/sub-img.jpg" alt="card image"/>
                                <p>Printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy
                                    text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make a type
                                    specimen book. </p>
                            </div>
                            <SocialBlock/>
                        </div>
                        <div className="card-bottom">
                            <h5>Related Post</h5>
                            <div className="card-list-post">
                                <div className="card-post-wrapper">
                                    <img src="images/card-post-1.jpg" alt="card image"/>
                                    <div className="card-post-footer">
                                        <h3>Blog Heading Here</h3>
                                        <p>11-feb-2016</p>
                                    </div>
                                </div>
                                <div className="card-post-wrapper">
                                    <img src="images/card-post-2.jpg" alt="card image"/>
                                    <div className="card-post-footer">
                                        <h3>Blog Heading Here</h3>
                                        <p>11-feb-2016</p>
                                    </div>
                                </div>
                                <div className="card-post-wrapper">
                                    <img src="images/card-post-3.jpg" alt="card image"/>
                                    <div className="card-post-footer">
                                        <h3>Blog Heading Here</h3>
                                        <p>11-feb-2016</p>
                                    </div>
                                </div>
                                <div className="card-post-wrapper">
                                    <img src="images/card-post-4.jpg" alt="card image"/>
                                    <div className="card-post-footer">
                                        <h3>Blog Heading Here</h3>
                                        <p>11-feb-2016</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
                <ComunicationSection/>
            </div>
        );
    }
}
export default BlogPost;