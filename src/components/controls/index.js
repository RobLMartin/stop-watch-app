import React from "react";

const Controls = ({ isOn, time, onStart, onStop, onReset }) => {
  return (
    <div>
      {!isOn && time === 0 && <button onClick={onStart}>Start</button>}
      {isOn && <button onClick={onStop}>Stop</button>}
      {!isOn && time > 0 && (
        <>
          <button onClick={onStart}>Resume</button>
          <button onClick={onReset}>Reset</button>
        </>
      )}
    </div>
  );
};

export default Controls;
