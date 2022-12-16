import React, { useState } from 'react'

function Usestatehook() {
  const [name,setName]=useState("tayyab");
    const tayyab=(event)=>{
          const newval=event.target.value;
           setName(newval);  

    }
  return (
    <div>
      <h1>{name}</h1>
      <input type="text" placeholder='enter a name' value={name} onChange={tayyab} />
      
    </div>
  )
}

export default Usestatehook