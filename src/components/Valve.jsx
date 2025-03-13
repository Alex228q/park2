import parkStore from "../store/parkStore";
const Valve = ({
  top = 0,
  left = 0,
  isUp = false,
  title = "",
  isLeft = false,
}) => {
  const { activeElements } = parkStore();
  const color = activeElements.includes(title) ? "green" : "#B62222";

  return isUp ? (
    <div>
      <p
        style={{
          width: "42px",
          display: "flex",
          position: "absolute",
          top: top - 6,
          left: left + 18,
          fontFamily: "monospace",
          fontSize: "14px",
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
          src="./valve.png"
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

          position: "absolute",
          top: isLeft ? top - 8 : top - 8,
          left: isLeft ? left - 33 : left + 17,
          fontFamily: "monospace",
          fontSize: "14px",
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
          src="./valve.png"
          alt="valve"
          width={19}
          height={19}
        />
      </div>
    </div>
  );
};

export default Valve;
