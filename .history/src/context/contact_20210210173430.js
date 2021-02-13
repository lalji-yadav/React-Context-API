import React, { Component } from 'react';
import { MyContext } from "./home";

class Contact extends Component {
    render() {
        return (
            <div>
                <h3> Contact Components </h3>
                <MyContext.Consumer>
                    {value=><h3>{value}</h3>}
                </MyContext.Consumer>
            </div>
        );
    }
}

export default Contact;
