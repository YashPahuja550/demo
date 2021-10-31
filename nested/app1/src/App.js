import React, { useState } from "react";

const RemoteButtonContainer = React.lazy(() => import("app2/ButtonContainer"));
const RemoteButton = React.lazy(() => import("app3/Button"));

const App = () => { 
  const [clicked,setClicked]=useState('');
  // const [buttonClick,setButtonClick]=useState('');


  return(
  <div>
    <h1>Nested</h1>
    <h2>App 1</h2>
    <p>app 1 body</p>
    <button onClick={()=>setClicked('yes')}>App2</button>
    { clicked==='yes' &&
    <React.Suspense fallback="Loading Button Container">
      <RemoteButtonContainer />
    </React.Suspense>
    
}
<button onClick={()=>setClicked('yess')}>App3</button>
    { clicked==='yess' &&
    <React.Suspense fallback="Loading Button">
      <RemoteButton />
    </React.Suspense>}
  </div>
);
  }
export default App;
