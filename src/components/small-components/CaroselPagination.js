import React from 'react';
const CaroselPagination =()=>{
    return(
        <div className="pagination-wrapper">
            <a href="" className="prev icon-arrow-left-circle"></a>
            <ul className="pagination-list">
                <li className="active"><a className="one" href="#"><img src="images/codecanyon.png" alt="" /></a></li>
                <li><a className="two" href="#"><img src="images/videohive.png" alt="" /></a></li>
                <li><a className="three" href="#"><img src="images/audiojungle.png" alt="" /></a></li>
                <li><a className="four" href="#"><img src="images/graphicriver.png" alt="" /></a></li>
                <li><a className="five" href="#"><img src="images/photodune.png" alt="" /></a></li>
            </ul>
            <a href="" className="next icon-arrow-right-circle"></a>
        </div>
    );
}
export default CaroselPagination;