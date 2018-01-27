import React from 'react';
const AboutSection =()=>{
    return(
        <section className="about-us">
            <div className="container about-container border-about">
                <header className="sections-header">
                    <h2>About us</h2>
                </header>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                    has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.</p>
                <button type="button" className="btn-back apply margin-bottom">Read More</button>
            </div>
            <div className="container">
                <div className="pagination-wrapper">
                    <a href="" className="prev icon-arrow-left-circle"> </a>
                    <ul className="pagination-list">
                        <li className="active"><a className="one" href=""><img src="images/codecanyon.png" alt="codecanyon" /></a></li>
                        <li><a  href="" className="two"><img src="images/videohive.png" alt="videohive" /></a></li>
                        <li><a  href="" className="three"><img src="images/audiojungle.png" alt="audiojungle" /></a></li>
                        <li><a  href="" className="four"><img src="images/graphicriver.png" alt="graphicriver" /></a></li>
                        <li><a  href="" className="five"><img src="images/photodune.png" alt="photodune" /></a></li>
                    </ul>
                    <a href="" className="next icon-arrow-right-circle"> </a>
                </div>
            </div>
        </section>
        
    );
}
export default AboutSection;