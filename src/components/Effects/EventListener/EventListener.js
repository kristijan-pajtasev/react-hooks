import {useEffect, useState} from 'react';

function EventListener() {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        const eventHandler = () => {
            console.log("click");
        }
        document.querySelector('body').addEventListener("click", eventHandler)
        return () => {
            document.querySelector('body').removeEventListener("click", eventHandler)
        }
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

export default EventListener;