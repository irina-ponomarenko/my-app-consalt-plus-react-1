import React from 'react';
const Card_carosel =()=>{
    return(
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
                            <img className="card-img-top" src="images/project-card-2.png" alt="project-card-2"/>
                        </div>
                        <div className="carousel-item">
                            <img className="card-img-top" src="images/project-card-2.png" alt="project-card-2"/>
                        </div>
                        <div className="carousel-item">
                            <img className="card-img-top" src="images/project-card-2.png" alt="project-card-2"/>
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
    );
}
export default Card_carosel;