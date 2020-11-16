import './App.css';
import Counter from "./components/State/Counter";
import CustomStepCounter from "./components/State/CustomStepCounter";
import LazyCounter from "./components/State/LazyCounter";
import EffectsCounter from "./components/Effects/Counter";

function App() {
  return (
    <div className="App">
      <div>
        <Counter />
        <CustomStepCounter />
        <LazyCounter />
        <EffectsCounter />
      </div>
    </div>
  );
}

export default App;
