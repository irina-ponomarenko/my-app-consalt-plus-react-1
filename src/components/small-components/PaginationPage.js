import React from 'react';
class PaginationPage extends React.Component {
    render() {
        return (
            <div className="nav-blog-page margin-blog-nav">
                <ul>
                    <li className="circle-blog-nav active_border"><a href="">1</a></li>
                    <li className="circle-blog-nav"><a href="">2</a></li>
                    <li className="circle-blog-nav"><a href="">3</a></li>
                </ul>
            </div>
        );
    };
}
export default PaginationPage;