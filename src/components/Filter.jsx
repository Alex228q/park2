import parkStore from "../store/parkStore";

const Filter = ({ top = 0, left = 0, title = "" }) => {
  const { activeElements, activeElementsAfterPump } = parkStore();

  let color = "gray";
  const isActive = activeElements.includes(title);
  if (isActive) {
    color = "green";
  }
  if (activeElementsAfterPump.includes(title)) {
    color = "blue";
  }
  return (
    <div
      style={{
        position: "absolute",
        top,
        left,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "26px",
        height: "26px",
        border: `2px solid ${color}`,
        borderRadius: "100%",
        fontWeight: "500",
        color: isActive ? "green" : "#474747",
        fontFamily: "monospace",
        zIndex: 1000,
      }}
    >
      {title}
    </div>
  );
};

export default Filter;
