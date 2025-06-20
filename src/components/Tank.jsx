import { useState, useEffect, useRef } from "react";
import parkStore from "../store/parkStore";

const Tank = ({ top = 0, left = 0, title = "" }) => {
  const { from, to, setFrom, setTo, setLine, setActivePumpStation } =
    parkStore();
  const [showFromPopup, setShowFromPopup] = useState(false);
  const [showToPopup, setShowToPopup] = useState(false);
  const [showSecondPopup, setShowSecondPopup] = useState(false);

  const popupRef = useRef(null);
  const tankRef = useRef(null);

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

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleTankClick = (e) => {
    e.stopPropagation();

    if (!from) {
      setFrom(title);
      setShowFromPopup(true);
    } else if (from === title) {
      setFrom(null);
      setShowFromPopup(false);
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

  const buttonStyle = {
    padding: "12px 20px",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#f0f2f5",
    color: "#333",
    fontSize: "16px",
    fontWeight: "500",
    cursor: "pointer",
    transition: "all 0.2s ease",
    margin: "4px 0",
    width: "100%",
    textAlign: "center",
    ":hover": {
      backgroundColor: "#e0e3e7",
      transform: "translateY(-1px)",
    },
    ":active": {
      backgroundColor: "#d1d5db",
      transform: "translateY(0)",
    },
  };

  const activeButtonStyle = {
    ...buttonStyle,
    backgroundColor: "#3b82f6",
    color: "white",
    ":hover": {
      backgroundColor: "#2563eb",
    },
  };

  const popupContainerStyle = {
    position: "absolute",
    top: "calc(100% - 210px)",
    left: "176%",
    transform: "translateX(-50%)",
    backgroundColor: "white",
    borderRadius: "12px",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)",
    padding: "16px",
    zIndex: 1001,
    minWidth: "220px",
    animation: "fadeIn 0.2s ease-out forwards",
  };

  const popupTitleStyle = {
    fontSize: "18px",
    fontWeight: "600",
    marginBottom: "12px",
    color: "#333",
    textAlign: "center",
  };

  return (
    <div
      style={{
        position: "absolute",
        top,
        left,
        zIndex: 1000,
      }}
      ref={tankRef}
    >
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateX(-50%) translateY(-5px); }
          to { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
      `}</style>

      <div
        style={{
          width: "150px",
          height: "150px",
          borderRadius: "50%",
          border: "3px solid #333",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "36px",
          fontWeight: "bold",
          fontFamily: "monospace",
          backgroundColor: isFromSelected
            ? "green"
            : isToSelected
            ? "#1e22e0"
            : "white",
          color: isFromSelected || isToSelected ? "white" : "black",
          cursor: "pointer",
          transition: "all 0.2s ease",
          ":hover": {
            boxShadow: "0 0 15px rgba(0, 0, 0, 0.1)",
          },
        }}
        onClick={handleTankClick}
      >
        {title}
      </div>

      {/* Направления */}
      {showFromPopup && (
        <div ref={popupRef} style={popupContainerStyle}>
          <div style={popupTitleStyle}>Выберите направление</div>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {["910-40(1)", "910-10(2)", "910-100(3)"].map((option) => (
              <button
                key={option}
                style={buttonStyle}
                onClick={(e) => {
                  e.stopPropagation();
                  handleOptionClick(option);
                }}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Насосные станции */}
      {shouldShowToPopup && showToPopup && (
        <div ref={popupRef} style={popupContainerStyle}>
          <div style={popupTitleStyle}>Выберите насосную</div>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {["910-35", "910-115"].map((option) => (
              <button
                key={option}
                style={buttonStyle}
                onClick={(e) => {
                  e.stopPropagation();
                  handleToOptionClick(option);
                }}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Линии */}
      {showSecondPopup && (
        <div ref={popupRef} style={popupContainerStyle}>
          <div style={popupTitleStyle}>Выберите линию</div>
          <div style={{ display: "flex", gap: "8px" }}>
            {["А", "Б"].map((option) => (
              <button
                key={option}
                style={{
                  ...buttonStyle,
                  flex: 1,
                  backgroundColor: option === "А" ? "#f0f2f5" : "#f0f2f5",
                  ":hover": {
                    backgroundColor: option === "А" ? "#e0e3e7" : "#e0e3e7",
                  },
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  handleSecondOptionClick(option);
                }}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Tank;
