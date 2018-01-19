import React from 'react';
const Modal_form =()=>{
    return(
        <div>
        <div id="modal_form">
            <span id="modal_close">X</span>
            <ul className="navigation-min">
                <li className="nav-li active"><a href="">Home</a></li>
                <li className="nav-li"><a href="">about us</a></li>
                <li className="nav-li"><a href="">industry</a></li>
                <li className="nav-li"><a href="">services</a></li>
                <li className="nav-li"><a href="">pages</a></li>
                <li className="nav-li"><a href="">Contact us</a></li>
            </ul>
        </div>
        <div id="overlay"></div>
        </div>
    );
}
export default Modal_form;