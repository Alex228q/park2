import { memo } from "react";
import parkStore from "../store/parkStore";
import { STATUS, useElementStatus } from "../hooks/useElementStatus";

const DEFAULT_CLOSE_VALVE = new Set(["83", "34"]);

// Клапан, который закрыт только при маршруте 910-100(3) -> E-326
const SPECIAL_VALVE = "ЗМ-6";

// Цвет по статусу (индекс = STATUS.*)
const COLOR_BY_STATUS = [];
COLOR_BY_STATUS[STATUS.NONE] = "#474747";
COLOR_BY_STATUS[STATUS.ACTIVE] = "green";
COLOR_BY_STATUS[STATUS.AFTER_PUMP] = "#1e22e0";
COLOR_BY_STATUS[STATUS.GPN] = "#7D0F9B";
COLOR_BY_STATUS[STATUS.PST] = "#6F4B07";

// Неизменяемые части стилей создаются один раз
const LABEL_BASE = {
  width: "42px",
  display: "flex",
  position: "absolute",
  fontSize: "12px",
  fontWeight: "bold",
};

const ICON_WRAPPER_BASE = {
  position: "absolute",
  overflow: "hidden",
};

const ICON_TRANSFORM = "translateY(-1000px)";

// Стиль подписи: три варианта из исходного компонента в одном месте
const getLabelStyle = ({
  isRotate,
  isUp,
  isLeft,
  top,
  left,
  textTop,
  textLeft,
  title,
  color,
}) => {
  if (isRotate) {
    return {
      ...LABEL_BASE,
      rotate: "270deg",
      top: top - 22,
      left: left - 3,
      color,
    };
  }

  if (isUp) {
    return {
      ...LABEL_BASE,
      justifyContent: title.length < 4 && isLeft ? "center" : undefined,
      top: textTop ? textTop : isLeft ? top - 5 : top - 6,
      left: textLeft ? textLeft : isLeft ? left - 34 : left + 16,
      color,
    };
  }

  return {
    ...LABEL_BASE,
    justifyContent: isLeft ? "center" : undefined,
    rotate: "0deg",
    top: isLeft ? top - 8 : top - 7,
    left: isLeft ? left - 34 : left + 14,
    color,
  };
};

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
  // Подписка только на статус этого клапана
  const status = useElementStatus(title);

  // Для всех клапанов, кроме ЗМ-6, селектор всегда возвращает false,
  // поэтому смена from/to их не перерисовывает.
  const isSpecialClosed = parkStore(
    (s) =>
      title === SPECIAL_VALVE &&
      s.from === "910-100(3)" &&
      s.to === "E-326"
  );

  let color = COLOR_BY_STATUS[status];
  if (DEFAULT_CLOSE_VALVE.has(title) || isSpecialClosed) {
    color = "red";
  }

  // Иконка повёрнута у вращаемых клапанов и у клапанов "не вверх"
  const isIconRotated = isRotate || !isUp;

  return (
    <div>
      <p
        style={getLabelStyle({
          isRotate,
          isUp,
          isLeft,
          top,
          left,
          textTop,
          textLeft,
          title,
          color,
        })}
      >
        {title}
      </p>
      <div
        style={{
          ...ICON_WRAPPER_BASE,
          top,
          left,
          rotate: isIconRotated ? "90deg" : undefined,
        }}
      >
        <img
          style={{
            filter: `drop-shadow(0px 1000px 0 ${color})`,
            transform: ICON_TRANSFORM,
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

export default memo(Valve);
