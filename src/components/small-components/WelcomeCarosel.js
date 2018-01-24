import React from 'react';
const Welcome_carosel =() =>{
    return(
        <div className="welcome-massege home-message">
            <div className="container">
                <p>We are leading consulting company</p>
                <h2>Choose your industry</h2>
                <div id="carouselExampleIndicators" className="carousel slide width-all" data-ride="carousel">
                    <ol className="carousel-indicators indicators-header">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <ul className="indastry">
                                <li className="card-header-baner">
                                    <a href=""><p className="education">Education</p></a>
                                </li>
                                <li className="card-header-baner">
                                    <a href=""><p className="business">Business</p></a>
                                </li>
                                <li className="card-header-baner">
                                    <a href=""><p className="technology">Technology</p></a>
                                </li>
                                <li className="card-header-baner">
                                    <a href=""><p className="banking">Banking</p></a>
                                </li>
                            </ul>
                        </div>
                        <div className="carousel-item">
                            <ul className="indastry">
                                <li className="card-header-baner">
                                    <a href=""><p className="education">Education</p></a>
                                </li>
                                <li className="card-header-baner">
                                    <a href=""><p className="business">Business</p></a>
                                </li>
                                <li className="card-header-baner">
                                    <a href=""><p className="technology">Technology</p></a>
                                </li>
                                <li className="card-header-baner">
                                    <a href=""><p className="banking">Banking</p></a>
                                </li>
                            </ul>
                        </div>
                        <div className="carousel-item">
                            <ul className="indastry">
                                <li className="card-header-baner">
                                    <a href=""><p className="education">Education</p></a>
                                </li>
                                <li className="card-header-baner">
                                    <a href=""><p className="business">Business</p></a>
                                </li>
                                <li className="card-header-baner">
                                    <a href=""><p className="technology">Technology</p></a>
                                </li>
                                <li className="card-header-baner">
                                    <a href=""><p className="banking">Banking</p></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Welcome_carosel;