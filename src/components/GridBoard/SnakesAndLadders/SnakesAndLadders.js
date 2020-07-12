import React from "react";

const SnakesAndLadderComponent = ({ canvasRef, gridMap, renderCanvas, type, arr }) => {

  const canvasLayout = canvasRef?.current;
  const context = canvasLayout?.getContext("2d");
  const drawSnakeOrLadder = (startPos, endPos, color, isSnake = false) => {
    context.beginPath();
    context.moveTo(startPos.x + 10, startPos.y + 20);
    context.lineTo(endPos.x + 40, endPos.y + 40);
    if (!isSnake) {
      context.moveTo(startPos.x + 15, startPos.y + 25);
      context.lineTo(endPos.x + 45, endPos.y + 45);
    }
    context.lineWidth = isSnake ? 5 : 3;
    context.strokeStyle = color;
    context.lineCap = isSnake ? "round" : "square";
    context.stroke();
  };

  const renderSnakeAndLadder = () => {
    for (let item of arr) {
      const { startCell, endCell } = item;
      const startPos = gridMap[startCell - 1];
      const endPos = gridMap[endCell - 1];
      drawSnakeOrLadder(
        { x: startPos.x, y: startPos.y },
        { x: endPos.x, y: endPos.y },
        type === "snake" ? "blue" : "green",
        type === "snake" ? true : false
      );
    }
  };

  return <>{renderCanvas && renderSnakeAndLadder()}</>;
};

export default SnakesAndLadderComponent;
