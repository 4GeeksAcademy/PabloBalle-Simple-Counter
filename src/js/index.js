import ReactDOM from "react-dom";
import React from 'react';


import "../styles/index.css";
import PropTypes from 'prop-types';

function Seconds(props){
  return(
    <div>
      <div className="bigCounter">
        <div className="clockIcon">
          <i className="fas fa-clock"></i>
        </div>
          <div className="cardIcon" id="fourthDigit">{props.fourthDigit}</div>
          <div className="cardIcon" id="thirdDigit">{props.thirdDigit}</div>
          <div className="cardIcon" id="secondDigit">{props.secondDigit}</div>
          <div className="cardIcon" id="firstDigit">{props.firstDigit}</div>
      </div>
    </div>
  )
}

Seconds.propTypes = {
  firstDigit: PropTypes.number,
  secondDigit: PropTypes.number,
  thirdDigit: PropTypes.number,
  fourthDigit: PropTypes.number,
};

let counter =0;
setInterval(function(){
  counter++;
  const four =  Math.floor(counter%10000/1000)
  const three =  Math.floor(counter%1000/100)
  const two =  Math.floor(counter%100/10)
  const one =  Math.floor(counter%10)
  ReactDOM.render(<Seconds firstDigit={one} secondDigit={two} thirdDigit={three}  fourthDigit={four} />,document.querySelector("#app"))
},1000)


