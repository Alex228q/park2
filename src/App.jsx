import { useEffect } from "react";
import parkStore from "./store/parkStore";

import TopLevel from "./components/Top/TopLevel";
import TanksLevel from "./components/Middle/TanksLevel";
import InterparkCommunication from "./components/Middle/InterparkCommunication";
import Station91035 from "./components/Bottom/Station91035";

function App() {
  const { from, to, activeElements, addActiveElement, activePump } =
    parkStore();

  useEffect(() => {
    if (from === null || to === null || activePump.length === 0) {
      addActiveElement([]);
    }
    if (from === "E-322" && activePump.includes("H-1")) {
      addActiveElement([
        "p96",
        "322Б",
        "p97",
        "p97/2",
        "ЗМ-8",
        "p98",
        "v140",
        "v140/2",
        "i50",
        "p120",
        "p120/2",
        "v170",
        "p119",
        "v204",
        "i76",
        "p96",
        "v205",
        "p146",
        "v206",
        "p154",
        "74",
        "p155",
        "v237",
        "i91",
        "v238",
        "i100",
        "v259",
        "i101",
        "v260",
        "v239",
        "i92",
        "v240",
        "3",
        "v241",
        "v242",
        "i93",
        "i94",
        "v243",
        "p228",
      ]);
    }
  }, [from, to, activePump]);

  return (
    <div
      style={{
        position: "relative",
      }}
    >
      <p>From {from}</p>
      <p>To {to}</p>
      <p>Active elements: {activeElements}</p>
      <p>Active pumps: {activePump}</p>

      <TopLevel />
      <TanksLevel />
      <InterparkCommunication />
      <Station91035 />
    </div>
  );
}

export default App;
