import parkStore from "../store/parkStore";

const Pump = ({ top = 0, left = 0, title = "" }) => {
  const { activePump, setActivePump } = parkStore();
  const isActive = activePump.includes(title);

  const handleClick = () => {
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
        background: isActive
          ? "linear-gradient(90deg, green,green,green, orange,orange,orange)"
          : "white",
        color: isActive ? "white" : "black", // Цвет текста

        zIndex: 1000,
      }}
    >
      {title}
    </div>
  );
};

export default Pump;
