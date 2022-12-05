import React from "react"
import "./Main.css"
import Clock from './Clock.js'
import clsx from "clsx"

export default function Weather() {
  return <>
    <div className="card">

      <div className="static">
        <Clock />
      </div>

      <div className="city">
        <p>Ilorin</p>
      </div>

      <div className={}>
        <div className="degree"><p>{}°C</p></div>
        {/* weather symbol goes here*/}
        <div className="weather-icon">
          {}
        </div>
      </div>


    </div>  
  </>
}