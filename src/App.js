import { Header } from "./components/header/Header"
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

  return (
    <div className="App">
      <Header score={score} bestScore={bestScore} maxPoints={memoryData.length} />
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
