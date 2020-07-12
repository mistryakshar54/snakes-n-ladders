import React from "react";

const GridComponent = (props) => {
  const { canvasRef, gridMap, renderCanvas } = props;
  const canvasLayout = canvasRef?.current;
  const context = canvasLayout?.getContext("2d");
  const drawRect = (x, y, h, w, color, textValue) => {
    context.beginPath();
    context.rect(x, y, w, h);
    context.fillStyle = color;
    context.fill();
    context.lineWidth = 1;
    context.strokeStyle = "#003300";
    context.stroke();
    context.beginPath();
    context.font = "15pt Calibri";
    context.fillStyle = "white";
    context.fillText(textValue, x + w / 3, y + h / 3);
  };

  const renderGrid = () => {
    gridMap.forEach((gridItem) => {
      const { x, y, cellNo } = gridItem;
      drawRect(x, y, 50, 50, "red", cellNo);
    });
  };
  return <>{renderCanvas && renderGrid()}</>;
};

export default GridComponent;