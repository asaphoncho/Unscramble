import React, { useState, useEffect} from "react";

function Timer({timer}) {

  var timerStyle = {
    width: `${(timer/60) * 100}%`,
    height: "2rem",
    backgroundImage: "linear-gradient(to right, rgb(137, 241, 85), rgb(85, 241, 124))",
    borderRadius: '1.5rem',
  };
  if(timer <= 59 && timer > 30){
    timerStyle = {
      width: `${(timer/60) * 100}%`,
      height: "2rem",
      backgroundImage: "linear-gradient(to right, rgb(137, 241, 85), rgb(85, 241, 124))",
      borderTopLeftRadius: '1.5rem',
      borderBottomLeftRadius: '1.5rem',
    }
  }
  if(timer <= 30 && timer > 15){
    timerStyle = {
      width: `${(timer/60) * 100}%`,
      height: "2rem",
      backgroundImage: "linear-gradient(to right, rgb(225, 241, 85), rgb(214, 236, 16))",
      borderTopLeftRadius: '1.5rem',
      borderBottomLeftRadius: '1.5rem',
    }
  }
  else if(timer <= 15 && timer > 0){
    timerStyle = {
      width: `${(timer/60) * 100}%`,
      height: "2rem",
      backgroundImage: "linear-gradient(to right, rgb(241, 168, 85), rgb(241, 85, 98))",
      borderTopLeftRadius: '1.5rem',
      borderBottomLeftRadius: '1.5rem',
    }
  } ;
  


  return (
    <>
      <div className="timer-div">
        <div className="timer" style={timerStyle}></div>
      </div>
    </>
  );
}

export default Timer;
