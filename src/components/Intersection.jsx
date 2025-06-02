import parkStore from "../store/parkStore";

const Intersection = ({ top = 0, left = 0, title = "", isBig = false }) => {
  const { activeElements, activeElementsAfterPump, activeElementsGpn } =
    parkStore();
  let color = activeElements.includes(title) ? "green" : "#E1E7EC";
  if (activeElementsAfterPump.includes(title)) {
    color = "#1e22e0";
  }
  let z = activeElements.includes(title) ? 30 : 1;

  if (activeElementsGpn.includes(title)) {
    color = "#BB34E0";
    z = 30;
  }

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

  return <div style={halfCircleStyle}>{/* {title} */}</div>;
};

export default Intersection;
//"#E1E7EC"
