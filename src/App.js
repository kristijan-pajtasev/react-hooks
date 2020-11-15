import './App.css';
import Counter from "./components/State/Counter";
import CustomStepCounter from "./components/State/CustomStepCounter";
import LazyCounter from "./components/State/LazyCounter";

function App() {
  return (
    <div className="App">
      <div>
        <Counter />
        <CustomStepCounter />
        <LazyCounter />
      </div>
    </div>
  );
}

export default App;
