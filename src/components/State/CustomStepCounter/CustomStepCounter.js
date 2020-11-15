import {useState} from 'react';

function CustomStepCounter() {
    const [counter, setCounter] = useState(0);
    const [stepValue, setStepValue] = useState(1);

    return (
        <div>
            <div>{counter}</div>
            <div>Step value: <input type="text" onChange={ev => setStepValue(parseInt(ev.target.value))}/></div>
            <div>
                <button onClick={() => setCounter(counter + stepValue)}>Increment</button>
            </div>
        </div>
    )
}

export default CustomStepCounter;