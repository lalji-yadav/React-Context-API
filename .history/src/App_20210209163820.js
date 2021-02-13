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
      <h3> Context API Example in reactjs {data.name} </h3>

      <A />
      <B />
     
    </div>
  );
}

export default App;
