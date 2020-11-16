import {useEffect, useState} from 'react';

function Counter() {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        console.log("This useEffect runs on every change");
    })

    return (
        <div>
            <div>useEffect - simplest version</div>
            <div>{counter}</div>
            <div>
                <button onClick={() => setCounter(counter + 1)}>Increment</button>
            </div>
        </div>
    )
}

export default Counter;