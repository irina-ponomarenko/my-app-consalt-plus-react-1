import React from 'react';
import { Link } from 'react-router-dom';

class HeaderMenu extends React.Component {
    render() {
        console.log('items', this.props.items);
        return (
            <div className="menu">
                <button type="button" id="btn-click-menu"><span className="icon-menu"></span></button>
                <div className="navigation">
                    {this.props.items.map((item, index) =>
                        <Link to={item.Link} key={index} className={'nav-li'}>{item.label}</Link>
                    )}
                </div>
            </div>
        );
    };
}
export default HeaderMenu;