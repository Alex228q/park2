const SimpleText = ({
  top = 0,
  left = 0,
  title = "",
  fontSize = 14,
  width = 200,
  vertical = false,
  rotate = 0, // Новый параметр - угол поворота в градусах
  letterSpacing = 0,
}) => {
  return (
    <div
      style={{
        position: "absolute",
        top,
        left,
        fontSize,
        width: vertical ? "auto" : width,
        fontWeight: "600",
        fontFamily: "monospace",
        // Стили для вертикального текста
        writingMode: vertical ? "vertical-rl" : "horizontal-tb",
        textOrientation: vertical ? "mixed" : "inherit",
        letterSpacing: vertical ? letterSpacing : "normal",
        lineHeight: vertical ? "1.2" : "normal",
        whiteSpace: vertical ? "nowrap" : "normal",
        // Поворот всего элемента
        transform: `rotate(${rotate}deg)`,
        transformOrigin: "top left", // Точка вращения - левый верхний угол
      }}
    >
      {title}
    </div>
  );
};

export default SimpleText;
