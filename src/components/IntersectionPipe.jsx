import React from "react";
import Intersection from "./Intersection";
import Pipe from "./Pipe";

const IntersectionPipe = ({ top = 0, left = 0, title = "" }) => {
  return (
    <>
      <Pipe top={top - 16} left={left + 2} length={16} title={title} />
      <Intersection top={top} left={left} title={title} />
      <Pipe top={top + 15} left={left + 2} length={16} title={title} />
    </>
  );
};

export default IntersectionPipe;
