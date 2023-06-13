
import './App.css';
import React, { useState } from "react";
import LoginPage from './Componentes/LoginPage';
 import Scanner2 from './Componentes/Scanner2.js';
const App = () => {
  return (
    <React.Fragment>
      <Scanner2/>
          <LoginPage/>
      
    </React.Fragment>
  );
}
 
export default App;