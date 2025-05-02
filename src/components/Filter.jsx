import parkStore from "../store/parkStore";

const Filter = ({ top = 0, left = 0, title = "" }) => {
  const { activeElements } = parkStore();

  const isActive = activeElements.includes(title);

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
        border: `2px solid ${isActive ? "green" : "gray"}`,
        borderRadius: "100%",
        fontWeight: "500",
        color: isActive ? "green" : "gray",
        fontFamily: "monospace",
        zIndex: 1000,
      }}
    >
      {title}
    </div>
  );
};

export default Filter;
