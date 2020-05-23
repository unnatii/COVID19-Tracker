import React from "react";

import Popup from "reactjs-popup";

//import Content from "./content.js";
import "./collapse.module.css";

function Collapse() {
  return (
    <div className="App">
      <h1>Create React Modal with 22 line of code </h1>
      <Popup modal trigger={<button>Click Me</button>}>
          <div style={{background:'red',width:'200x',height:'500px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, a nostrum.
      Dolorem, repellat quidem ut, minima sint vel eveniet quibusdam voluptates
      delectus doloremque, explicabo tempore dicta adipisci fugit amet
      dignissimos? </div>
           </Popup>
    </div>
  );
}

export default Collapse;