import React from 'react';

import { Route } from 'react-router-dom';

//components
import Home from './Home';
import AboutUs from './AboutUs';
import Industary from './Industary';
import Pricing from './Pricing';
import Pages from './Blog';
import  ContactUs from './ContactUs';
import BlogPost from './BlogPost';
import Testimonials from './TestimonialsPage';
import Careers from './Careers';


class Main extends React.Component {
    render() {
        return (
            <div className="Main">
                <Route exact path="/" component={Home}/>
                <Route path="/about us" component={AboutUs}/>
                <Route path="/industary" component={Industary}/>
                <Route path="/pricing" component={Pricing}/>
                <Route path="/pages" component={Pages}/>
                <Route path="/contact us" component={ContactUs}/>
                <Route path="/blog post" component={BlogPost}/>
                <Route path="/testimonials" component={Testimonials}/>
                <Route path="/careers" component={Careers}/>
            </div>
        );
    }
}

export default Main;