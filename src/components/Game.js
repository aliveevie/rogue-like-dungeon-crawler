import { useState, useEffect, useRef } from "react";
import { draw } from "../controllers/functions";

export function Game(){
const [xp, setXp] = useState(30);
const [level, setLevel] = useState(1);
const [health, setHealth] = useState(100);
const [weapon, setWeapon] = useState('Knife');
const [damage, setDamage] = useState(15);
const [enemies, setEnemies] = useState(10);
const [map, setMap] = useState(Array.from({ length: 50 }, () =>
Array.from({ length: 50 }, () => (Math.random() < 0.5 ? 0 : 1))
))

const myCanvas = useRef(null);
const ctxRef = useRef(null);


useEffect(() => {
    const canvas = myCanvas.current;
    const context = canvas.getContext('2d')
    ctxRef.current = context;
    draw(ctxRef.current, map);
}, []);

    return (
        <div > 
          <div className="game-area" >
          <p>xP: {xp} - </p>
                <p>Level: {level} - </p>
                <p>Health: {health} - </p>
                <p>Weapon: {weapon} - </p>
                <p>Damage:  {damage} - </p>
                <p>Enemies Left:  {enemies}</p>
          </div>
          <canvas
          ref={myCanvas}
          width={800}
          height={600}
          />
        </div>
        
    )
}
