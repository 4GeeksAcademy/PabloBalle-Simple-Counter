
import React from 'react';

function Seconds(){
    
    let count = 0;
    
        const incrementCount = () => {
          count++;
          updateCountOnPage();
       // Actualizar el valor de count en la página
        };
      
        setInterval(incrementCount, 1000);
      
        const updateCountOnPage = () => {
          const countFirstDigit = document.querySelector("#firstDigit");
          const countSecondDigit = document.querySelector("#secondDigit");
          const countThirdDigit = document.querySelector("#thirdDigit");
          const countFourthDigit = document.querySelector("#fourthDigit");

          if (countFirstDigit) {
            countFirstDigit.textContent = count % 10;
          }
          if (countSecondDigit) {
            countSecondDigit.textContent = Math.floor(count % 100 /10);
          }
          if (countThirdDigit) {
            countThirdDigit.textContent = Math.floor(count % 1000 /100);
          }

          if (countFourthDigit) {
            countFourthDigit.textContent = Math.floor(count % 10000 /1000);
          }
        };

  return(
    <div>
        <div className="cardIcon" id="fourthDigit">{count}</div>
        <div className="cardIcon" id="thirdDigit">{count}</div>
        <div className="cardIcon" id="secondDigit">{count}</div>
        <div className="cardIcon" id="firstDigit">{count}</div>
    </div>
  )
}

export default Seconds;