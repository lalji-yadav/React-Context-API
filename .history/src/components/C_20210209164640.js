import React from 'react';

const C = (props) => {

    console.group(props)
    return (
        <div>
             <h3> Components C </h3>
             <h1>{props.nam}</h1>
        </div>
    );
};

export default C;
