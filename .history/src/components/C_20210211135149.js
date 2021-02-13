import React from 'react';
import D from "./D";
import { Consumer } from "../globalState/newState";

const C = () => {

    return (
        <div>
             <h3> Components C </h3>
             <D />
        </div>
    );
};

export default C;
