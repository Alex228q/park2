import parkStore from "../store/parkStore";

const Switcher = ({
  title = "",
  disabled = false,
  activeColor = "#4cd964",
  inactiveColor = "#ee4141",
  thumbColor = "white",
  top = 0,
  left = 0,
}) => {
  const {
    isMazutTransferVisibleKgpn,
    toggleMazutTransferVisibilityKgpn,
    isMazutTransferVisiblePst,
    toggleMazutTransferVisibilityPst,
  } = parkStore();

  const isActive =
    title === "gpn" ? isMazutTransferVisibleKgpn : isMazutTransferVisiblePst;

  const setIsActive =
    title === "gpn"
      ? toggleMazutTransferVisibilityKgpn
      : toggleMazutTransferVisibilityPst;

  // Уменьшаем размеры в 1.5 раза (было 50x30, стало ~33x20)
  const switchStyle = {
    width: "33px", // 50 / 1.5 ≈ 33
    height: "20px", // 30 / 1.5 = 20
    borderRadius: "10px", // 15 / 1.5 = 10
    backgroundColor: isActive ? activeColor : inactiveColor,
    display: "flex",
    alignItems: "center",
    padding: "0 2px", // Уменьшенный отступ
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.6 : 1,
    transition: "background-color 0.3s ease",
    position: "relative",
    top,
    left,
    zIndex: 100,
    WebkitTapHighlightColor: "transparent",
  };

  const thumbStyle = {
    width: "16px", // 24 / 1.5 = 16
    height: "16px",
    borderRadius: "8px", // 12 / 1.5 = 8
    backgroundColor: thumbColor,
    transform: isActive ? "translateX(13px)" : "translateX(0)", // 20 / 1.5 ≈ 13
    transition: "transform 0.3s ease",
    boxShadow: "0 1px 3px rgba(0,0,0,0.2)", // Уменьшенная тень
  };

  return (
    <div
      style={switchStyle}
      onClick={setIsActive}
      aria-checked={isActive}
      role="switch"
    >
      <div style={thumbStyle} />
    </div>
  );
};

export default Switcher;
