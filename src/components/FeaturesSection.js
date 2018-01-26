import React from 'react';
const Features_section =()=>{
    const list = [
        {
            _id: 'busines-1',
            title: 'Business boosting',
            className: 'busines-1',
            text: 'established fact that a reader will be distracted by the readable content of a page when looking'
        },
        {
            _id: 'creative',
            title: 'Creative process',
            className: 'creative',
            text: 'There are many variations of passages of Ipsum available, but the majority have suffered alteration.'
        }
    ];
    return(
        <section className="features">
            <div className="container">
                <header className="sections-header">
                    <h2>our features</h2>
                </header>
                <div className="wrapper-list-features">
                    <ul className="list-features">
                        <li className="before-left">
                            <h4>24 hour support</h4>
                            <p>containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus </p>
                        </li>
                        <li className="before-left security">
                            <h4>FUll security</h4>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the</p>
                        </li>
                    </ul>
                    <div className="logo-icon">
                        <img src="images/logo-icon.png" alt="logo-icon"/>
                    </div>
                    <ul className="list-features">
                        {
                            list.map((item, index) => {
                                return (
                                    <li
                                        key={index}
                                        className={item.className + ' before-right'}>
                                        <h4>{item.title}</h4>
                                        <p>{item.text}</p>
                                    </li>
                                );
                            })
                        }
                    </ul>
                </div>
                <div className="boost">
                    <p>If you want to boost your business Contact us</p>
                    <button type="button" className="btn-back">Boost your business</button>
                </div>
            </div>
        </section>
    );
}
export default Features_section;