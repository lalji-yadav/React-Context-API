import React, { Component } from 'react';
import { ThemeContext } from "../App";

class Contact extends Component {
    render() {
        return (
            <div>
                <h3> Contact Components </h3>
                <ThemeContext.Consumer>
                    {
                    ({value, changeStates})=>(
                        <div>
                           <p>{value.data.name}</p>
                           <button onClick={changeStates}> Accccccc </button>
                        </div>
                    )}
                </ThemeContext.Consumer>
            </div>
        );
    }
}

export default Contact;
