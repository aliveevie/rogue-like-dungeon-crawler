let blockWidth = 50;
let blockHeight = 50;
let playerRow = 1;  // Initial row of the player
let playerCol = 1;

function drawPath(ctx, map) {
    
    for (let i = 0; i < map.length; i++) {
      for (let j = 0; j < map[i].length; j++) { // Use map[i].length instead of map[0].length
        let x = 200 + (i * blockWidth) ;
        let y = 50  + (j * blockHeight);
        ctx.beginPath();
        ctx.rect(x, y, blockWidth, blockHeight);
        let color = map[i][j] === 1 ? 'white' : map[i][j] === 2 ? 'blue' :  map[i][j] === 3 ? 'red' : map[i][j] === 4 ? 'green' : map[i][j] === 5 ? 'black' : 'yellow';
        ctx.fillStyle = color;
        ctx.fill();
        ctx.closePath();
      }
    }
  }

  function draw(ctx, map) {
    drawPath(ctx, map);
  }


  function handleKeyDown(event, map, ctx, canvas) {
    let newRow = playerRow;
    let newCol = playerCol;
  
    if (event.key === "ArrowDown") {
      newRow += 1;
    } else if (event.key === "ArrowUp") {
      newRow -= 1;
    } else if (event.key === "ArrowRight") {
      newCol += 1;
    } else if (event.key === "ArrowLeft") {
      newCol -= 1;
    }
  
    // Check if moving is within the bounds of the matrix and if the cell is not a barrier (value 0)
    if (
      newRow >= 0 && newRow < map.length &&
      newCol >= 0 && newCol < map[0].length &&
      map[newRow][newCol] !== 0
    ) {
      // Update the player's position
      map[playerRow][playerCol] = 1; // Set the previous position to 1
      playerRow = newRow; // Update player's row
      playerCol = newCol; // Update player's column
      map[playerRow][playerCol] = 2; // Set the new position to 2
  
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      draw(ctx, map); // Redraw the updated map
    }
  
    // Update the display or do any necessary processing here
  }
  
  
  export { draw, handleKeyDown };
  