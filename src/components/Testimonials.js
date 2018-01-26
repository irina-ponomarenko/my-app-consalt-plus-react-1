import React from 'react';
import { Link } from 'react-router-dom';

class Testimonials extends React.Component {
    render() {
        return (
            <section className="testimonials">
                <div className="container">
                    <header className="quote margin-quote">
                        <h2><Link to="/testimonials">Testimonials</Link></h2>
                    </header>
                    <div className="slider-quote">
                        <div id="carouselExampleIndicators-6" className="carousel slide" data-ride="carousel">
                            <ol className="carousel-indicators">
                                <li data-target="#carouselExampleIndicators-6" data-slide-to="0"
                                    className="active control-1"></li>
                                <li data-target="#carouselExampleIndicators-6" data-slide-to="1"
                                    className="control-2"></li>
                                <li data-target="#carouselExampleIndicators-6" data-slide-to="2"
                                    className="control-3"></li>
                            </ol>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <p className="margin-p-quote">Lorem Ipsum is simply dummy text of the printing and
                                        typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                                        ever since the 1500s, when an unknown printer took a galley of type and
                                        scrambled it to make a type speci
                                        book. It has survived not only five centuries, but also the leap into electronic
                                        typesetting</p>
                                    <h4>Client Name</h4>
                                    <span>Designation</span>
                                </div>
                                <div className="carousel-item">
                                    <p className="margin-p-quote">Lorem Ipsum is simply dummy text of the printing and
                                        typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                                        ever since the 1500s, when an unknown printer took a galley of type and
                                        scrambled it to make a type speci
                                        book. It has survived not only five centuries, but also the leap into electronic
                                        typesetting</p>
                                    <h4>Client Name</h4>
                                    <span>Designation</span>
                                </div>
                                <div className="carousel-item">
                                    <p className="margin-p-quote">Lorem Ipsum is simply dummy text of the printing and
                                        typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                                        ever since the 1500s, when an unknown printer took a galley of type and
                                        scrambled it to make a type speci
                                        book. It has survived not only five centuries, but also the leap into electronic
                                        typesetting</p>
                                    <h4>Client Name</h4>
                                    <span>Designation</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    };
}

export default Testimonials;