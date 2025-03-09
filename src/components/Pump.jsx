const Pump = ({ top = 0, left = 0, title = "" }) => {
  let color = "white";
  return (
    <div
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
        backgroundColor: color,
        zIndex: 1000,
      }}
    >
      {title}
    </div>
  );
};

export default Pump;
