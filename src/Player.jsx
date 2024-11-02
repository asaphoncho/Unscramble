import React, {useState} from 'react'

function Player({name, onChange}){
    const [isEditing, setIsEditing] = useState(false)
    const handleEdit = () => {
        setIsEditing((editing)=> !editing)
        console.log(name)
    }
    var playerDiv = <div className='player-and-image'>
                        <img src="./src/assets/playerpicture.png" alt="" />
                        <span className='player-name'>{name}</span>
                    </div>
    if(isEditing){
        playerDiv =  <div className='player-and-image'>
                        <img src="./src/assets/playerpicture.png" alt="" />
                        <input className='name-input' type='text' onChange={onChange} placeholder={name}/>
                    </div>
    }
    return(
        <>
            <div className='player-div'>
                {playerDiv}
                <button style={{backgroundColor: '#ffebcd00', border: 'none'}} onClick={handleEdit}><i className= {isEditing? 'fa-regular fa-circle-check':'fa-solid fa-pencil'} style={isEditing?{fontSize: '1.5rem', cursor: 'pointer'}:{fontSize: '1rem', cursor: 'pointer', fontColor: '3C3B3B'}}></i></button>
            </div>
        </>
    )
}

export default Player