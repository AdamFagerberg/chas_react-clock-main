import { useEffect, useState } from "react";
import React from "react";

function ClockComponent({ heading, zone }) {
  let t = new Date().toLocaleTimeString("sv", { timeZone: zone });

  let [time, setTime] = useState(t);

  useEffect(() => {
    setInterval(() => {
      t = new Date().toLocaleTimeString("sv", { timeZone: zone });
      setTime(t);
    }, 1000);
  }, []);

  return (
    <>
      <div>
        <h1>{heading}</h1>
        {time}
      </div>
    </>
  );
}

export default ClockComponent;
