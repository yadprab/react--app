
import './App.css';
import {Header} from './components/Header';
import {Main} from './components/Main';
import {
  BrowserRouter as Router,
  Switch,
  Route, 
  Link,
  
}from "react-router-dom";


function App() {
  return (
    <>
      <Header/>
       <Main/>
    </>
   

  )
}

export default App;
