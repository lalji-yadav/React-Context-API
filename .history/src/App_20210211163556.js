import  React,{ useState,Suspense } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
//import A from "./components/A";

const A = React.lazy(()=> import('./components/A'))

export const ThemeContext = React.createContext()

function App() {

  const [data, setData] = useState({
    name: "Lalji Yadav Kamasin",
    mob:"8726650277",
    email:'lalji@gmail.com'
  })

 const changeStates=()=> {
    setData({
      name:"Change value Name Lalji to Anubhav Kumar yadav",
      mob:"1234567890",
      email:'12lalji@gmail.com'
    })
  }
  const contextValues = {
    data: data,
    changeStates: changeStates
  }

  return (
    <Suspense fallback={<div>Loading.....</div>}>
      <h3> Context API Example in reactjs  </h3>

      {/* <ThemeContext.Provider value={contextValues}>
        <Home />
      </ThemeContext.Provider> */}

      <Router>
        <Switch>
          <Route exact path="/a" component={A} />
        </Switch>
      </Router>

    </Suspense>
  );
}

export default App;
