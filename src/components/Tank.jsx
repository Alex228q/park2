import parkStore from "../store/parkStore";

const Tank = ({ top = 0, left = 0, title = "" }) => {
  const { from, to, setFrom, setTo } = parkStore();

  const isFromSelected = from === title;
  const isToSelected = to === title;

  const handleClick = () => {
    if (from === null) {
      setFrom(title);
    } else if (from === title) {
      setFrom(title);
    } else if (to === null || to === title) {
      setTo(title);
    } else {
      setTo(title);
    }
  };

  let color = isFromSelected ? "green" : "white";
  if (isToSelected) {
    color = "orange";
  }

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
        width: "150px",
        height: "150px",
        border: "3px solid black",
        borderRadius: "100%",
        fontWeight: "bold",
        fontSize: "36px",
        fontFamily: "monospace",
        backgroundColor: color,
        zIndex: 1000,
      }}
    >
      {title}
    </div>
  );
};

export default Tank;
