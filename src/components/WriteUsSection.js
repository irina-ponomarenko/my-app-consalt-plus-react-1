import React from 'react';
const WriteUsSection =()=>{
    return(
        <section className="write-us">
            <div className="container">
                <header className="sections-header">
                    <h2>Write to Us</h2>
                </header>
                <form className="write">
                    <div className="wrapper-input">
                        <div className="write-name">
                            <label for="id-name">Name</label>
                            <input type="text" id="id-name"/>
                        </div>
                        <div className="write-name">
                            <label for="id-email">Email</label>
                            <input type="email" id="id-email"/>
                        </div>
                    </div>
                    <div className="wrapper-input">
                        <div className="write-name">
                            <label for="id-phone">Phone</label>
                            <input type="text" id="id-phone"/>
                        </div>
                        <div className="write-name">
                            <label for="id-serv">Service</label>
                            <select id="id-serv">
                                <option></option>
                                <option></option>
                                <option></option>
                            </select>
                        </div>
                    </div>
                    <div className="write-name-area">
                        <label for="comment-id">Comment</label>
                        <textarea id="comment-id" rows="5"></textarea>
                    </div>
                    <button type="submit" className="btn-back submit">Submit Now</button>
                </form>
            </div>
        </section>
    );
}
export default WriteUsSection;