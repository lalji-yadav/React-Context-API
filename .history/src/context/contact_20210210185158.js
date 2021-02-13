import React, { Component } from 'react';
import { ThemeContext } from "../App";

class Contact extends Component {
    render() {
        return (
            <div>
                <h3> Contact Components </h3>
                <ThemeContext.Consumer>
                    {value=><p>{value.data}</p>}
                </ThemeContext.Consumer>
            </div>
        );
    }
}

export default Contact;
