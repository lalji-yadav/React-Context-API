import React from 'react';
import { Consumer } from "../globalState/newState";


const D = () => {

    
    return (
        <div>
            <h3> Components D </h3>
            <Consumer>
                 {
                     value=> <h1>{value.name}</h1>
                 }
             </Consumer>
        </div>
    );
};

export default D;
