import React from 'react'
 
const ButtonComp = ({Start ,name}) => {
  return (
     <>
       <div className='Main'>
        <button onClick={()=>{
            Start()
        }} className = "btn" >{name}</button>
      </div>
     </>
  )
}

export default ButtonComp
