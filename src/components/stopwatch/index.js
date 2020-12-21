import React from "react";

const Stopwatch = ({ time }) => {
  let centisec = ("0" + (Math.floor(time / 10) % 100)).slice(-2);
  let sec = ("0" + (Math.floor(time / 1000) % 60)).slice(-2);
  let min = ("0" + (Math.floor(time / 60000) % 60)).slice(-2);
  let hours = ("0" + Math.floor(time / 3600000)).slice(-2);

  return (
    <div className="stopwatch">
      <div className="display">
        {hours} : {min} : {sec} : {centisec}
      </div>
    </div>
  );
};

export default Stopwatch;
