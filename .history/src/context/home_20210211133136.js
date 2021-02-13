import React, { Component } from 'react';
import About from "./about";

class Home extends Component {

    state={
        name:"Lalji Yadav Kamasin",
        mob:"1212",
        email:'58418694'
      }
   
    render() {
        return (
            <div>
                <About />
            </div>
        );
    }
}

export default Home;
