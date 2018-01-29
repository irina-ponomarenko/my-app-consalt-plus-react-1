import React from 'react';
import ComunicationSection from '../components/ComunicationSection';
import SocialBlock from '../components/small-components/SocialBlock';
import ModalForm from '../components/small-components/ModalForm';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';


class BlogPost extends React.Component {
    render() {
        const cardList = [
            {
                img: 'images/card-post-1.jpg',
                title: 'Blog Heading Here',
                text: '11-feb-2016'
            },
            {
                img: 'images/card-post-2.jpg',
                title: 'Blog Heading Here',
                text: '11-feb-2016'
            },
            {
                img: 'images/card-post-3.jpg',
                title: 'Blog Heading Here',
                text: '11-feb-2016'
            },
            {
                img: 'images/card-post-4.jpg',
                title: 'Blog Heading Here',
                text: '11-feb-2016'
            }
        ];
        const listCardBlog = [
            {
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                className: 'fa'
            },
            {
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                className: 'fa'
            },
            {
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                className: 'fa'
            }
        ];
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
                            <img className="card-img-top" src="images/blog-post.jpg" alt="Card blog-post"/>
                            <div className="card-body">
                                <h5 className="card-title">Blog Heading Here</h5>
                                <p className="card-text">Lorem Ipsum is simply dummy text of the printing and
                                    typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
                                    since the 1500s, when an unknown printer took a galley of type and scrambled it to
                                    make a type specimen book.
                                    It has survived not only five centuries, but also the leap into electronic
                                    typesetting, remaining essentially unchanged</p>
                                <ul className="list-card-blog">
                                    {
                                        listCardBlog.map((item,index) => {
                                            return(
                                                <li key={index}>
                                                    <i className={item.className + ' fa-check'} aria-hidden="true"></i>
                                                    {item.text}
                                                </li>
                                            );
                                        })
                                    }
                                </ul>
                            </div>
                            <div className="sub-card">
                                <img src="images/sub-img.jpg" alt="card sub"/>
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
                                {
                                    cardList.map ((item,index) => {
                                        return(
                                            <div key={index} className={'card-post-wrapper'}>
                                              <img src={item.img} alt="card"/>
                                                <div className={'card-post-footer'}>
                                                    <h3>{item.title}</h3>
                                                    <p>{item.text}</p>
                                                </div>
                                            </div>
                                        );
                                    })
                                }
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