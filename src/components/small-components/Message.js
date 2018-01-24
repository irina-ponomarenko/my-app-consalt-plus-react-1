import React from 'react';
const Message =()=>{
    return(
        <div className="message">
            <div className="container-1">
                <h2>leave message</h2>
                <form className="message-list">
                    <div className="wrapper-input-comment">
                        <input type="text" placeholder="name"/>
                        <input type="email" placeholder="email"/>
                    </div>
                    <textarea placeholder="comment" rows="10"></textarea>
                    <button type="submit" className="btn-back comment-btn">submit comment</button>
                </form>
            </div>
        </div>
    );
}
export default Message;