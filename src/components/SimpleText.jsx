const SimpleText = ({ top = 0, left = 0, title = "" }) => {
  return <div style={{ position: "absolute", top, left }}>{title}</div>;
};

export default SimpleText;
