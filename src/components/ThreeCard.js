import React from 'react';
import { Link } from 'react-router-dom';

class Tree_card extends React.Component {
    render() {
        return (
            <section className="three-card">
                <div className="container">
                    <div className="card-deck">
                        <div className="card card-three">
                            <img className="card-img-top" src="images/card-1.png" alt="card-1"/>
                            <div className="card-body">
                                <h3 className="card-title">Our Team</h3>
                                <p className="card-text">Dummy text of the printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy</p>
                                <button type="button" className="btn-back btn-card">our team</button>
                            </div>
                        </div>
                        <div className="card card-three">
                            <img className="card-img-top" src="images/card-2.png" alt="card-2"/>
                            <div className="card-body">
                                <h3 className="card-title"><Link to="/careers">Careers</Link></h3>
                                <p className="card-text">Dummy text of the printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy</p>
                                <button type="button" className="btn-back btn-card">join team</button>
                            </div>
                        </div>
                        <div className="card card-three">
                            <img className="card-img-top" src="images/card-3.png" alt="card-3"/>
                            <div className="card-body">
                                <h3 className="card-title">Serviceas</h3>
                                <p className="card-text">Dummy text of the printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy</p>
                                <button type="button" className="btn-back btn-card">Full services</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    };
}
 export default Tree_card;