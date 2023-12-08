import React, { useEffect, useState } from 'react'
import './newStyle.css'
function TimerCounter() {
    const [state,setState]=useState(0)
    const [timer,setTimer]=useState(10)
    const [stop,setStop]=useState(false)
    useEffect(()=>{
        setInterval(()=>setTimer((time)=>time-1),1000)
        if(timer===0){
            clearInterval()
            setStop(true)
        }
    },[])
    function time(){
        setState(state+1)
    }
  return (
    <div >
        <h2>TimerCounter</h2>
        <p>counter:{state}</p>
        <button onClick={time} >+</button>
        <p>Timer:{timer}</p>
    </div>
  )
}

export default TimerCounter