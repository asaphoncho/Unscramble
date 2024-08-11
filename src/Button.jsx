import React, {useContext} from 'react'
function Button({handleAddTime, children}){

function clicked(){
    handleAddTime()
}


return(
    <>
        <button onClick={clicked} className='play-button'>{children}</button>
    </>
)
}

export default Button