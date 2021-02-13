import React, { Component } from 'react';
import About from "./about";


 export const MyContext = React.createContext()

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
