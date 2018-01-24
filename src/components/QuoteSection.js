import React from 'react';
const QuoteSection =()=>{
    return(
        <section className="quote-section">
            <div className="container">
                <div id="carouselExampleIndicators-6" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators carosel-quote-indicators">
                        <li data-target="#carouselExampleIndicators-6"  data-slide-to="0" className="li-1 active"></li>
                        <li data-target="#carouselExampleIndicators-6" data-slide-to="1" className="li-2"></li>
                        <li data-target="#carouselExampleIndicators-6" data-slide-to="2" className="li-3"></li>
                        <li data-target="#carouselExampleIndicators-6" data-slide-to="3" className="li-4"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <blockquote className="quote-carosel">
                                <p>Lorem Ipsum is simply dummy text of the printing
                                    and typesetting industry. Lorem Ipsum has been the industry's
                                    standard dummy text ever since the 1500s, when an unknown printer took a galley .</p>
                                <div className="autor">
                                    <h5>Dr.Jonathan Peeter</h5>
                                    <span>Designation</span>
                                </div>
                            </blockquote>
                        </div>
                        <div className="carousel-item">
                            <blockquote className="quote-carosel">
                                <p>Lorem Ipsum is simply dummy text of the printing
                                    and typesetting industry. Lorem Ipsum has been the industry's
                                    standard dummy text ever since the 1500s, when an unknown printer took a galley .</p>
                                <div className="autor">
                                    <h5>Dr.Jonathan Peeter</h5>
                                    <span>Designation</span>
                                </div>
                            </blockquote>
                        </div>
                        <div className="carousel-item">
                            <blockquote className="quote-carosel">
                                <p>Lorem Ipsum is simply dummy text of the printing
                                    and typesetting industry. Lorem Ipsum has been the industry's
                                    standard dummy text ever since the 1500s, when an unknown printer took a galley .</p>
                                <div className="autor">
                                    <h5>Dr.Jonathan Peeter</h5>
                                    <span>Designation</span>
                                </div>
                            </blockquote>
                        </div>
                        <div className="carousel-item">
                            <blockquote className="quote-carosel">
                                <p>Lorem Ipsum is simply dummy text of the printing
                                    and typesetting industry. Lorem Ipsum has been the industry's
                                    standard dummy text ever since the 1500s, when an unknown printer took a galley .</p>
                                <div className="autor">
                                    <h5>Dr.Jonathan Peeter</h5>
                                    <span>Designation</span>
                                </div>
                            </blockquote>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export  default QuoteSection;