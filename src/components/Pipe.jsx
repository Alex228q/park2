import { memo } from "react";
import { STATUS, useElementStatus } from "../hooks/useElementStatus";

// Цвет и z-index по статусу (индекс = STATUS.*). null -> используется colorDef
const COLOR_BY_STATUS = [];
COLOR_BY_STATUS[STATUS.NONE] = null;
COLOR_BY_STATUS[STATUS.ACTIVE] = "green";
COLOR_BY_STATUS[STATUS.AFTER_PUMP] = "#1e22e0";
COLOR_BY_STATUS[STATUS.GPN] = "#7D0F9B";
COLOR_BY_STATUS[STATUS.PST] = "#6F4B07";

const Z_BY_STATUS = [];
Z_BY_STATUS[STATUS.NONE] = 1;
Z_BY_STATUS[STATUS.ACTIVE] = 30;
Z_BY_STATUS[STATUS.AFTER_PUMP] = 30;
Z_BY_STATUS[STATUS.GPN] = 30;
Z_BY_STATUS[STATUS.PST] = 30;

const Pipe = ({
  length,
  isHorizontal = false,
  thickness = 7,
  left = 0,
  top = 0,
  title = "",
  colorDef = "#E1E7EC",
}) => {
  const status = useElementStatus(title);

  const color = COLOR_BY_STATUS[status] ?? colorDef;
  const z = title === "plug" ? 200 : Z_BY_STATUS[status];

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "12px",
        fontWeight: "bold",
        width: isHorizontal ? `${length}px` : `${thickness}px`,
        height: isHorizontal ? `${thickness}px` : `${length}px`,
        backgroundColor: color,
        position: "absolute",
        left,
        top,
        zIndex: z,
        color: "red",
      }}
    >
      {/* {title} */}
    </div>
  );
};

export default memo(Pipe);
