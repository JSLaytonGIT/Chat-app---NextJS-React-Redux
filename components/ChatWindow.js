import { useState, useEffect } from 'react';
import { messageInputContainer, chatWindowContainer, gradientOverlay } from '@/styles/chatWindowStyles';
import { Box } from '@mui/material';
import MessageList from './MessageList';
import MessageInput from './MessageInput';
import { foodExtractor, animalExtractor, colourExtractor, foodReasonExtractor, animalReasonExtractor, colourReasonExtractor } from '@/components/chatbots/questionBot';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage, addFood, addFoodReason, addAnimal, addAnimalReason, addColour, addColourReason } from '../store/actions/questionBotActions';

const ChatWindow = () => {
    const dispatch = useDispatch();
    const food = useSelector((state) => state.questionBot.food);
    const foodReason = useSelector((state) => state.questionBot.foodReason);
    const animal = useSelector((state) => state.questionBot.animal);
    const animalReason = useSelector((state) => state.questionBot.animalReason);
    const colour = useSelector((state) => state.questionBot.colour);
    const colourReason = useSelector((state) => state.questionBot.colourReason);

    const [questionBotChain, setQuestionBotChain] = useState(0);

    useEffect(() => {
        if (questionBotChain == 0) {
            dispatch(addMessage("What is your favorite colour?", 'Bot'));
        }
    }, [])

    const handleUserMessage = (userMessage) => {
        dispatch(addMessage(userMessage, 'You'));
        if (questionBotChain == 0) {
            const extractedColour = colourExtractor(userMessage);
            dispatch(addColour(extractedColour));
            dispatch(addMessage(`Nice! ${extractedColour} is a great colour!`, 'Bot'));
            dispatch(addMessage(`Why is ${extractedColour} your favorite colour?`, 'Bot'));
            setQuestionBotChain(1);
        } else if (questionBotChain == 1) {
            dispatch(addColourReason(colourReasonExtractor(userMessage)));
            dispatch(addMessage("Very interesting... I'll keep that in mind :D", 'Bot'));
            dispatch(addMessage("Next question...", 'Bot'));
            dispatch(addMessage("What is your favourite animal?", 'Bot'));
            setQuestionBotChain(2);
        } else if (questionBotChain == 2) {
            const extractedAnimal = animalExtractor(userMessage);
            dispatch(addAnimal(extractedAnimal));
            if (extractedAnimal.charAt(extractedAnimal.length-1) != 's') {
                dispatch(addMessage(`Really cool! ${extractedAnimal}s are the best!`, 'Bot'));
                dispatch(addMessage(`Why are ${extractedAnimal}s your favorite animal?`, 'Bot'));
            } else {
                dispatch(addMessage(`Really cool! ${extractedAnimal} are the best!`, 'Bot'));
                dispatch(addMessage(`Why are ${extractedAnimal} your favorite animal?`, 'Bot'));
            }
            setQuestionBotChain(3);
        } else if (questionBotChain == 3) {
            dispatch(addAnimalReason(animalReasonExtractor(userMessage)));
            dispatch(addMessage("Cool! I'll remember that :D", 'Bot'));
            dispatch(addMessage("Next Question...", 'Bot'));
            dispatch(addMessage("What is your favourite Food?", 'Bot'));
            setQuestionBotChain(4);
        } else if (questionBotChain == 4) {
            const extractedFood = foodExtractor(userMessage);
            dispatch(addFood(extractedFood));
            if (extractedFood.charAt(extractedFood.length-1) != 's') {
                dispatch(addMessage(`Great choice. ${extractedFood} is delicious.`, 'Bot'));
                dispatch(addMessage(`Why is ${extractedFood} your favorite food?`, 'Bot'));
            } else {
                dispatch(addMessage(`Great choice. ${extractedFood} are delicious.`, 'Bot'));
                dispatch(addMessage(`Why are ${extractedFood} your favorite food?`, 'Bot'));
            }
            setQuestionBotChain(5);
        } else if (questionBotChain == 5) {
            const extractedFoodReason = foodReasonExtractor(userMessage);
            dispatch(addFoodReason(extractedFoodReason));
            dispatch(addMessage("Delicious!", 'Bot'));
            dispatch(addMessage("Now...", 'Bot'));
            dispatch(addMessage("I'll tell you what all this means...", 'Bot'));
            dispatch(addMessage(`Your favourite colour was ${colour}.`, 'Bot'));
            dispatch(addMessage(`This is how you see yourself.`, 'Bot'));
            dispatch(addMessage(`You have the following qualities: ${colourReason}.`, 'Bot'));
            if (animal.charAt(animal.length-1) != 's') {
                dispatch(addMessage(`Your favourite animals are ${animal}s.`, 'Bot'));
            } else {
                dispatch(addMessage(`Your favourite animals are ${animal}.`, 'Bot'));
            }
            dispatch(addMessage(`This is your prefered partner.`, 'Bot'));
            dispatch(addMessage(`You would be happy with someone who has the folling attributes: ${animalReason}.`, 'Bot'));
            dispatch(addMessage(`And your favourite food was ${food}`, 'Bot'));
            dispatch(addMessage(`This is kind of work you'd like to pursue.`, 'Bot'));
            dispatch(addMessage(`You would enjoy something that has the following attributes: ${extractedFoodReason}.`, 'Bot'));
            dispatch(addMessage(`I hope you enjoyed that!`, 'Bot'));
            dispatch(addMessage(`Disclaimer - this is all a bit of fun, not psychology.`, 'Bot'));
            setQuestionBotChain(6);
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
