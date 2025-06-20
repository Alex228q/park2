import parkStore from "../store/parkStore";

const Pump = ({ top = 0, left = 0, title = "" }) => {
  const { activePump, setActivePump, from, to, lineAorB } = parkStore();
  const isActive = activePump.includes(title);
  let colorActivePump =
    "linear-gradient(90deg, green,green,green, #1e22e0,#1e22e0,#1e22e0)";
  if (title[0] === "Н") {
    colorActivePump =
      "linear-gradient(90deg, #1e22e0,#1e22e0,#1e22e0, green, green, green)";
  }

  const handleClick = () => {
    if (
      (from === "E-322" &&
        to === "E-325" &&
        lineAorB.includes("Б") &&
        title === "H-3") ||
      title === "H-2"
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
