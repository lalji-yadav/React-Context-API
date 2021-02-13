import React, { Component } from 'react';
import About from "./about";


export const Mycontext = React.createContext()

class Home extends Component {
    render() {
        return (
            <div>
               <Mycontext.Provider>
                 <About />
                </Mycontext.Provider> 
               
            </div>
        );
    }
}

export default Home;
