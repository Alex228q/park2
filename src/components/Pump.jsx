import { SWAP_FROM_322_TO_B_LINE_PROBLEM } from "../App";
import parkStore from "../store/parkStore";
const SWAP_FROM_322_TO_GPN_B = [
  "E-327",
  "E-328",
  "E-329",
  "E-330",
  "E-331",
  "E-332",
  "E-333",
  "E-334",
];

const SWAP_115_NOT_INCLUDE = [
  "Н-1",
  "Н-2",
  "Н-4",
  "Н-5",
  "H-1",
  "H-2",
  "H-3",
  "H-4",
];
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
      SWAP_FROM_322_TO_GPN_B.includes(to) &&
      lineAorB === "Б" &&
      (title === "H-3" || title === "H-4")
    ) {
      return;
    }

    if (
      lineAorB.length === 1 &&
      SWAP_115_NOT_INCLUDE.includes(title) &&
      activePumpStation === "910-115"
    ) {
      return;
    }

    if (
      SWAP_FROM_322_TO_B_LINE_PROBLEM.includes(to) &&
      (title === "H-2" || title === "H-3") &&
      lineAorB.includes("Б")
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
