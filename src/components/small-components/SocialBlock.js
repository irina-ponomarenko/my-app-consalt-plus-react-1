import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class SocialBlock extends React.Component {
    constructor() {
        super();
        this.state = {
            blockOpened: false
        }
    }
        toggleClick = () =>{
            this.setState({
                blockOpened: !this.state.blockOpened
            });
        };
    render() {
        let DropdownContent;
        if (this.state.blockOpened) {
            DropdownContent = (
                <ul className="social">
                    <li><a href=""><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                    <li><a href=""><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                    <li><a href=""><i className="fa fa-google-plus" aria-hidden="true"></i></a></li>
                </ul>
            )

        }
        return (
            <div className="share-social">
                <div className="social-block">
                    <ReactCSSTransitionGroup
                        transitionName="toggle"
                        transitionEnterTimeout={300}
                        transitionLeaveTimeout={300}>
                    {DropdownContent}
                    </ReactCSSTransitionGroup>
                </div>
                <div className="share-card" onClick={this.toggleClick}>
                    <span className="icon-share"></span>
                </div>
            </div>
        );
    }
}

export default SocialBlock;