import {useEffect, useState} from "react";
import Counter from "./Counter";

function ConditionalEffects() {
    const [firstCounter, setFirstCounter] = useState(0);
    const [secondCounter, setSecondCounter] = useState(0);

    useEffect(() => {
        console.log("updated first counter")
    }, [firstCounter]);

    return (
        <div>
            <Counter onChange={setFirstCounter} />
            <Counter onChange={setSecondCounter} />
        </div>
    )
}

export default ConditionalEffects;