import React from 'react';
import { NavLink } from 'react-router-dom';

class HeaderMenu extends React.Component {
    render() {
        console.log('items', this.props.items);
        return (
            <div className="menu">
                <button type="button" id="btn-click-menu"><span className="icon-menu"></span></button>
                <div className="navigation">
                    {this.props.items.map((item, index) =>
                        <NavLink to={item.Link} key={index} className={'nav-li'} activeClassName="active">{item.label}</NavLink>
                    )}
                </div>
            </div>
        );
    };
}
export default HeaderMenu;