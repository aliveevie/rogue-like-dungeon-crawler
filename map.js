const map = (Array(100).fill(100).fill(null).map(() => Array(100).fill(() => (Math.random() < 0.5 ? 0:1))));

let centerX = Math.floor(map.length / 2);
let centerY = Math.floor(map[0].length / 2);

let remaining = centerX * centerY; // Number of center cells

let newMap = [...map]
console.log(map);
