import React from 'react';

import { Route } from 'react-router-dom';

//components
import Home from './Home';
import AboutUs from './AboutUs';
import Industary from './Industary';
import Services from './Blog';
import Pages from './BlogPost';
import  ContactUs from './ContactUs';


class Main extends React.Component {
    render() {
        return (
            <div className="Main">
                <Route exact path="/" component={Home}/>
                <Route path="/about us" component={AboutUs}/>
                <Route path="/industary" component={Industary}/>
                <Route path="/services" component={Services}/>
                <Route path="/pages" component={Pages}/>
                <Route path="/contact us" component={ContactUs}/>
            </div>
        );
    }
}

export default Main;