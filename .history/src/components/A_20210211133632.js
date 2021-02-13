import React, { useState } from 'react';
import B from "./B";

const A = (props) => {

    const [values, setValues] = useState({
        name:'Ankit'
    })
    console.log(props)
    return (
        <div>
             <h3> Components A </h3>
              <p>{values.name}</p>
             <B nam={props.name} />
        </div>
    );
};

export default A;
