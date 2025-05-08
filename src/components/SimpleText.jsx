const SimpleText = ({
  top = 0,
  left = 0,
  title = "",
  fontSize = 14,
  width = 200,
}) => {
  return (
    <div
      style={{
        position: "absolute",
        top,
        left,
        fontSize,
        width,
        fontWeight: "600",
        fontFamily: "monospace",
      }}
    >
      {title}
    </div>
  );
};

export default SimpleText;
