import React, { useState } from "react";

const RemoteButton = React.lazy(() => import("app3/Button"));

const style = {
  padding: 12,
  backgroundColor: "#cccccc",
};

const ButtonContainer = () => {
const [buttonClick,setButtonClick]=useState('');
  return(
  <div style={style}>
    App 2 Container
    <br />
    <br />
    {/* <button onClick={()=>setButtonClick('yess')}>App3</button>
    { buttonClick==='yess' &&
    <React.Suspense fallback="Loading Button">
      <RemoteButton />
    </React.Suspense>} */}
  </div>
);
  }

export default ButtonContainer;
