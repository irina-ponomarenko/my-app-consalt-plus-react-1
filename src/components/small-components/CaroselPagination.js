import React from 'react';
class CaroselPagination extends React.Component {
    componentDidMount (){
        const $ = window.$;
        $('.next').click(function () {
            console.log(this);
            var next = $('ul.pagination-list').find('li.active').removeClass('active').next();
            next.index() < 0 && (next = $("ul.pagination-list li:first"));
            next.addClass('active');
            return false;
        });
        $('.prev').click(function () {
            var prev = $('ul.pagination-list').find('li.active').removeClass('active').prev();
            prev.index() < 0 && (prev = $("ul.pagination-list li:last"));
            prev.addClass('active');
            return false;
        });
    }
    render() {
        return (
            <div className="pagination-wrapper">
                <a href="" className="prev icon-arrow-left-circle"> </a>
                <ul className="pagination-list">
                    <li className="active"><a className="one" href=""><img src="images/codecanyon.png" alt="codecanyon"/></a>
                    </li>
                    <li><a className="two" href=""><img src="images/videohive.png" alt="videohive"/></a></li>
                    <li><a className="three" href=""><img src="images/audiojungle.png" alt="audiojungle"/></a></li>
                    <li><a className="four" href=""><img src="images/graphicriver.png" alt="graphicriver"/></a></li>
                    <li><a className="five" href=""><img src="images/photodune.png" alt="photodune"/></a></li>
                </ul>
                <a href="" className="next icon-arrow-right-circle"> </a>
            </div>
        );
    };
}
export default CaroselPagination;