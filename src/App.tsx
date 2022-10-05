import * as React from 'react'


type AppProps ={
  content:any
}
function App({
  content
}:AppProps) {



  return (
    <div className="App">
           <h1>Welcome to  - {process.env.REACT_APP_NAME} component</h1>
           {content}
    </div>
  );
}

export default App;
