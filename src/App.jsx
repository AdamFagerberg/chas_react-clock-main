import { useEffect, useState } from "react";
import ClockComponent from "./ClockComponent";
import Timer from "./Timer";
import React from "react";

function App() {
  const title = "Sweden";
  let t = new Date().toLocaleTimeString("sv", { timeZone: "Europe/Stockholm" });

  let [time, setTime] = useState(t);

  useEffect(() => {
    setInterval(() => {
      t = new Date().toLocaleTimeString("sv", { timeZone: "Europe/Stockholm" });
      setTime(t);
    }, 1000);
  }, []);

  return (
    <>
      <div>
        <h1>{title}</h1>
        {time}
      </div>
      <div>
        <ClockComponent
          heading="New York"
          zone="America/New_York"
        ></ClockComponent>
      </div>
      <div>
        <h2>Timers</h2>
        <Timer seconds="10"></Timer>
        <Timer seconds="599"></Timer>
      </div>
    </>
  );
}

export default App;
