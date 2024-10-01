import React, { useState, useEffect} from "react";
import plastergreen from './assets/plastergreen2.png'
import plasterpurple from './assets/plasterpurple.png'
import plasterorange from './assets/plasterorange.png'
import plasterpink from './assets/plasterpink.png'
function Timer({timer}) {

  var timerStyle = {
    width: `${(timer/60) * 100}%`,
    height: "3.625rem",
    backgroundImage: `url(${plastergreen})`,
    borderRadius: '1.5rem',
    zIndex: 0
  };
  if(timer <= 59 && timer > 30){
    timerStyle = {
      width: `${(timer/60) * 100}%`,
      height: "3.625rem",
      backgroundImage: `url(${plastergreen})`,
      borderTopLeftRadius: '1.5rem',
      borderBottomLeftRadius: '1.5rem',
      zIndex: 0
    }
  }
  else if(timer <= 30 && timer > 15){
    timerStyle = {
      width: `${(timer/60) * 100}%`,
      height: "3.625rem",
      backgroundImage: `url(${plasterorange})`,
      borderTopLeftRadius: '1.5rem',
      borderBottomLeftRadius: '1.5rem',
      zIndex: 0
    }
  }
  else if(timer <= 15 && timer > 0){
    timerStyle = {
      width: `${(timer/60) * 100}%`,
      height: "3.625rem",
      backgroundImage: `url(${plasterpink})`,
      borderTopLeftRadius: '1.5rem',
      borderBottomLeftRadius: '1.5rem',
      zIndex: 0
    }
  } ;
  


  return (
    <>
      <div className="timer-div2">
        <div className="timer-div">
          <div className="timer" style={timerStyle}></div>
        </div>
        <img src="../src/assets/plaster.png" alt="" />
      </div>
    </>
  );
}

export default Timer;
