import React, { Component } from 'react';
import About from "./about";


export const Mycontext = React.createContext()

class Home extends Component {
    render() {
        return (
            <div>
                <About />
            </div>
        );
    }
}

export default Home;
