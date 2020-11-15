import './App.css';
import Counter from "./components/State/Counter";
import CustomStepCounter from "./components/State/CustomStepCounter";

function App() {
  return (
    <div className="App">
      <div>
        <Counter />
        <CustomStepCounter />
      </div>
    </div>
  );
}

export default App;
