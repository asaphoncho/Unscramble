import React, {createContext, useState, useEffect} from 'react'

export const TimerContext = createContext()

export const TimerProvider = ({children}) =>{
    const [timer, setTimer] = useState(60)
    const reduceTimer = () => {
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
    }

    return(
        <TimerContext.Provider value={{timer, reduceTimer}}>{children}</TimerContext.Provider>
    )
    
}