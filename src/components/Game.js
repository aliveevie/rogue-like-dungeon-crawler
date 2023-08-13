import { useState, useEffect, useRef } from "react";
import { draw, handleKeyDown } from "../controllers/functions";

export function Game(){
const [xp, setXp] = useState(30);
const [level, setLevel] = useState(1);
const [health, setHealth] = useState(100);
const [weapon, setWeapon] = useState('Knife');
const [damage, setDamage] = useState(15);
const [enemies, setEnemies] = useState({x:1, y:1});
const [enemiesLeft, setEnemiesLeft] = useState(10);
const [player, setPlayer] = useState({
    x:1, y:1
});


const map = [
  [
    0, 0, 0, 0, 0,
    0, 0, 0, 0, 0
  ],
  [
    0, 2, 1, 1, 1,
    1, 1, 1, 1, 0
  ],
  [
    0, 1, 1, 0, 0,
    1, 0, 0, 1, 0
  ],
  [
    0, 1, 1, 1, 1,
    3, 0, 1, 1, 0
  ],
  [
    0, 0, 0, 3, 0,
    1, 0, 1, 0, 0
  ],
  [
    0, 1, 1, 1, 1,
    1, 1, 1, 4, 0
  ],
  [
    0, 1, 3, 0, 0,
    0, 0, 1, 1, 0
  ],
  [
    0, 1, 1, 1, 1,
    1, 1, 1, 5, 0
  ],
  [
    0, 0, 4, 1, 0,
    1, 1, 5, 0, 0
  ],
  [
    0, 0, 0, 0, 0,
    0, 0, 0, 0, 0
  ]
]

   // Life

const myCanvas = useRef(null);
const ctxRef = useRef(null);


useEffect(() => {
  const canvas = myCanvas.current;
  const context = canvas.getContext('2d');
  ctxRef.current = context;

  const handleKeyWrapper = (event) => {
    handleKeyDown(event, map, ctxRef.current, canvas)
  }

  draw(ctxRef.current, map);
  window.addEventListener('keydown', handleKeyWrapper);

  return () => {
    window.removeEventListener('keydown', handleKeyWrapper);
  }
}, []);




    return (
        <div > 
          <div className="game-area" >
          <p>XP: {xp} - </p>
                <p>Level: {level} - </p>
                <p>Health: {health} - </p>
                <p>Weapon: {weapon} - </p>
                <p>Damage:  {damage} - </p>
                <p>Enemies Left:  {enemiesLeft}</p>
          </div>
          <canvas
          ref={myCanvas}
          width={800}
          height={600}
          />
        </div>
        
    )
}
