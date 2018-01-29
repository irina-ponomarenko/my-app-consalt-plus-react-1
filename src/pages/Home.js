import React, { Component } from 'react';
import Header from '../components/Header';
import AboutSection from '../components/AboutSection';
import Testimonials from '../components/Testimonials';
import FeaturesSection from '../components/FeaturesSection';
import ProjectSection from '../components/ProjectSection';
import Services from '../components/Services';
import OurBlogSection from '../components/OurBlogSection';
import QuickSection from '../components/QuickSection';

class Home extends Component {
    render() {
        return (
            <div>
                <Header/>
                <AboutSection/>
                <FeaturesSection/>
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