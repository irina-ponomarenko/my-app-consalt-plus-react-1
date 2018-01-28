import React from 'react';

class WriteUsSection extends React.Component{
    constructor(props) {
        super(props);
        this.state = {value: 'services'};

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }
    render()
    {
        return (
            <section className="write-us">
                <div className="container">
                    <header className="sections-header">
                        <h2>Write to Us</h2>
                    </header>
                    <form className="write">
                        <div className="wrapper-input">
                            <div className="write-name">
                                <label htmlFor="id-name">Name</label>
                                <input type="text" id="id-name"/>
                            </div>
                            <div className="write-name">
                                <label htmlFor="id-email">Email</label>
                                <input type="email" id="id-email"/>
                            </div>
                        </div>
                        <div className="wrapper-input">
                            <div className="write-name">
                                <label htmlFor="id-phone">Phone</label>
                                <input type="text" id="id-phone"/>
                            </div>
                            <div className="write-name">
                                <select id="id-serv" value={this.state.value} onChange={this.handleChange}>
                                    <option value="services">services</option>
                                    <option value="services-2">services-2</option>
                                    <option value="services-3">services-3</option>
                                    <option value="services-4">services-4</option>
                                </select>
                            </div>
                        </div>
                        <div className="write-name-area">
                            <label htmlFor="comment-id">Comment</label>
                            <textarea id="comment-id" rows="5"></textarea>
                        </div>
                        <button type="submit" className="btn-back submit">Submit Now</button>
                    </form>
                </div>
            </section>
        );
    }
}
export default WriteUsSection;