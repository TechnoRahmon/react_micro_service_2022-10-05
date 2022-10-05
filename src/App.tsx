import React, { ReactNode } from 'react';
import logo from './logo.svg';
import './App.css';

import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import DatePicker from './pages/DatePicker';
import NotFound from './pages/NotFound';

const COMPONENT_NAME =  {
  HOME : "HOME",
  DATE : "DATE"
}
function App() {

  const APP_NAME:string = process.env.REACT_APP_NAME?.trim() ?? '';

  console.log('====================================');
  console.log(   APP_NAME.trim() == 'HOME' );
  console.log('====================================');

  let componentRoute:any = <></>;

  switch (APP_NAME) {
    case COMPONENT_NAME.HOME:
      componentRoute = <Home /> ;
      break;
    
      case COMPONENT_NAME.DATE:
        componentRoute = <DatePicker />;
        break;

    default:
      break;
  }

  return (
    <div className="App">
           <h1>Welcome to  - {process.env.REACT_APP_NAME} component</h1>
           {componentRoute}
    </div>
  );
}

export default App;
