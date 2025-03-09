import parkStore from "../store/parkStore";

const Reck = ({ top = 0, left = 0, title = "" }) => {
  const { from, to, setTo } = parkStore();

  const isFromSelected = from === title;
  const isToSelected = to === title;

  const handleClick = () => {
    if (to === null || to === title) {
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
        width: "473px",
        height: "104px",
        border: "3px solid black",
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

export default Reck;
