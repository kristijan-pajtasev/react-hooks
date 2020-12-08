// ContextParent.js
import UserContext from '../UserContext'
import ContextChild from "../ContextChild";

function ContextParent() {
    const value = {name: "Peter"};

    return (
        <UserContext.Provider value={value}>
            <div>context parent</div>
            <ContextChild/>
        </UserContext.Provider>)
}

export default ContextParent;