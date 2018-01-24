import React, { Component } from 'react';
import Header from './components/Header';
import AboutSection from './components/AboutSection';
import Testimonials from './components/Testimonials';
import Features_section from './components/features-section';
import ProjectSection from './components/ProjectSection';
import Services from './components/Services';
import OurBlogSection from './components/OurBlogSection';
import QuickSection from './components/QuickSection';

class Home extends Component {

    render() {
        return (
            <div>
                <Header/>
                <AboutSection/>
                <Features_section/>
                <ProjectSection/>
                <Services/>
                <Testimonials/>
                <OurBlogSection/>
                <QuickSection/>
            </div>
        );
    }
}

export default Home;