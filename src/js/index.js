import ReactDOM from "react-dom";
import React from 'react';
import Seconds from "./component/Seconds";

import "../styles/index.css";

function SecondCounter() {

  return (
    <div className="bigCounter">
      <div className="clockIcon">
        <i className="fas fa-clock"></i>
      </div>
      <Seconds/>
    </div>
  );

}

ReactDOM.render(<SecondCounter />, document.querySelector("#app"));
