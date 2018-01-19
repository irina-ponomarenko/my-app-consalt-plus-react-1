import  React from 'react';

const About_us_section =() =>{
    return(
        <section className="about-us">
            <div className="container">
                <div className="left-content">
                    <div className="about">
                        <h2>About us</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
                            took a galley of type and scrambled it to make a type specimen book
                            has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                            It was popularised in the 1960s with the release of Letraset sheets containing .</p>
                    </div>
                    <div className="vision">
                        <h2>Vision</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
                    </div>
                    <div className="mission">
                        <h2>mission</h2>
                        <p>Dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                            ever since the 1500s, when an unknown printer took a galley of type and scrambled.</p>
                    </div>
                </div>
                <aside className="right-column">
                    <div className="video">
                        <div className="play">
                            <i className="fa fa-play" aria-hidden="true"></i>
                        </div>
                        <img src="images/video.png" alt="video"/>
                    </div>
                    <div className="consultations">
                        <form className="consultation">
                            <h3>FREE Consultation</h3>
                            <div className="input-consultation">
                                <input type="text" placeholder="name"/>
                                <input type="email" placeholder="email"/>
                                <textarea placeholder="coment" rows="4"></textarea>
                                <button type="submit" className="btn-back submit">Submit Now</button>
                            </div>
                        </form>
                    </div>
                </aside>
            </div>
        </section>
    );
};
export  default About_us_section;