import { useState, useEffect, useRef } from "react";
import parkStore from "../store/parkStore";

const Tank = ({ top = 0, left = 0, title = "" }) => {
  const { from, to, setFrom, setTo, setLine, setActivePumpStation } =
    parkStore();
  const [showFromPopup, setShowFromPopup] = useState(false);
  const [showToPopup, setShowToPopup] = useState(false);
  const [showSecondPopup, setShowSecondPopup] = useState(false);

  const popupRef = useRef(null);
  const toTankPump = [
    "E-322",
    "E-323",
    "E-324",
    "E-325",
    "E-326",
    "E-327",
    "E-328",
    "E-329",
    "E-330",
    "E-331",
    "E-332",
    "E-333",
    "E-334",
  ];

  const isFromSelected = from === title;
  const isToSelected = to === title;
  const shouldShowToPopup = isToSelected && toTankPump.includes(title);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        setShowFromPopup(false);
        setShowToPopup(false);
        setShowSecondPopup(false);
      }
    };

    if (showFromPopup || showToPopup || showSecondPopup) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showFromPopup, showToPopup, showSecondPopup]);

  const handleTankClick = () => {
    if (from === null) {
      setFrom(title);
      setShowFromPopup(true);
    } else if (from === title) {
      setFrom(null);
      setShowFromPopup(false);
    } else if (to === null || to === title) {
      setTo(title);
      if (toTankPump.includes(title)) {
        setShowToPopup(true);
      }
    } else {
      setTo(title);
      if (toTankPump.includes(title)) {
        setShowToPopup(true);
      }
    }
  };

  const handleOptionClick = (option) => {
    setTo(option);
    setShowFromPopup(false);
  };

  const handleToOptionClick = (option) => {
    setActivePumpStation(option);
    setShowToPopup(false);
    setShowSecondPopup(true);
  };

  const handleSecondOptionClick = (option) => {
    setLine(option);

    setShowSecondPopup(false);
  };

  let color = isFromSelected ? "green" : "white";
  let textColor = isFromSelected ? "white" : "black";
  if (isToSelected) {
    color = "#1e22e0";
    textColor = "white";
  }

  return (
    <div
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
        color: textColor,
      }}
      onClick={handleTankClick}
    >
      {title}
      {showFromPopup && (
        <div
          ref={popupRef}
          style={{
            width: "180px",
            position: "absolute",
            top: "-115px",
            left: "160%",
            transform: "translateX(-50%)",
            backgroundColor: "white",
            color: "black",
            padding: "10px",
            borderRadius: "8px",
            fontSize: "26px",
            boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
            zIndex: 1001,
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            border: "1px solid #ccc",
          }}
        >
          {["910-40(1)", "910-10(2)", "910-100(3)"].map((option) => (
            <div key={option}>
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  handleOptionClick(option);
                }}
                style={{
                  padding: "6px 12px",
                  borderRadius: "4px",
                  cursor: "pointer",
                  "&:hover": {
                    backgroundColor: "#f0f0f0",
                  },
                }}
              >
                {option}
              </div>
              <hr />
            </div>
          ))}
        </div>
      )}

      {shouldShowToPopup && showToPopup && (
        <div
          ref={popupRef}
          style={{
            width: "180px",
            position: "absolute",
            top: "-115px",
            left: "160%",
            transform: "translateX(-50%)",
            backgroundColor: "white",
            color: "black",
            padding: "10px",
            borderRadius: "8px",
            fontSize: "26px",
            boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
            zIndex: 1001,
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            border: "1px solid #ccc",
          }}
        >
          <div
            style={{
              fontWeight: "bold",
              marginBottom: "8px",
              textAlign: "center",
            }}
          >
            Чем
          </div>

          {["910-35", "910-115"].map((option) => (
            <div key={option}>
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  handleToOptionClick(option);
                }}
                style={{
                  padding: "6px 12px",
                  borderRadius: "4px",
                  cursor: "pointer",
                  "&:hover": {
                    backgroundColor: "#f0f0f0",
                  },
                }}
              >
                {option}
              </div>
              <hr />
            </div>
          ))}
        </div>
      )}

      {showSecondPopup && (
        <div
          ref={popupRef}
          style={{
            width: "180px",
            position: "absolute",
            top: "-115px",
            left: "160%",
            transform: "translateX(-50%)",
            backgroundColor: "white",
            color: "black",
            padding: "10px",
            borderRadius: "8px",
            fontSize: "26px",
            boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
            zIndex: 1001,
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            border: "1px solid #ccc",
          }}
        >
          <div
            style={{
              fontWeight: "bold",
              marginBottom: "8px",
              textAlign: "center",
            }}
          >
            Куда
          </div>
          {["А", "Б"].map((option) => (
            <div key={option}>
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  handleSecondOptionClick(option);
                }}
                style={{
                  padding: "6px 12px",
                  borderRadius: "4px",
                  cursor: "pointer",
                  "&:hover": {
                    backgroundColor: "#f0f0f0",
                  },
                }}
              >
                {option}
              </div>
              <hr />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Tank;
