const map = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
  [0, 1, 0, 0, 0, 1, 0, 0, 1, 0],
  [0, 1, 1, 1, 0, 1, 0, 1, 1, 0],
  [0, 0, 0, 1, 0, 1, 0, 1, 0, 0],
  [0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
  [0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
  [0, 1, 1, 1, 0, 1, 1, 1, 1, 0],
  [0, 0, 1, 1, 0, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

// Assign symbols to specific elements
map[1][1] = 1;   // Player
map[2][2] = 1;   // Number
map[2][8] = 1;   // Number
map[3][4] = 1;   // Enemy
map[3][5] = 3;   // Enemy
map[4][3] = 3;   // Enemy
map[6][2] = 3;   // Enemy
map[7][5] = 1;   // Enemy
map[8][2] = 4;   // Life
map[5][8] = 4;   // Life
map[7][8] = 5;   // Weapon
map[8][7] = 5;   // Weapon
map[9][1] = 0;   // Weapon

// Function to print the map

// Print the modified map
console.log(inx);
