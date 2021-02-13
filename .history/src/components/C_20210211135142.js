import React from 'react';
import D from "./D";
import { Consumer } from "../globalState/newState";

const C = () => {

    return (
        <div>
             <h3> Components C </h3>
             <D />
             <Consumer>
                 {
                     value=> <h1>{value.name}</h1>
                 }
             </Consumer>
        </div>
    );
};

export default C;
