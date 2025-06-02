import parkStore from "../store/parkStore";
import valveImage from "../assets/images/valve.png";
const Valve = ({
  textTop = 0,
  textLeft = 0,
  top = 0,
  left = 0,
  isUp = false,
  title = "",
  isLeft = false,
  isRotate = false,
}) => {
  const { activeElements, activeElementsAfterPump, activeElementsGpn } =
    parkStore();
  let color = activeElements.includes(title) ? "green" : "#474747";
  if (activeElementsAfterPump.includes(title)) {
    color = "#1e22e0";
  }

  if (activeElementsGpn.includes(title)) {
    color = "#BB34E0";
  }

  if (isRotate) {
    return (
      <div>
        <p
          style={{
            width: "42px",
            display: "flex",
            rotate: "270deg",
            position: "absolute",
            top: top - 22,
            left: left - 3,
            fontSize: "12px",
            fontWeight: "bold",
            color,
          }}
        >
          {title}
        </p>
        <div
          style={{
            position: "absolute",
            top,
            left,
            overflow: "hidden",
            rotate: "90deg",
          }}
        >
          <img
            style={{
              filter: `drop-shadow(0px 1000px 0 ${color})`,
              transform: "translateY(-1000px)",
            }}
            src={valveImage}
            alt="valve"
            width={19}
            height={19}
          />
        </div>
      </div>
    );
  }

  return isUp ? (
    <div>
      <p
        style={{
          width: "42px",
          display: "flex",
          justifyContent: title.length < 4 && isLeft ? "center" : "",
          position: "absolute",
          top: textTop ? textTop : isLeft ? top - 5 : top - 6,
          left: textLeft ? textLeft : isLeft ? left - 34 : left + 16,
          fontSize: "12px",
          fontWeight: "bold",
          color,
        }}
      >
        {title}
      </p>
      <div
        style={{
          position: "absolute",
          top,
          left,
          overflow: "hidden",
        }}
      >
        <img
          style={{
            filter: `drop-shadow(0px 1000px 0 ${color})`,
            transform: "translateY(-1000px)",
          }}
          src={valveImage}
          alt="valve"
          width={19}
          height={19}
        />
      </div>
    </div>
  ) : (
    <div>
      <p
        style={{
          width: "42px",
          display: "flex",
          justifyContent: isLeft ? "center" : null,
          rotate: isRotate ? "270deg" : "0deg",
          position: "absolute",
          top: isLeft ? top - 8 : top - 7,
          left: isLeft ? left - 34 : left + 14,
          fontSize: "12px",
          fontWeight: "bold",
          color,
        }}
      >
        {title}
      </p>
      <div
        style={{
          position: "absolute",
          top,
          left,
          overflow: "hidden",
          rotate: "90deg",
        }}
      >
        <img
          style={{
            filter: `drop-shadow(0px 1000px 0 ${color})`,
            transform: "translateY(-1000px)",
          }}
          src={valveImage}
          alt="valve"
          width={19}
          height={19}
        />
      </div>
    </div>
  );
};

export default Valve;
