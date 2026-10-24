import { memo, useEffect, useRef, useState } from "react";
import parkStore from "../store/parkStore";

// Резервуары, в которые возможна обратная откачка
const reverseTanks = ["E-326", "E-330"];

// Варианты трубопроводов по умолчанию
const defaultPipelineOptions = ["61,64", "62,63"];

// Варианты трубопроводов для отдельных эстакад
const pipelineOptionsByReck = {
  "910-100(3)": ["88", "89", "90"],
};

// Стили не зависят от пропсов и состояния, поэтому создаются один раз
const buttonStyle = {
  padding: "12px 20px",
  borderRadius: "8px",
  border: "none",
  backgroundColor: "#f0f2f5",
  color: "#333",
  fontSize: "20px",
  fontWeight: "700",
  cursor: "pointer",
  margin: "4px 0",
  width: "100%",
  textAlign: "center",
};

const popupStyle = {
  position: "absolute",
  top: "-120%",
  left: "-4%",
  transform: "translateX(-50%)",
  backgroundColor: "white",
  borderRadius: "12px",
  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.15)",
  padding: "16px",
  zIndex: 1001,
  minWidth: "220px",
};

const popupTitleStyle = {
  fontSize: "24px",
  fontWeight: "600",
  marginBottom: "12px",
  color: "#333",
  textAlign: "center",
  textTransform: "uppercase",
};

const boxBaseStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "473px",
  height: "104px",
  border: "3px solid black",
  fontWeight: "bold",
  fontSize: "36px",
  fontFamily: "monospace",
  cursor: "pointer",
};

const Reck = ({ top = 0, left = 0, title = "" }) => {
  // Подписка только на то, что реально влияет на вид этой эстакады
  const isFromSelected = parkStore((s) => s.from === title);
  const isToSelected = parkStore((s) => s.to === title);
  const isReverseSource = parkStore((s) => s.from === title && s.reverse);

  // Действия стабильны и не вызывают перерисовок
  const setFrom = parkStore((s) => s.setFrom);
  const setTo = parkStore((s) => s.setTo);
  const setPipelineVariant = parkStore((s) => s.setPipelineVariant);

  const [showTankPopup, setShowTankPopup] = useState(false);
  const [showPipePopup, setShowPipePopup] = useState(false);
  const popupRef = useRef(null);

  const isPopupOpen = showTankPopup || showPipePopup;

  // Варианты линий для текущей эстакады
  const pipelineOptions =
    pipelineOptionsByReck[title] ?? defaultPipelineOptions;

  // Закрываем попапы, если эстакада перестала быть источником обратной откачки
  useEffect(() => {
    if (!isReverseSource) {
      setShowTankPopup(false);
      setShowPipePopup(false);
    }
  }, [isReverseSource]);

  // Клик вне попапа: слушатель висит на document только пока попап открыт
  useEffect(() => {
    if (!isPopupOpen) return;

    const handleClickOutside = (e) => {
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        setShowTankPopup(false);
        setShowPipePopup(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isPopupOpen]);

  const handleClick = () => {
    // Актуальные значения читаем в момент клика, подписка для этого не нужна
    const { from, reverse } = parkStore.getState();

    // Повторный клик по эстакаде-источнику — отмена маршрута
    if (from === title && reverse) {
      setFrom(title);
      return;
    }

    // Ничего не выбрано — начинаем обратный маршрут, первым шагом выбор трубопровода
    if (!from) {
      setFrom(title, true);
      setShowPipePopup(true);
      return;
    }

    // Уже идёт обратный маршрут с другой эстакады — игнорируем
    if (reverse) return;

    // Прямой маршрут: эстакада — назначение
    setTo(title);
  };

  // 1-й шаг: выбор трубопровода -> открываем выбор резервуара
  const handlePipeOption = (variant) => {
    setPipelineVariant(variant);
    setShowPipePopup(false);
    setShowTankPopup(true);
  };

  // 2-й шаг: выбор резервуара -> конец цепочки
  const handleTankOption = (tank) => {
    // setTo переключает значение, поэтому не вызываем его повторно для того же резервуара
    if (parkStore.getState().to !== tank) {
      setTo(tank);
    }
    setShowTankPopup(false);
  };

  let color = isFromSelected ? "green" : "white";
  if (isToSelected) {
    color = "#1e22e0";
  }
  const fontColor = isFromSelected || isToSelected ? "white" : "black";

  return (
    <div style={{ position: "absolute", top, left, zIndex: 1000 }}>
      <div
        onClick={handleClick}
        style={{ ...boxBaseStyle, color: fontColor, backgroundColor: color }}
      >
        {title}
      </div>

      {/* Шаг 1: выбор варианта трубопровода */}
      {showPipePopup && (
        <div ref={popupRef} style={popupStyle}>
          <div style={popupTitleStyle}>линия</div>
          {pipelineOptions.map((variant) => (
            <button
              key={variant}
              style={buttonStyle}
              onClick={(e) => {
                e.stopPropagation();
                handlePipeOption(variant);
              }}
            >
              {variant}
            </button>
          ))}
        </div>
      )}

      {/* Шаг 2: выбор резервуара для обратной откачки */}
      {showTankPopup && (
        <div ref={popupRef} style={popupStyle}>
          <div style={popupTitleStyle}>Резервуар</div>
          {reverseTanks.map((tank) => (
            <button
              key={tank}
              style={buttonStyle}
              onClick={(e) => {
                e.stopPropagation();
                handleTankOption(tank);
              }}
            >
              {tank}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default memo(Reck);
