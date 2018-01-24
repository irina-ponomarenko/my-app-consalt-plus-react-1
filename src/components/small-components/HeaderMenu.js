import React from 'react';
import { Link } from 'react-router-dom';

const HeaderMenu =()=>{
    return(
        <div className="menu">
            <button type="button" id="btn-click-menu"><span className="icon-menu"></span></button>
            <ul className="navigation">
                <li className="nav-li active"><Link to="/">home</Link></li>
                <li className="nav-li"><Link to="/about us">about us</Link></li>
                <li className="nav-li"><Link to="/industary">industry</Link></li>
                <li className="nav-li"><Link to="/services">services</Link></li>
                <li className="nav-li"><Link to="/pages">pages</Link></li>
                <li className="nav-li"><Link to="/contact us">contact us</Link></li>
            </ul>
        </div>
    );
}
export default HeaderMenu;