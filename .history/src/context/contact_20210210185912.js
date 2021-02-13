import React, { Component } from 'react';
import { ThemeContext } from "../App";

class Contact extends Component {
    render() {
        return (
            <div>
                <h3> Contact Components </h3>
                <ThemeContext.Consumer>
                    {
                    (value, Ab)=>(
                        <div>
                           <p>{value.data.name} {value.changeStates}</p>
                           <button> {Ab.changeStates} </button>
                        </div>
                    )}
                </ThemeContext.Consumer>
            </div>
        );
    }
}

export default Contact;
