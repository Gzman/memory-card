import { Header } from "./components/header/Header"
import { Score } from "./components/header/Score"
import { Logo } from "./components/header/Logo"
import { Memory } from "./components/memory/Memory"
import { useScore } from "./hooks/useScore"
import { memoryData } from "./data/memoryData"

function App() {
  const {
    score,
    bestScore,
    increaseScore,
    resetScore
  } = useScore();

  const description = "Don't click on any more than once.";
  const winMessage = "Congratulations, you won!";
  
  return (
    <div className="App">
      <Header>
        <Logo />
        <div className="header-content">
          <h3 className="description">{score === memoryData.length ? winMessage : description}</h3>
          <div className="scores">
            <Score label="Score:" value={score} />
            <Score label="Best Score:" value={bestScore} />
          </div>
        </div>
      </Header>
      <main>
        <Memory
          memoryData={memoryData}
          score={score}
          increaseScore={increaseScore}
          resetScore={resetScore}
        />
      </main>
    </div>
  );
}

export default App;
