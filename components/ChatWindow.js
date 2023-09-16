import React, { useState, useEffect } from 'react';
import { messageInputContainer, chatWindowContainer } from '@/styles/chatWindowStyles';
import { Box } from '@mui/material';
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import { foodQuestion, animalsQuestion } from '@/components/chatbots/questionBot';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage, addFood, addFoodReason, addAnimal, addAnimalReason } from '../store/actions/chatActions';

const ChatWindow = () => {
    const dispatch = useDispatch();
    const messages = useSelector((state) => state.chat.messages)
    const food = useSelector((state) => state.chat.food)
    const foodReason = useSelector((state) => state.chat.foodReason);

    const [questionBotChain, setQuestionBotChain] = useState(0);

    useEffect(() => {
        if (questionBotChain == 0) {
            const botQuestion = "What is your favorite food?";
            dispatch(addMessage(botQuestion, 'Bot'));
        }
    }, [dispatch]);

    const handleUserMessage = (userMessage) => {
        dispatch(addMessage(userMessage, 'You'));
        if (questionBotChain == 0) {
            dispatch(addFood(userMessage));
            dispatch(addMessage(foodQuestion(userMessage), 'Bot'));
            dispatch(addMessage(`Why is ${userMessage} your favorite food?`, 'Bot'));
            setQuestionBotChain(1);
        } else if (questionBotChain == 1) {
            dispatch(addFoodReason(userMessage));
            dispatch(addMessage("Very interesting... I'll keep that in mind :D", 'Bot'))
            dispatch(addMessage("Now...", 'Bot'))
            dispatch(addMessage("What is your favourite animal?", 'Bot'))
            setQuestionBotChain(2);
        } else if (questionBotChain == 2) {
            dispatch(addAnimal(userMessage));
        }
    };

    return (
        <Box style={chatWindowContainer}>
          <MessageList style={{ flex: 1 }} />
          <Box style={messageInputContainer}>
              <MessageInput onSendMessage={handleUserMessage} />
          </Box>
        </Box>
    );
};

export default ChatWindow;
