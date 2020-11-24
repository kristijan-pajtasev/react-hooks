import {useState} from 'react';

function Counter({onChange}) {
    const [counter, setCounter] = useState(0);


    const handleChange = value => {
        setCounter(value);
        onChange(value)
    }

    return (
        <div>
            <div>{counter}</div>
            <div>
                <button onClick={() => handleChange(counter + 1)}>Increment</button>
            </div>
        </div>
    )
}

export default Counter;