import {useEffect} from 'react';

function OneRun() {

    useEffect(() => {
        console.log("Runs only once.")
    }, []);

    return <div>One run</div>
}

export default OneRun;