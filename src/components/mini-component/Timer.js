import React from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import "./Timer.css";


function NavigateArr(){
    const navigate = useNavigate();
}

const renderTime = ({ remainingTime }) => {

    if (remainingTime === 0) {
        
        return window.location.replace("http://localhost:3000/Arrived");
       
    }
    return (
      <div className="timer">
        <div className="text">Remaining</div>
        <div className="value">{remainingTime}</div>
        <div className="text">seconds</div>
      </div>
    );
  };


function Timer() {
  return (
    <div className="container d-flex inline-block justify-content-center align-items-center"style={{height:"100vh"}}>

    <div className='align-middle container'>
      <div className="timer-wrapper">
        <CountdownCircleTimer
          isPlaying
          duration={10}
          colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
          colorsTime={[10, 6, 3, 0]}
          onComplete={() => ({ shouldRepeat: true, delay: 1 })}
        >
          {renderTime}
        </CountdownCircleTimer>
      </div>
    </div>
          </div>
  )
}

export default Timer