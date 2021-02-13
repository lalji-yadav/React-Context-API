import  React,{ useState } from 'react';
import './App.css';
import A from "./components/A";
import B from "./components/B";
import Home from "./context/home";


export const ThemeContext = React.createContext()

function App() {

  const [data, setData] = useState({
    name: "Lalji Yadav Kamasin",
    mob:"8726650277",
    email:'lalji@gmail.com'
  })

 const changeStates=()=> {
    setData({
      name:"Abc",
      mob:"1234567890",
      email:'12lalji@gmail.com'
    })
  }

  return (
    const contextValues = {
      data: data,
      changeStates: changeStates
    }
    <div>
      <h3> Context API Example in reactjs  </h3>
      {/* <p> {data.name} </p>
      <p onClick={()=>setData({name: "Anubhav"})} >{data.name}</p>

      <A name="Yadav"/>

      <ThemeContext.Provider value="dark">
        <B />
      </ThemeContext.Provider> */}

      <ThemeContext.Provider value={data, changeStates}>
        <Home />
      </ThemeContext.Provider>

      
     
    </div>
  );
}

export default App;
