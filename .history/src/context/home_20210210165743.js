import React, { Component } from 'react';
import About from "./about";


export const Mycontext = React.createContext()

class Home extends Component {

    state={
      name:"Lalji Yadav Kamasin"
    }
    render() {
        return (
            <div>
               <Mycontext.Provider name={this.state.name}>
                   <About />
                </Mycontext.Provider> 
               
            </div>
        );
    }
}

export default Home;
