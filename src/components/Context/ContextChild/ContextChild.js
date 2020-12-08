import UserContext from "../UserContext";
import {useContext} from "react";

function ContextChild() {
    const user = useContext(UserContext);
    return (
        <div>
            <div>context child</div>
            <pre>
                {JSON.stringify(user)}
            </pre>
        </div>)
}

export default ContextChild;