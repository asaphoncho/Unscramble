import React, {useContext} from 'react'
function Button(props){

return(
    <>
        <button onClick={()=> timer => timer + 10}>Click Me</button>
    </>
)
}

export default Button