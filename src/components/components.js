import React, { useState, useEffect } from "react";



const Map = () => {
    const [canvasRef, setCanvasRef] = useState(null);
    const [enemies, setEnemies] = useState([]);

    useEffect(() => {
      const canvas = document.getElementById("grid");
      setCanvasRef(canvas);

    // Generate the map
    drawMap();

    for (let i = 0; i < 10; i++) {
      const enemy = {
        x: Math.floor(Math.random() * 600),
        y: Math.floor(Math.random() * 600),
        health: 30 + Math.floor(Math.random() * 70),
        damage: 30 + Math.random() * 70,
      };
      setEnemies(enemies.concat([enemy]));
    }
    }, [])
  
    const drawMap = () => {
      if (!canvasRef) return;

      const ctx = canvasRef.getContext('2d');
      const blockSize = 10;
    
      // Example map data, replace this with your own logic
      const map = Array(600).fill(null).map(() => Array(600).fill(0));
      const fillRandom = (value, count) => {
      let remaining = count;
        while (remaining > 0) {
          const x = Math.floor(Math.random() * 60);
          const y = Math.floor(Math.random() * 60);
          if (map[x][y] === 0) {
            map[x][y] = value;
            remaining--;
          }
        }
      };
  
      fillRandom(1, 10);
      fillRandom(2, 4);
      fillRandom(3, 4);
      fillRandom(4, 1);
  
      const totalZeroes = Math.floor((60*20) / 2);
      fillRandom(5, totalZeroes);
  
      // Draw the map on the canvas
      for (let i = 0; i < map.length; i++) {
        for (let j = 0; j < map[i].length; j++) {
          const color = map[i][j] === 5 ? 'white' : 'grey';
          ctx.fillStyle = color;
          ctx.fillRect(i * blockSize, j * blockSize, blockSize, blockSize);
        }
      }
  
    };
    
        return (
          <canvas
            id="grid"
            width="600px"
            height="400px"
          />
        );

       
};


const Legend = () => {
  const [xp, setXp] = useState(0);
  const [level, setLevel] = useState(0);
  const [health, setHealth] = useState(0);
  const [weapon, setWeapon] = useState("");
  const [damage, setDamage] = useState(0);
  const [enemiesLeft, setEnemiesLeft] = useState(0);


  return (
    <div>
      <div>
        <h2>
          <b>XP</b>: {xp}
          - <b>Level</b>: {level}
          - <b>Health</b>: {health}
          - <b>Weapon</b>: {weapon}
          - <b>Damage</b>: {damage}
        </h2>
      </div>
      <h3>Enemies left: {enemiesLeft}</h3>
    </div>
  );
};

const View = () => {
 
  return (
    <div>
      <Legend />
      <Map />
    </div>
  );
};

export {
    View
}
