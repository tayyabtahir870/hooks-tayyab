import React, { useEffect, useState } from 'react'


function Useeffecthook() {
    const[counter,setState]=useState(0);
    useEffect(()=>{
        console.warn("useeffect")
    })
  return (
    <div>
        <h1>counter value is {counter}</h1>
        <button className='btn' onClick={()=>setState(counter+1)}> update counter</button>
    </div>
  )
}

export default Useeffecthook