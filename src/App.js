import { Header } from "./components/header/Header"
import { Score } from "./components/header/Score"
import { Logo } from "./components/header/Logo"
import { Memory } from "./components/memory/Memory"
import { useScore } from "./hooks/useScore"
import { memoryData } from "./data/memoryData"

function App() {
  const { score, increaseScore, resetScore } = useScore();
  return (
    <div className="App">
      <Header>
        <Logo />
        <div className="header-content">
          <h3 className="description">{score === memoryData.length ? "You Won" : "Don't click on any more than once."}</h3>
          <div className="scores">
            <Score label="Score:" value={score} />
            <Score label="Best Score:" value={0} />
          </div>
        </div>
      </Header>
      <main>
        <Memory memoryData={memoryData} score={score} increaseScore={increaseScore} resetScore={resetScore} />
      </main>
    </div>
  );
}

export default App;
