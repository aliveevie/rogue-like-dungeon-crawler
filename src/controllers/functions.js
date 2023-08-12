let randomX = Math.random() * 200;
let randomY = Math.random() * 100;
let blockWidth = 10;
let blockHeight = 10;

function drawPath(ctx, map) {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    for (let i = 0; i < map.length; i++) {
      for (let j = 0; j < map[i].length; j++) { // Use map[i].length instead of map[0].length
        let x = randomX + (i * blockWidth) ;
        let y = randomY  + (j * blockHeight);
        ctx.beginPath();
        ctx.rect(x, y, blockWidth, blockHeight);
        if (map[i][j] === 0) {
            ctx.fillStyle = "white"; // For example, white for empty cells
          } else {
            ctx.fillStyle = "grey"; // Blue for non-empty cells
          }
        ctx.fill();
        ctx.closePath();
      }
    }
  }
  
  function draw(ctx, map) {
    drawPath(ctx, map);
  }
  
  export { draw };
  