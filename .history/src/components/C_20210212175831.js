import axios from 'axios';
import React, { useEffect, useState } from 'react';
import D from "./D";

const C = () => {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const [data, setData] = useState({})
    const [id, setId] = useState(1)
    const [idfromButton, setIdfromButton] = useState(1)

    const handle=()=> {
        setIdfromButton(id)
    }

    useEffect(()=>{
        axios.get(`https://reqres.in/pi/unknown/${idfromButton}`).then((res)=> {
            console.log(res.data.data)
            setData(res.data.data)
            setLoading(false)
            setError('')
        }).catch((err)=> {
            console.log(err)
            setLoading(false)
            setError('Something went rong')
        })
    },[idfromButton])

    return (
        <div>
             <h3> Components C </h3>
             <D />
              
             <input type="text" placeholder="find by Id" value={id} onChange={e=>setId(e.target.value)} />

             <button onClick={handle}> Fetch data from button Click </button>

             <h3>{data.name}</h3>
             {
                 error? error : null
             }
             {/* {
                 data.map(item=> (<li key={item.id} >{item.name}</li>))
             } */}
        </div>
    );
};

export default C;
