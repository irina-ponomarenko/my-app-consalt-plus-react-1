import React from 'react';
import Main from './Main';
import Footer from './components/footer/Footer';
class App extends React.Component {
    render() {
        return (
            <div>
                <Main />
                <Footer/>
            </div>
        );
    }
}

export default App;