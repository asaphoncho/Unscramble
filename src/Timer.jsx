import React, { useState, useEffect, createContext} from "react";
import Button from "./Button.jsx";

export  const timerContext = createContext()

function Timer() {
  const [timer, setTimer] = useState(60);

  const timerStyle = {
    width: `${(timer/60) * 100}%`,
    height: "2rem",
    backgroundImage: "linear-gradient(to right, #00f0d1, #a966ee)",
    borderRadius: '1.5rem',
    transition: 'ease-in-out 2.5s'

  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(t => {
        if (t == 0) {
          clearInterval(interval);
          return 0;
        }
        return t - 1;
      });
      
    }, 1000);
    return () => clearInterval(interval)
  }, [{ timer }]);


  return (
    <>
      <div className="timer-div">
        <div className="timer" style={timerStyle}></div>
      </div>
      <timerContext.Provider value={timer}>
                <Button timer = {timer}/>
            </timerContext.Provider>
    </>
  );
}

export default Timer;
