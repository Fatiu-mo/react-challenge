import React, {useState} from 'react';
import './Main.css'
import {BiSun} from "react-icons/bi"
import {BsSnow2} from 'react-icons/bs'
import Clock from './Clock.js'
import clsx from "clsx"

export default function Main() {
  const [temp, setTemp] = useState("")
  const [tempC, setTempC] = useState()
  const [icon, setIcon] = useState()

  let classes = clsx(tempC >= 21 ? "red" : "blue", "weather-info")

  function handleConvertClick() {
    setTempC(((temp -32) * 0.56).toFixed(0))
    if(temp >= 70) {
      setIcon(<BiSun />)
    } else if(temp < 70) {
      setIcon(<BsSnow2 />)
    }
  }

  return <>
    <div className="card">

      <div className="static">
        <Clock />
      </div>

      <div className={classes}>
        <div className="degree"><p>{tempC}°C</p></div>
        {/* weather symbol goes here*/}
        <div className="weather-icon">
          {icon}
        </div>
      </div>

      <div className="input">       
        <input className="text-input" type="number" placeholder="Enter Farenheit value to convert to Celcius..." value={temp} onChange={e => {
          setTemp(e.target.value)
          }} />     
      </div>

      <div className="btn">
        <button disabled={temp === ""} onClick={handleConvertClick}>Convert</button>
      </div>
    </div>  
  </>
}
