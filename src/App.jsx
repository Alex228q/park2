import React, { useState, useRef, useEffect } from "react";
import parkStore from "./store/parkStore";
import Tank from "./components/Tank";
import Valve from "./components/Valve";
import Pipe from "./components/Pipe";
import Pump from "./components/Pump";
import Reck from "./components/Reck";

import IntersectionPipe from "./components/IntersectionPipe";
import Top from "./components/Top/Top";

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

      <Top />
    </div>
  );
}

export default App;
