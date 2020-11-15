import {useState} from 'react';

function LazyCounter() {
    const [counter, setCounter] = useState(() => {
        // this could be any value
        return 0;
    });

    return (
        <div>
            <div>{counter}</div>
            <div>
                <button onClick={() => setCounter(counter + 1)}>Increment</button>
            </div>
        </div>
    )
}

export default LazyCounter;