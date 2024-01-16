import React from "react";
import { useState, useEffect } from "react";

function Timer({ seconds }) {
  let [time, setTime] = useState(seconds);

  useEffect(() => {
    setInterval(() => {
      setTime((t) => (t > 0 ? t - 1 : (t = 0)));
    }, 1000);
  }, []);

  let m = Math.floor(time / 60);
  let s = time - m * 60;

  return (
    <div>
      {m}:{s}
    </div>
  );
}

export default Timer;
