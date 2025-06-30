import parkStore from "../store/parkStore";
const BLOCK_PUMP_FROM_322_TO_324_LINE_B = ["H-2", "H-3"];
const BLOCK_PUMPS_IN_115_STATION = ["Н-1", "Н-2", "Н-4", "Н-5"];
const Pump = ({ top = 0, left = 0, title = "" }) => {
  const { activePump, setActivePump, from, to, lineAorB, activePumpStation } =
    parkStore();
  const isActive = activePump.includes(title);
  let colorActivePump =
    "linear-gradient(90deg, green,green,green, #1e22e0,#1e22e0,#1e22e0)";
  if (title[0] === "Н") {
    colorActivePump =
      "linear-gradient(90deg, #1e22e0,#1e22e0,#1e22e0, green, green, green)";
  }

  const handleClick = () => {
    if (
      from === "E-322" &&
      to === "E-324" &&
      lineAorB === "Б" &&
      activePumpStation === "910-35" &&
      BLOCK_PUMP_FROM_322_TO_324_LINE_B.includes(title)
    ) {
      return;
    }

    if (
      from === "E-322" &&
      to === "E-325" &&
      lineAorB === "Б" &&
      activePumpStation === "910-35" &&
      BLOCK_PUMP_FROM_322_TO_324_LINE_B.includes(title)
    ) {
      return;
    }

    if (
      from === "E-322" &&
      to === "E-326" &&
      lineAorB === "Б" &&
      activePumpStation === "910-35" &&
      BLOCK_PUMP_FROM_322_TO_324_LINE_B.includes(title)
    ) {
      return;
    }

    if (
      activePumpStation === "910-115" &&
      BLOCK_PUMPS_IN_115_STATION.includes(title)
    ) {
      return;
    }

    if (isActive) {
      setActivePump(activePump.filter((pump) => pump !== title));
    } else {
      setActivePump([...activePump, title]);
    }
  };

  return (
    <div
      onClick={handleClick}
      style={{
        position: "absolute",
        top,
        left,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "46px",
        height: "46px",
        border: "3px solid black",
        borderRadius: "100%",
        fontWeight: "bold",
        fontSize: "18px",
        fontFamily: "monospace",
        backgroundColor: isActive ? "white" : "white", // Фон для неактивного состояния
        background: isActive ? colorActivePump : "white",
        color: isActive ? "white" : "black", // Цвет текста

        zIndex: 1000,
      }}
    >
      {title}
    </div>
  );
};

export default Pump;
