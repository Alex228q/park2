import React, { useState, useRef, useEffect } from "react";
import parkStore from "./store/parkStore";

import TopLevel from "./components/Top/TopLevel";
import TanksLevel from "./components/Middle/TanksLevel";
import InterparkCommunication from "./components/Middle/InterparkCommunication";

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
      <InterparkCommunication />
    </div>
  );
}

export default App;
