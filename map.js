let map = Array(20).fill(null).map(() => Array(20).fill(0));

let centerX = Math.floor(map.length / 2);
let centerY = Math.floor(map[0].length / 2);

let remaining = centerX * centerY; // Number of center cells

while (remaining > 0) {
  if (map[centerX][centerY] === 0) {
    map[centerX][centerY] = 1;
    remaining--;
  }

  // Move to the next center cell
  if (centerY < map[0].length - 1) {
    centerY++;
  } else if (centerX < map.length - 1) {
    centerY = Math.floor(map[0].length / 2);
    centerX++;
  } else {
    break; // No more center cells
  }
}

console.log(map);
