import React from 'react';
import { Consumer } from "../globalState/newState";

const C = (props) => {

    console.group(props)
    return (
        <div>
             <h3> Components C </h3>
             <Consumer>
                 {
                     value=> <h1>{value}</h1>
                 }
             </Consumer>
        </div>
    );
};

export default C;
