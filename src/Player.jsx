import React, {useState} from 'react'

function Player({name, onChange}){
    const [isEditing, setIsEditing] = useState(false)
    const handleEdit = () => {
        setIsEditing((editing)=> !editing)
        console.log(name)
    }
    var playerDiv = <div>
        <span className='player-name'>{name}</span>
    </div>
    if(isEditing){
        playerDiv = <input type='text' onChange={onChange} placeholder='Enter name here'/>
    }
    return(
        <>
            <div>
                {playerDiv}
                <button onClick={handleEdit}>Edit Name</button>
            </div>
        </>
    )
}

export default Player