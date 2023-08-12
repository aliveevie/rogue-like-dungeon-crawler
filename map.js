let map = Array(20).fill(null).map(() => Array(20).fill(0));

let centerX = Math.floor(map.length / 2);
let centerY = Math.floor(map[0].length / 2);

let remaining = centerX * centerY; // Number of center cells

let newMap = [...map]
console.log(newMap);
