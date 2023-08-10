import './App.css';
import { useState, useEffect } from 'react';

const numRows = 10;
const numCols = 10;

function App() {

  const [playerPos, setPlayerPos] = useState({ x: 0, y: 0 });
  const [enemies, setEnemies] = useState([{ x: 3, y: 4 }]);

  const handleKeyPress = (e) => {
    // Update player position based on key presses
    // You would need to implement collision detection with walls and enemies here
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);


  return (
    <div className="App">
      <header className="App-header">
        <div className="game-area">
        {Array.from({ length: numRows }).map((_, row) =>
          Array.from({ length: numCols }).map((_, col) => (
            <div
              key={`${row}-${col}`}
              className={`cell ${playerPos.x === col && playerPos.y === row ? 'player' : ''}`}
            >
              {enemies.some(enemy => enemy.x === col && enemy.y === row) && (
                <div className="enemy"></div>
              )}
            </div>
          ))
        )}
      </div>
      </header>
    </div>
  );
}

export default App;
