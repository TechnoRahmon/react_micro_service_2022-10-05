import React, { ReactNode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import Home from './pages/Home/Home';
import DatePicker from './pages/Date/DatePicker';
import './assets/sass/main.scss';

 const COMPONENT_NAME =  {
  HOME : "HOME",
  DATE : "DATE",
  DEV : "DEV"
}

const APP_NAME:string = process.env.REACT_APP_NAME?.trim() ?? '';

let Content:any = <></>;
let rootId = 'root';



switch (APP_NAME) {
  case COMPONENT_NAME.HOME:
    Content = <Home /> ;
    rootId = 'root-home'
    break;
  
  case COMPONENT_NAME.DATE:
    Content = <DatePicker />;
    rootId = 'root-date'
    break;

  default:
    break;
}



if ( APP_NAME == COMPONENT_NAME.DEV ){
  // render the root home if the root home exist
  let rootHomeHtml = document.getElementById('root-home');
  if ( rootHomeHtml ){
      const rootHome = ReactDOM.createRoot(
        rootHomeHtml as HTMLElement
      );
      console.log('rootHome ' , rootHome);
    
      rootHome.render(
        <React.StrictMode>
          <BrowserRouter>
              <Home />
            </BrowserRouter>
        </React.StrictMode>
      );
  }

// render the root home if the root home exist
let rootDateHtml = document.getElementById('root-date');
if ( rootDateHtml ){
  const rootDate = ReactDOM.createRoot(
    rootDateHtml as HTMLElement
  );
  rootDate.render(
    <React.StrictMode>
      <BrowserRouter>
          <DatePicker />
        </BrowserRouter>
    </React.StrictMode>
  );

}

}else{

  const root = ReactDOM.createRoot(
    document.getElementById(rootId) as HTMLElement
  );
  root.render(
    <React.StrictMode>
      <BrowserRouter>
          <App content={Content} />
        </BrowserRouter>
    </React.StrictMode>
  );

}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
