import React from 'react';
import Header from './components/Header';
import Footer from './components/footer/Footer';
import About_section from './components/about-section';
import Testimonials from './components/Testimonials';
import Tree_card from './components/Three-card';
import Features_section from './components/features-section';
import Project_section from './components/project-section';
import Services from './components/Services';
import Our_blog_section from './components/Our-blog-section';
import Quick_section from './components/Quick-section';

class App extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <About_section/>
                <Features_section/>
                <Project_section/>
                <Services/>
                <Tree_card/>
                <Testimonials/>
                <Our_blog_section/>
                <Quick_section/>
               <Footer/>
            </div>
        );
    }
}

export default App;