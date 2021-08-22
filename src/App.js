import { Header } from "./components/header/Header"
import { Score } from "./components/header/Score"
import { Logo } from "./components/header/Logo"
import { Memory } from "./components/memory/Memory"

function App() {
  return (
    <div className="App">
      <Header>
        <Logo />
        <div className="header-content">
        <h3 className="description">Don't click on any more than once.</h3>
          <div className="scores">
            <Score label="Score:" value={0} />
            <Score label="Best Score:" value={0} />
          </div>
        </div>
      </Header>
      <main>
        <Memory />
      </main>
    </div>
  );
}

export default App;
