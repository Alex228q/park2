import parkStore from "../store/parkStore";

const Intersection = ({ top = 0, left = 0, title = "", isBig = false }) => {
  const { activeElements } = parkStore();
  let color = activeElements.includes(title) ? "green" : "gray";
  let z = activeElements.includes(title) ? 30 : 1;
  const halfCircleStyle = {
    position: "absolute",
    top: top,
    left: left,
    width: isBig ? "35px" : "23px",
    height: "15px",
    borderTopLeftRadius: "110px",
    borderTopRightRadius: "110px",
    borderWidth: "7px",
    borderStyle: "solid",
    borderTopColor: color,
    borderRightColor: color,
    borderBottomColor: "transparent",
    borderLeftColor: color,
    borderBottomWidth: "0",
    borderBottomStyle: "solid",
    rotate: "90deg",
    zIndex: z,
  };

  return <div style={halfCircleStyle}></div>;
};

export default Intersection;
