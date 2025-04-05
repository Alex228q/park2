import { useState, useEffect, useRef } from "react";
import parkStore from "../store/parkStore";

const Tank = ({ top = 0, left = 0, title = "" }) => {
  const { from, to, setFrom, setTo } = parkStore();
  const [showPopup, setShowPopup] = useState(false);
  const popupRef = useRef(null);

  const isFromSelected = from === title;
  const isToSelected = to === title;

  // Закрытие попапа при клике вне его
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        setShowPopup(false);
      }
    };

    if (showPopup) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showPopup]);

  const handleTankClick = () => {
    if (from === null) {
      setFrom(title);
      setShowPopup(true); // Показываем попап при выборе from
    } else if (from === title) {
      setFrom(null);
    } else if (to === null || to === title) {
      setTo(title);
    } else {
      setTo(title);
    }
  };

  const handleOptionClick = (option) => {
    setTo(option);
    setShowPopup(false);
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
      {showPopup && (
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
            <div
              key={option}
              onClick={(e) => {
                e.stopPropagation(); // Предотвращаем всплытие клика
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
          ))}
        </div>
      )}
    </div>
  );
};

export default Tank;
