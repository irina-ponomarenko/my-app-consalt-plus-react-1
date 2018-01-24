import React from 'react';
import Card_carosel from './small-components/CardCarosel';
const Project_section =()=>{
    return(
        <section className="project">
            <div className="container">
                <header className="sections-header">
                    <h2>Projects</h2>
                </header>
                <div className="wrapper-card">
                    <div className="card card-project none-border">
                        <button type="button" className="after-img img-project">
                            Banking
                        </button>
                        <img className="card-img-top" src="images/project-card.png" alt="Card image cap"/>
                            <div className="card-body">
                                <h5 className="card-title">Project Heading</h5>
                                <p className="card-text">Popularised in the 1960s with the release
                                    Letraset sheets containing Lorem.</p>
                            </div>
                    </div>
                    <Card_carosel/>
                </div>
                <button type="button" className="btn-back subscribe">Full Projects</button>
            </div>
        </section>
    );
}
export  default Project_section;