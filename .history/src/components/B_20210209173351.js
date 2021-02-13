import React from 'react';
import D from "./D";

const B = () => {

    static contextType = themeContext
    return (
        <div>
             <h3> Components B </h3>
             <D theme ={context} />
        </div>
    );
};

export default B;
