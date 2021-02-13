import axios from 'axios';
import React, { useState } from 'react';
import D from "./D";

const C = () => {

    const [data, setData] = useState([])

    axios.get('https://reqres.in/api/unknown').then((res)=> {
        console.log(res)
    }).catch((err)=> {
        console.log(err)
    })

    return (
        <div>
             <h3> Components C </h3>
             <D />
        </div>
    );
};

export default C;
