import './App.css';
import Counter from "./components/State/Counter";
import CustomStepCounter from "./components/State/CustomStepCounter";
import LazyCounter from "./components/State/LazyCounter";
import EffectsCounter from "./components/Effects/Counter";
import EventListener from "./components/Effects/EventListener";
import ConditionalEffects from "./components/Effects/ConditionalEffects";

function App() {
  return (
    <div className="App">
      <div>
        <Counter />
        <CustomStepCounter />
        <LazyCounter />
        <EffectsCounter />
        <EventListener />
        <div>
            <h2>Conditional effects</h2>
            <ConditionalEffects />
        </div>
      </div>
    </div>
  );
}

export default App;
