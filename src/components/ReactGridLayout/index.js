import { useState, useEffect } from "react";
import Box from "../Box";
const ReactGridLayout = ({ columns, boxCount }) => {
  const [boxes, setBoxes] = useState([]);

  useEffect(() => {
    if (boxes.length < boxCount) {
      let tempBoxes = [...boxes];
      for (let i = boxes.length + 1; i <= boxCount; i++) {
        tempBoxes.push(i);
      }
      setBoxes(tempBoxes);
    }
  }, [boxCount, boxes]);

  return (
    <div
      className="react--grid__layout"
      style={{ gridTemplateColumns: `repeat(${columns}, minmax(1px, 1fr))` }}
    >
      {boxes.map((num, index) => {
        return <Box key={index} number={num} />;
      })}
    </div>
  );
};

export default ReactGridLayout;
