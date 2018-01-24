import React from 'react';
const ConnectSection =()=>{
    return(
        <section className="connect">
            <div className="container">
                <div className="connect-info">
                    <header className="sections-header left-header">
                        <h2>Connect us</h2>
                    </header>
                    <ul className="info-text">
                        <li>
                            <div className="icon-information">
                                <span className="icon-call-out"></span>
                            </div>
                            <div className="wrapper-text-li">
                                <h5>Call Us</h5>
                                <span>+885 6586 5554</span>
                            </div>
                        </li>
                        <li>
                            <div className="icon-information">
                                <span className="icon-envelope-open"></span>
                            </div>
                            <div className="wrapper-text-li">
                                <h5>Email</h5>
                                <span>info@consultplus.com</span>
                            </div>
                        </li>
                        <li>
                            <div className="icon-information">
                                <span className="icon-location-pin"></span>
                            </div>
                            <div className="wrapper-text-li">
                                <h5>Address</h5>
                                <span>Department 98</span>
                                <span>44-46 Morningside Road</span>
                                <span>Edinburgh, Scotland</span>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2234.952216149054!2d-3.212410084062471!3d55.932866280601914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4887c70c0bdfdccd%3A0x739396a168781a3c!2zNDQgTW9ybmluZ3NpZGUgUmQsIEVkaW5idXJnaCBFSDEwIDRCRiwg0JLQtdC70LjQutC-0LHRgNC40YLQsNC90ZbRjw!5e0!3m2!1suk!2sua!4v1515262595697" width="752" height="325" frameborder="0" style="border:0" allowfullscreen></iframe>
                </div>
            </div>
        </section>
    );
}
export default ConnectSection;