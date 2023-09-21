import { useEffect, useState } from "react";
import { addMessage } from "@/store/actions/reflectionBotActions";
import { messageInputContainer, chatWindowContainer } from '@/styles/chatWindowStyles';
import MessageList from '@/components/MessageList';
import MessageInput from '@/components/MessageInput';
import { useDispatch, useSelector } from 'react-redux';
import { Box } from '@mui/material';

const ReflectionBot = () => {
    const dispatch = useDispatch();
    const messages = useSelector((state) => state.reflectionBot.messages);

    const [hasLoaded, setHasLoaded] = useState(false);

    const reverseString = (str) => {
        return str.split("").reverse().join("");
    };

    const handleUserMessage = (userMessage) => {
        dispatch(addMessage(userMessage, 'You'));
        dispatch(addMessage(reverseString(userMessage), 'toB'));
    };

    useEffect(() => {
        setHasLoaded(true);

        if (messages.length == 0) {
            dispatch(addMessage(reverseString("Hello, I am Reflection Bot. Please talk to me."), 'Tob'));
        }
    }, [])

    return (
        <Box style={chatWindowContainer}>
            <MessageList style={{ flex: 1 }} messages={messages} hasLoaded={hasLoaded} setHasLoaded={setHasLoaded}/>
            <Box style={messageInputContainer}>
                <MessageInput onSendMessage={handleUserMessage} />
            </Box>
        </Box>
    );
}

export default ReflectionBot;