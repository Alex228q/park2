import parkStore from "../store/parkStore";

const Intersection = ({
  top = 0,
  left = 0,
  title = "",
  isBig = false,
  width = 23,
}) => {
  const {
    activeElements,
    activeElementsAfterPump,
    activeElementsGpn,
    activeElementsPst,
  } = parkStore();
  let color = activeElements.includes(title) ? "green" : "#E1E7EC";
  let z = activeElements.includes(title) ? 50 : 1;
  if (activeElementsAfterPump.includes(title)) {
    color = "#1e22e0";
    z = 30;
  }

  if (activeElementsGpn.includes(title)) {
    color = "#7D0F9B";
    z = 30;
  }

  if (activeElementsPst.includes(title)) {
    color = "#6F4B07";
    z = 30;
  }

  const halfCircleStyle = {
    position: "absolute",
    top: top,
    left: left,
    width: isBig ? "35px" : width,
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
