import {useEffect} from 'react';
import ChatAPI from './ChatAPI';

function ChatComponent() {
    useEffect(() => {
     ChatAPI.subscribe();

     return () => {
         ChatAPI.unsubscribe();
     }
    })
    return <div>Chat Component</div>
}

export default ChatComponent;