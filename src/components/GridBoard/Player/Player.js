import React from 'react';

const PlayerComponent = (props) => {
    const { canvasRef, renderCanvas, players } = props;
    const canvasLayout = canvasRef?.current;
    const context = canvasLayout?.getContext("2d");
    const drawPlayer = () => {
      players.forEach((currPlayer) => {
        const { x, y } = currPlayer;
        context.beginPath();
        context.arc(x + 20, y + 20, 10, 0, 2 * Math.PI, false);
        context.fillStyle = currPlayer.color;
        context.fill();
        context.lineWidth = 2;
        context.strokeStyle = "black";
        context.stroke();
      });
    };
    return <>{renderCanvas && drawPlayer()}</>;
}

export default PlayerComponent;