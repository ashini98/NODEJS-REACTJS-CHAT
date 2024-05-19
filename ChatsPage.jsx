import {PrettyChatWindow} from 'react-chat-engine-pretty';

const ChatsPage = (props) => {
    return (
    <div style={{height: '100vh'}}>
        <PrettyChatWindow projectId='126f71b9-4141-4b61-a64b-291e22b5ff79' 
        // eslint-disable-next-line react/prop-types
        username={props.user.username} 
        // eslint-disable-next-line react/prop-types
        secret={props.user.secret} 
        style={{height: '100%'}}/>
    </div>
    )
}

export default ChatsPage;