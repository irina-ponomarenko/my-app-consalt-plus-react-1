import React from 'react';
const Header_menu =()=>{
    return(
        <div className="menu">
            <button type="button" id="btn-click-menu"><span className="icon-menu"></span></button>
            <ul className="navigation">
                <li className="nav-li active"><a href="">Home</a></li>
                <li className="nav-li"><a href="">about us</a></li>
                <li className="nav-li"><a href="">industry</a></li>
                <li className="nav-li"><a href="">services</a></li>
                <li className="nav-li"><a href="">pages</a></li>
                <li className="nav-li"><a href="">Contact us</a></li>
            </ul>
        </div>
    );
}
export default Header_menu;