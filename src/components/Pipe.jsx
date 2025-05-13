import parkStore from "../store/parkStore";

const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const Pipe = ({
  length,
  isHorizontal = false,
  thickness = 7,
  left = 0,
  top = 0,
  title = "",
}) => {
  const { activeElements, activeElementsAfterPump } = parkStore();
  let color = activeElements.includes(title) ? "green" : getRandomColor();
  let z =
    activeElements.includes(title) || activeElementsAfterPump.includes(title)
      ? 30
      : 1;

  if (activeElementsAfterPump.includes(title)) {
    color = "#1e22e0";
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "9px",
        fontWeight: "bold",
        width: isHorizontal ? `${length}px` : `${thickness}px`,
        height: isHorizontal ? `${thickness}px` : `${length}px`,
        backgroundColor: color,
        position: "absolute",
        left,
        top,
        zIndex: z,
        color: "black",
      }}
    >
      {title}
    </div>
  );
};

export default Pipe;
//#E1E7EC
