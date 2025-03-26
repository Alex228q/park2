import parkStore from "../store/parkStore";
const Valve = ({
  top = 0,
  left = 0,
  isUp = false,
  title = "",
  isLeft = false,
  isRotate = false,
}) => {
  const { activeElements } = parkStore();
  const color = activeElements.includes(title) ? "green" : "#B62222";
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
            src="./valve.png"
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
          top: isLeft ? top - 5 : top - 6,
          left: isLeft ? left - 34 : left + 16,
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
          justifyContent: isLeft ? "center" : null,
          rotate: isRotate ? "270deg" : "0deg",

          position: "absolute",
          top: isLeft ? top - 8 : top - 7,
          left: isLeft ? left - 33 : left + 16,
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
