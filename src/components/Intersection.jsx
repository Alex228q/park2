import { memo } from "react";
import { STATUS, useElementStatus } from "../hooks/useElementStatus";

// Цвет и z-index по статусу (индекс = STATUS.*)
const COLOR_BY_STATUS = [];
COLOR_BY_STATUS[STATUS.NONE] = "#E1E7EC";
COLOR_BY_STATUS[STATUS.ACTIVE] = "green";
COLOR_BY_STATUS[STATUS.AFTER_PUMP] = "#1e22e0";
COLOR_BY_STATUS[STATUS.GPN] = "#7D0F9B";
COLOR_BY_STATUS[STATUS.PST] = "#6F4B07";

// Отличие от Pipe: обычный маршрут здесь поднимается выше (50)
const Z_BY_STATUS = [];
Z_BY_STATUS[STATUS.NONE] = 1;
Z_BY_STATUS[STATUS.ACTIVE] = 50;
Z_BY_STATUS[STATUS.AFTER_PUMP] = 30;
Z_BY_STATUS[STATUS.GPN] = 30;
Z_BY_STATUS[STATUS.PST] = 30;

// Неизменяемая часть стиля создаётся один раз
const BASE_STYLE = {
  position: "absolute",
  height: "15px",
  borderTopLeftRadius: "110px",
  borderTopRightRadius: "110px",
  borderWidth: "7px",
  borderStyle: "solid",
  borderBottomColor: "transparent",
  borderBottomWidth: "0",
  borderBottomStyle: "solid",
  rotate: "90deg",
};

const Intersection = ({
  top = 0,
  left = 0,
  title = "",
  isBig = false,
  width = 23,
}) => {
  const status = useElementStatus(title);
  const color = COLOR_BY_STATUS[status];

  const halfCircleStyle = {
    ...BASE_STYLE,
    top,
    left,
    width: isBig ? "35px" : width,
    borderTopColor: color,
    borderRightColor: color,
    borderLeftColor: color,
    zIndex: Z_BY_STATUS[status],
  };

  return (
    <div style={halfCircleStyle}>
      {/* {title} */}
    </div>
  );
};

export default memo(Intersection);
