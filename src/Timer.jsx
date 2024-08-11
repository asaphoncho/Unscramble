import React, { useState, useEffect} from "react";

function Timer({timer}) {

  const timerStyle = {
    width: `${(timer/60) * 100}%`,
    height: "2rem",
    backgroundImage: "linear-gradient(to right, #00f0d1, #a966ee)",
    borderRadius: '1.5rem',
  };



  return (
    <>
      <div className="timer-div">
        <div className="timer" style={timerStyle}></div>
      </div>
    </>
  );
}

export default Timer;
