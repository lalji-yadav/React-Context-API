import  React,{ useState } from 'react';
import './App.css';
import A from "./components/A";
import B from "./components/B";
import Home from "./context/home";


export const ThemeContext = React.createContext('light')

function App() {

  const [data, setData] = useState({
    name: "Lalji Yadav"
  })

  return (
    <div>
      <h3> Context API Example in reactjs  </h3>
      {/* <p> {data.name} </p>
      <p onClick={()=>setData({name: "Anubhav"})} >{data.name}</p>

      <A name="Yadav"/>

      <ThemeContext.Provider value="dark">
        <B />
      </ThemeContext.Provider> */}

      <Home />
     
    </div>
  );
}

export default App;
