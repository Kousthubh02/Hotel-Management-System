import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { Link } from "react-router-dom";

const renderTime = ({ remainingTime }) => {
  if (remainingTime === 0) {
    return window.location.replace("http://localhost:3001/Arrived");
  }

  const minutes = Math.floor(remainingTime / 60);
  const seconds = remainingTime % 60;

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="text-lg text-gray-700 font-semibold mb-2">Remaining</div>
      {minutes ? (
        <div className="text-center text-xl font-bold text-blue-600">
          {`${minutes} minute${minutes !== 1 ? "s" : ""}`}
          <br />
          {`${seconds} second${seconds !== 1 ? "s" : ""}`}
        </div>
      ) : (
        <div className="text-xl font-bold text-red-600">{`${seconds} second${seconds !== 1 ? "s" : ""}`}</div>
      )}
    </div>
  );
};

function Timer() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      <div className="flex flex-col items-center gap-6">
        <CountdownCircleTimer
          isPlaying
          duration={70}
          colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
          colorsTime={[10, 6, 3, 0]}
          onComplete={() => ({ shouldRepeat: true, delay: 1 })}
        >
          {renderTime}
        </CountdownCircleTimer>

        <Link
          to="/Arrived"
          className="text-blue-600 hover:underline text-sm font-medium"
        >
          Skip
        </Link>
      </div>
    </div>
  );
}

export default Timer;
