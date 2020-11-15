import {useState} from 'react';

function Counter() {
    const [counter, setCounter] = useState(0);

    return (
        <div>
            <div>{counter}</div>
            <div>
                <button onClick={() => setCounter(counter + 1)}>Increment</button>
            </div>
        </div>
    )
}

export default Counter;