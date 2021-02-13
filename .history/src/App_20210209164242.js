import { useState } from 'react';
import './App.css';
import A from "./components/A";
import B from "./components/B";

function App() {

  const [data, setData] = useState({
    name: "Lalji Yadav"
  })

  return (
    <div>
      <h3> Context API Example in reactjs  </h3>
      <p> {data.name} </p>
      <p onClick={()=>setData({name: "Anubhav"})} >{data.name}</p>

      <A name="Yadav" />
      <B />
     
    </div>
  );
}

export default App;
