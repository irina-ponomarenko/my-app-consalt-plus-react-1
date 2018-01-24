import React from 'react';
const SocialBlock =()=>{
    return(
        <div className="share-social">
            <div className="social-block">
                <ul className="social">
                    <li><a href=""><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                    <li><a href=""><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                    <li><a href=""><i className="fa fa-google-plus" aria-hidden="true"></i></a></li>
                </ul>
            </div>
            <div className="share-card">
                <span className="icon-share"></span>
            </div>
        </div>
    );
}
export default SocialBlock;