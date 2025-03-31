import { useEffect, useRef } from "react";
import parkStore from "./store/parkStore";

import TopLevel from "./components/Top/TopLevel";
import TanksLevel from "./components/Middle/TanksLevel";
import InterparkCommunication from "./components/Middle/InterparkCommunication";
import Station91035 from "./components/Bottom/Station91035";

function App() {
  const isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  const { from, to, activeElements, addActiveElement, activePump } =
    parkStore();

  const containerRef = useRef(null);
  const isDragging = useRef(false);
  const startPos = useRef({ x: 0, y: 0 });
  const scrollLeft = useRef(0);
  const scrollTop = useRef(0);

  useEffect(() => {
    if (from === "E-322") {
      let newElements = [];
      if (activePump.includes("H-1")) {
        newElements = [
          ...newElements,
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
        ];
      }

      if (activePump.includes("H-2")) {
        newElements = [
          ...newElements,
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
          "p147",
          "73",
          "p148",
          "p149",
          "27",
          "p150",
          "v360",
          "i161",
          "v361",
          "i162",
          "v362",
          "i163",
          "v363",
          "i164",
          "v364",
          "i165",
          "v365",
          "p183",
          "19",
          "p182",
          "v256",
          "38",
          "v257",
          "i98",
          "i99",
          "v258",
          "p229",
        ];
      }

      const uniqueElements = [...new Set(newElements)];
      addActiveElement(uniqueElements);
    }
  }, [from, to, activePump, addActiveElement]);

  // Обработчики для drag-scroll
  const handleMouseDown = (e) => {
    if (e.button !== 0) return; // Проверяем, что нажата левая кнопка мыши

    isDragging.current = true;
    startPos.current = {
      x: e.pageX - containerRef.current.offsetLeft,
      y: e.pageY - containerRef.current.offsetTop,
    };
    scrollLeft.current = containerRef.current.scrollLeft;
    scrollTop.current = containerRef.current.scrollTop;

    // Изменяем курсор
    containerRef.current.style.cursor = "grabbing";
    containerRef.current.style.userSelect = "none";
  };

  const handleMouseLeave = () => {
    isDragging.current = false;
    resetCursor();
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    resetCursor();
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;

    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const y = e.pageY - containerRef.current.offsetTop;
    const walkX = (x - startPos.current.x) * 1.5; // Умножаем на 2 для более быстрого скролла
    const walkY = (y - startPos.current.y) * 1.5;

    containerRef.current.scrollLeft = scrollLeft.current - walkX;
    containerRef.current.scrollTop = scrollTop.current - walkY;
  };

  const resetCursor = () => {
    if (containerRef.current) {
      containerRef.current.style.cursor = "grab";
      containerRef.current.style.removeProperty("user-select");
    }
  };

  if (!isMobile) {
    return (
      <div
        ref={containerRef}
        style={{
          position: "relative",
          overflow: "auto",
          width: "100vw",
          height: "100vh",
          cursor: "grab",
        }}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        <p>From {from}</p>
        <p>To {to}</p>
        <p>Active elements: {activeElements.join(", ")}</p>
        <p>Active pumps: {activePump.join(", ")}</p>

        <TopLevel />
        <TanksLevel />
        <InterparkCommunication />
        <Station91035 />
      </div>
    );
  }

  return (
    <>
      <p>From {from}</p>
      <p>To {to}</p>
      <p>Active elements: {activeElements.join(", ")}</p>
      <p>Active pumps: {activePump.join(", ")}</p>

      <TopLevel />
      <TanksLevel />
      <InterparkCommunication />
      <Station91035 />
    </>
  );
}

export default App;
