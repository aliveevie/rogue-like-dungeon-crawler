import { useState } from "react";

export function Game(){
const [xp, setXp] = useState(30);
const [level, setLevel] = useState(1);
const [health, setHealth] = useState(100);
const [weapon, setWeapon] = useState('Knife');
const [damage, setDamage] = useState(15);
const [enemies, setEnemies] = useState(10);


    return (
        <div >
              <canvas
              id="mycanvas"
              width={600}
              height={400}
              >
            </canvas> 
          <div className="game-area" >
          <p>xP: {xp} - </p>
                <p>Level: {level} - </p>
                <p>Health: {health} - </p>
                <p>Weapon: {weapon} - </p>
                <p>Damage:  {damage} - </p>
                <p>Enemies Left:  {enemies}</p>
          </div>
          
        </div>
        
    )
}