import React, {useContext} from 'react'
function Button({handleAddTime, children, handleClass}){

function clicked(){
    handleAddTime()
}


return(
    <>
        <button onClick={clicked} className={handleClass}>{children}</button>
    </>
)
}

export default Button