
import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import "./Timer.css";
import Thankyou from '../Thankyou';
import {Link} from 'react-router-dom'

const renderTime = ({ remainingTime }) => {
  if (remainingTime === 0) {
    return window.location.replace("http://localhost:3001/Arrived");
  }

  const minutes = parseInt(remainingTime / 60);
  const seconds = remainingTime % 60;

  return (
    <div className="container d-flex inline-block justify-content-center align-items-center"style={{height:"100vh"}}>
    <div className="timer">
      <div className="text">Remaining</div>
      {minutes ? (
        <div className="value">
          {`${minutes} minutes`}
          <br />
          {`${seconds} seconds`}
        </div>
      ) : (
        <div className="value">{`${seconds} seconds`}</div>
        )}
    </div>
        </div>
  );
};

function Timer() {
  return (
    <div className="App d-flex inline-block justify-content-center align-items-center"style={{height:"100vh"}}>
      <div className="timer-wrapper">
        <CountdownCircleTimer
          isPlaying
          duration={70}
          colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
          colorsTime={[10, 6, 3, 0]}
          onComplete={() => ({ shouldRepeat: true, delay: 1 })}
        >
          {renderTime}
        </CountdownCircleTimer>
      <Link to='/Arrived'>Skip</Link>
      </div>
    </div>
  );
}

export default Timer;