import logo from "./logo.svg";
import "./App.css";
import Result from "./components/atoms/result/Result";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <main className="App-main">
        <div className="App-calc">
          <Result value={0}></Result>
        </div>
      </main>
    </div>
  );
}

export default App;
