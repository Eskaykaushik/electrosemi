import './App.css';
import Product from './Component/Product';
import Navbar from './Component/Navbar';
import Img from './Component/BackGround';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom"
import { useState } from 'react';
import Ourclient from './Component/Ourclient';

function App() {
  const [mode,setMode]=useState("light");

  const [modeBt,setmodeBt]=useState("Enable Dark Mode");
    const toggleMode=()=>{
      if(mode==="light"){
        setMode("dark");
        document.body.style.background="DimGrey";
        setmodeBt("Enable Light Mode");
      }
      else{
        setMode("light");
        document.body.style.background="DarkGrey";
        setmodeBt("Enable Dark Mode");
       
      }
    }
  return (
    <div className="App">
      <Navbar fashion={toggleMode} theme={modeBt}/>
      <BrowserRouter>
       <Routes>
       <Route path="/" element={<Img/>}></Route>
       <Route path="/Product" element={<Product/>}></Route>    
       
       <Route path="/Ourclient" element={<Ourclient/>}></Route>       
  
       </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
