import React from 'react';
import { Link } from 'react-router-dom';
const Modal_form =()=>{
    return(
        <div>
        <div id="modal_form">
            <span id="modal_close">X</span>
            <ul className="navigation-min">
                <li className="nav-li active"><Link to="/">home</Link></li>
                <li className="nav-li"><Link to="/about us">about us</Link></li>
                <li className="nav-li"><Link to="/industary">industry</Link></li>
                <li className="nav-li"><Link to="/services">services</Link></li>
                <li className="nav-li"><Link to="/pages">pages</Link></li>
                <li className="nav-li"><Link to="/contact us">contact us</Link></li>
            </ul>
        </div>
        <div id="overlay"></div>
        </div>
    );
}
export default Modal_form;