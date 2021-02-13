import React, { Component } from 'react';
import About from "./about";


 export const MyContext = React.createContext()

class Home extends Component {

    // constructor() {
    //     super();
    //    this.state={
    //         name:"Lalji Yadav Kamasin"
    //       }
    // }
    state={
        name:"Lalji Yadav Kamasin",
        mob:"1212",
        email:'58418694'
      }
   
    render() {
        return (
            <div>
               <MyContext.Provider name={this.state}>
                   <About />
                </MyContext.Provider> 
               
            </div>
        );
    }
}

export default Home;
