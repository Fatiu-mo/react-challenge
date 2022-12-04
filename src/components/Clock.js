import React, {useState, useEffect} from 'react';
import './Main.css'

export default function Clock() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const intervalId = setInterval(() => {
        setTime(new Date())
    },1000)  
    return () => {
        clearInterval(intervalId)
    }
}, [])

  return <>
   <p className="day">{new Date().toLocaleString('default', {weekday: 'long'})}</p>
   <div><p className="time">{time.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'})}</p></div>
   </>
}