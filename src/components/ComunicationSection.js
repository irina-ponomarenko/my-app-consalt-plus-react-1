import React from 'react';
import Message from './small-components/Message';
const ComunicationSection =()=>{
    return(
        <section className="comunication">
            <div className="comments">
                <div className="container">
                    <h2>Comments</h2>
                    <ul className="coment-list">
                        <li className="coment-li">
                            <div className="coment-img">
                                <img src="images/coment-1.jpg" alt="coment image"/>
                            </div>
                            <div className="text-coment">
                                <div className="wrapper-coment-text">
                                    <h5>visitor name</h5>
                                    <button type="button" className="btn-back reply">reply</button>
                                </div>
                                <p>All the Lorem Ipsum generators on the Internet tend to
                                    repeat predefined chunks as necessary, making this </p>
                            </div>
                        </li>
                        <li className="coment-li center-coment">
                            <div className="coment-img">
                                <img src="images/coment-2.jpg" alt="coment image"/>
                            </div>
                            <div className="text-coment">
                                <div className="wrapper-coment-text">
                                    <h5>visitor name</h5>
                                    <button type="button" className="btn-back reply">reply</button>
                                </div>
                                <p>There are many variations of passages of Lorem Ipsum available,
                                    but the majority have suffered alteration in some</p>
                            </div>
                        </li>
                        <li className="coment-li">
                            <div className="coment-img">
                                <img src="images/coment-3.jpg" alt="coment image"/>
                            </div>
                            <div className="text-coment">
                                <div className="wrapper-coment-text">
                                    <h5>visitor name</h5>
                                    <button type="button" className="btn-back reply">reply</button>
                                </div>
                                <p>It has survived not only five centuries, but also the leap into electronic typesetting,
                                    remaining essentially</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <Message/>
        </section>
    );
}
export default ComunicationSection;