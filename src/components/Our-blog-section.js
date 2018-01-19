import React from 'react';
const Our_blog_section =()=>{
    return(
        <section className="our-blog">
            <div className="container">
                <header className="sections-header">
                    <h2>Our Blog</h2>
                </header>
                <div className="wrapper-blog-info">
                    <div className="card blog-card-our border-green">
                        <img className="card-img-top" src="images/our-blog.png" alt="Card image cap"/>
                            <div className="card-body">
                                <div className="footer-card">
                                    <p className="card-text"><small className="text-muted">February 22, 2016 </small></p>
                                </div>
                                <h5 className="card-title">Blog Heading Here</h5>
                                <p className="card-text">Established fact that a reader will be distracted by the readable of a page when looking at its layout....</p>
                            </div>
                    </div>
                    <div className="card blog-card-our border-orange">
                        <img className="card-img-top-2" src="images/our-blog.png" alt="Card image cap"/>
                        <div className="card-body">
                            <div className="footer-card">
                                <p className="card-text"><small className="text-muted">February 22, 2016 </small></p>
                            </div>
                            <h5 className="card-title">Blog Heading Here</h5>
                            <p className="card-text">Established fact that a reader will be distracted by the readable of a page when looking at its layout....</p>
                        </div>
                    </div>
                </div>
                <button type="button" className="btn-back comment-btn">Full blog</button>
            </div>
        </section>
    );
}
export default Our_blog_section;