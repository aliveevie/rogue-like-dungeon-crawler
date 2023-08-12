import { useState, useEffect, useRef } from "react";


export function Game(){
const [xp, setXp] = useState(30);
const [level, setLevel] = useState(1);
const [health, setHealth] = useState(100);
const [weapon, setWeapon] = useState('Knife');
const [damage, setDamage] = useState(15);
const [enemies, setEnemies] = useState(10);

const [map, setMap] = useState(Array(100).fill(null)
    .map(() => Array(100)
    .fill({ x: 0, y:0 })));

const myCanvas = useRef(null);
const ctxRef = useRef(null);


useEffect(() => {
    const canvas = myCanvas.current;
    const context = canvas.getContext('2d')
    ctxRef.current = context;
    draw();
}, []);


function draw(){
    const ctx = ctxRef.current

    ctx.beginPath();
    ctx.rect(0,0,10,10);
    ctx.fillStyle = 'red';
    ctx.fill();
    ctx.closePath();
}

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
          width={600}
          height={400}
          />
        </div>
        
    )
}