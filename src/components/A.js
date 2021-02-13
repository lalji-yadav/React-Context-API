import React, { useState } from 'react';
import B from "./B";
import { Provider } from "../globalState/newState";

const A = (props) => {

    const [values, setValues] = useState({
        name:'Ankit'
    })
    console.log(props)
    return (
        <div>
             <h3> Components A </h3>
              <p>{values.name}</p>
              <Provider value={values}>
                <B />
              </Provider>
                         
        </div>
    );
};

export default A;
