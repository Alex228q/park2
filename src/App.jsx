import React, { useState, useRef, useEffect } from "react";
import parkStore from "./store/parkStore";
import Tank from "./components/Tank";
import Valve from "./components/Valve";
import Pipe from "./components/Pipe";
import Pump from "./components/Pump";
import Reck from "./components/Reck";

import TopLevel from "./components/Top/TopLevel";
import TanksLevel from "./components/Middle/TanksLevel";

function App() {
  const { from, to, activeElements, addActiveElement } = parkStore();

  // useEffect(() => {
  //   if (from === "E-323" && to === "111") {
  //     addActiveElement(["45"]);
  //   }
  // }, [from, to, addActiveElement]);

  return (
    <div
      style={{
        position: "relative",
      }}
    >
      <p>From {from}</p>
      <p>To {to}</p>
      <p>Active elements: {activeElements}</p>

      <TopLevel />
      <TanksLevel />
    </div>
  );
}

export default App;
