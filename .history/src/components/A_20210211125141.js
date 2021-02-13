import React from 'react';
import B from "./B";

const A = (props) => {
    console.log(props)
    return (
        <div>
             <h3> Components A </h3>
              <p>{props.name}</p>
             <B nam={props.name} />
        </div>
    );
};

export default A;
