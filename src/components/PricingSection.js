import React from 'react';

class PricingSection extends React.Component {
    render() {
        return (
            <section className="pricing">
                <div className="container">
                    <header className="sections-header left-header">
                        <h2>pricing plans</h2>
                    </header>
                    <div className="card-deck pricing-margin">
                        <div className="card card-three border-body">
                            <div className="card-top orange-card">
                                <h4>100$<span>/ month</span></h4>
                                <p>Basic Plan</p>
                            </div>
                            <div className="card-body">
                                <ul className="list-card-blog body-list">
                                    <li><i className="fa fa-check" aria-hidden="true"></i>Duis commodo mollis</li>
                                    <li><i className="fa fa-check" aria-hidden="true"></i>Nam aliquet sagittis.</li>
                                    <li><i className="fa fa-check" aria-hidden="true"></i>Fusce eleifend lectus.</li>
                                </ul>
                                <button type="button" className="btn-back btn-card position-left">Choose plan</button>
                            </div>
                        </div>
                        <div className="card card-three border-body">
                            <div className="card-top blue-card">
                                <h4>150$<span>/ month</span></h4>
                                <p>Silver Plan</p>
                            </div>
                            <div className="card-body">
                                <ul className="list-card-blog body-list">
                                    <li><i className="fa fa-check" aria-hidden="true"></i>Duis commodo mollis</li>
                                    <li><i className="fa fa-check" aria-hidden="true"></i>Nam aliquet sagittis.</li>
                                    <li><i className="fa fa-check" aria-hidden="true"></i>Fusce eleifend lectus.</li>
                                    <li><i className="fa fa-check" aria-hidden="true"></i>Etiam pulvinar elementum.</li>
                                </ul>
                                <button type="button" className="btn-back btn-card position-left">Choose plan</button>
                            </div>
                        </div>
                        <div className="card card-three border-body">
                            <div className="card-top green-card">
                                <h4>200$<span>/ month</span></h4>
                                <p>gold Plan</p>
                            </div>
                            <div className="card-body">
                                <ul className="list-card-blog body-list">
                                    <li><i className="fa fa-check" aria-hidden="true"></i>Duis commodo mollis</li>
                                    <li><i className="fa fa-check" aria-hidden="true"></i>Nam aliquet sagittis.</li>
                                    <li><i className="fa fa-check" aria-hidden="true"></i>Fusce eleifend lectus.</li>
                                    <li><i className="fa fa-check" aria-hidden="true"></i>Etiam pulvinar elementum.</li>
                                </ul>
                                <button type="button" className="btn-back btn-card position-left">Choose plan</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    };
}
export  default PricingSection;