import React, { Component } from 'react';
import Mycontext from "./home";

class Contact extends Component {
    render() {
        return (
            <div>
                <h3> Contact Components </h3>
                <Mycontext.Consumer>
                    {
                        value=>{
                            <h3>{value}</h3>
                        }
                    }
                </Mycontext.Consumer>
            </div>
        );
    }
}

export default Contact;
