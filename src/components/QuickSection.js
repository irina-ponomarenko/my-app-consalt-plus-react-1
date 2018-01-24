import React from 'react';
const Quick_section =()=>{
    return(
        <section className="quick">
            <div className="container">
                <header className="sections-header">
                    <h2>Quick contact</h2>
                </header>
                <ul className="contact-card">
                    <li>
                        <div className="wrapper-contact email-icon">
                            <h5>Email</h5>
                            <span>info@consultplus.com</span>
                        </div>
                    </li>
                    <li>
                        <div className="wrapper-contact call-icon">
                            <h5>Call Us</h5>
                            <span>+91 8879 8767 990</span>
                        </div>
                    </li>
                    <li>
                        <div className="wrapper-contact career-icon">
                            <h5>Career</h5>
                            <span>consult@career.com</span>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
}
export default Quick_section;