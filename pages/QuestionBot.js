import { useState, useEffect } from 'react';
import { messageInputContainer, chatWindowContainer } from '@/styles/chatWindowStyles';
import { Box } from '@mui/material';
import MessageList from '@/components/MessageList';
import MessageInput from '@/components/MessageInput';
import { foodExtractor, animalExtractor, colourExtractor, foodReasonExtractor, animalReasonExtractor, colourReasonExtractor } from '@/components/chatbots/questionBot';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage as adMessage, addFood, addFoodReason, addAnimal, addAnimalReason, addColour, addColourReason, changeQuestionBotChain } from '../store/actions/questionBotActions';

const QuestionBot = () => {
    const dispatch = useDispatch();
    const food = useSelector((state) => state.questionBot.food);
    const foodReason = useSelector((state) => state.questionBot.foodReason);
    const animal = useSelector((state) => state.questionBot.animal);
    const animalReason = useSelector((state) => state.questionBot.animalReason);
    const colour = useSelector((state) => state.questionBot.colour);
    const colourReason = useSelector((state) => state.questionBot.colourReason);
    const questionBotChainStore = useSelector((state) => state.questionBot.questionBotChain);
    const messages = useSelector((state) => state.questionBot.messages);

    const [questionBotChainLocal, setQuestionBotChainLocal] = useState(questionBotChainStore);
    
    const setQuestionBotChain = (id) => {
        dispatch(changeQuestionBotChain(id));
        setQuestionBotChainLocal(id);
    };

    const addMessage = (message, user) => {
        if (!messages?.some((msg) => msg.text === message)) {
          dispatch(adMessage(message, user));
        }
    };

    useEffect(() => {
        if (questionBotChainLocal === 0 ) {
            addMessage("Hello!", 'Bot');
            addMessage("My name is Question Bot.", 'Bot');
            addMessage("I'm here to ask you a few questions.", 'Bot');
            addMessage("Firstly... what is your favorite colour?", 'Bot');
        }
    }, [])

    const handleUserMessage = (userMessage) => {
        addMessage(userMessage, 'You');
        if (questionBotChainLocal === 0) {
            const extractedColour = colourExtractor(userMessage);
            dispatch(addColour(extractedColour));
            addMessage(`Nice! ${extractedColour} is a great colour!`, 'Bot');
            addMessage(`Why is ${extractedColour} your favorite colour?`, 'Bot');
            setQuestionBotChain(1);
        } else if (questionBotChainLocal == 1) {
            dispatch(addColourReason(colourReasonExtractor(userMessage)));
            addMessage("Very interesting... I'll keep that in mind :D", 'Bot');
            addMessage("Next question...", 'Bot');
            addMessage("What is your favourite animal?", 'Bot');
            setQuestionBotChain(2);
        } else if (questionBotChainLocal == 2) {
            const extractedAnimal = animalExtractor(userMessage);
            dispatch(addAnimal(extractedAnimal));
            if (extractedAnimal.charAt(extractedAnimal.length-1) != 's') {
                addMessage(`Really cool! ${extractedAnimal}s are the best!`, 'Bot');
                addMessage(`Why are ${extractedAnimal}s your favorite animal?`, 'Bot');
            } else {
                addMessage(`Really cool! ${extractedAnimal} are the best!`, 'Bot');
                addMessage(`Why are ${extractedAnimal} your favorite animal?`, 'Bot');
            }
            setQuestionBotChain(3);
        } else if (questionBotChainLocal == 3) {
            dispatch(addAnimalReason(animalReasonExtractor(userMessage)));
            addMessage("Cool! I'll remember that :D", 'Bot');
            addMessage("Next Question...", 'Bot');
            addMessage("What is your favourite Food?", 'Bot');
            setQuestionBotChain(4);
        } else if (questionBotChainLocal == 4) {
            const extractedFood = foodExtractor(userMessage);
            dispatch(addFood(extractedFood));
            if (extractedFood.charAt(extractedFood.length-1) != 's') {
                addMessage(`Great choice. ${extractedFood} is delicious.`, 'Bot');
                addMessage(`Why is ${extractedFood} your favorite food?`, 'Bot');
            } else {
                addMessage(`Great choice. ${extractedFood} are delicious.`, 'Bot');
                addMessage(`Why are ${extractedFood} your favorite food?`, 'Bot');
            }
            setQuestionBotChain(5);
        } else if (questionBotChainLocal == 5) {
            const extractedFoodReason = foodReasonExtractor(userMessage);
            dispatch(addFoodReason(extractedFoodReason));
            addMessage("Delicious!", 'Bot');
            addMessage("Now...", 'Bot');
            addMessage("I'll tell you what all this means...", 'Bot');
            addMessage(`Your favourite colour was ${colour}.`, 'Bot');
            addMessage(`This is how you see yourself.`, 'Bot');
            addMessage(`You have the following qualities: ${colourReason}.`, 'Bot');
            if (animal.charAt(animal.length-1) != 's') {
                addMessage(`Your favourite animals are ${animal}s.`, 'Bot');
            } else {
                addMessage(`Your favourite animals are ${animal}.`, 'Bot');
            }
            addMessage(`This is your prefered partner.`, 'Bot');
            addMessage(`You would be happy with someone who has the folling attributes: ${animalReason}.`, 'Bot');
            addMessage(`And your favourite food was ${food}`, 'Bot');
            addMessage(`This is kind of work you'd like to pursue.`, 'Bot');
            addMessage(`You would enjoy something that has the following attributes: ${extractedFoodReason}.`, 'Bot');
            addMessage(`I hope you enjoyed that!`, 'Bot');
            addMessage(`Disclaimer - this is all a bit of fun, not psychology.`, 'Bot');
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

export default QuestionBot;
