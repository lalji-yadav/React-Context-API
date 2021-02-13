import axios from 'axios';
import React, { useEffect, useState } from 'react';
import D from "./D";

const C = () => {

    const [data, setData] = useState([])
    const [id, setId] = useState(1)

    useEffect(()=>{
        axios.get('https://reqres.in/api/unknown').then((res)=> {
            console.log(res.data.data)
            setData(res.data.data)
        }).catch((err)=> {
            console.log(err)
        })
    },[])

    return (
        <div>
             <h3> Components C </h3>
             <D />

             <input type="text" placeholder="find by Id" value={id} onChange={(e)=>setData(e.target.value)} />
             {
                 data.map(item=> (<li key={item.id} >{item.name}</li>))
             }
        </div>
    );
};

export default C;
