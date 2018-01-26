import React from 'react';
class Services extends React.Component {
    constructor(props)
    {
        super(props);

        this.state = {
            header: "Services"
        }
    }
    render() {
        const list = [
            {
                _id: 'busines',
                title: 'business consultation',
                className: 'icon-busines'
            },
            {
                _id: 'local',
                title: 'boost local business',
                className: 'icon-boosting'
            },
            {
                _id: 'account',
                title: 'accounting',
                className: 'icon-accounting'
            }
        ];
        return (
            <section className="services">
                <div className="container">
                    <header className="sections-header">
                        <h2>{this.state.header}</h2>
                    </header>
                    <ul className="list-features service-list">
                        {
                            list.map((item, index) => {
                                return (
                                    <li
                                        key={index}
                                        className={item.className + ' before-top'}>
                                        <h4>{item.title}</h4>
                                        <p>Many variations of passages of Lorem available, but the majority have
                                            suffered alteration in some form, by injected humour</p>
                                    </li>
                                );
                            })
                        }
                    </ul>
                    <button type="button" className="btn-back subscribe">Full Services</button>
                </div>
            </section>
        );
    }
}
export  default Services;