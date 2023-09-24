import { useState, useEffect } from 'react';
import { messageInputContainer, chatWindowContainer } from '@/styles/chatWindowStyles';
import { Box } from '@mui/material';
import MessageList from '@/components/MessageList';
import MessageInput from '@/components/MessageInput';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage, changeFirstLoad } from '../store/actions/anagramBotActions';
import { wordList, randomBotResponse } from '@/utils/anagramBotUtils';
import styles from '@/styles/anagramBot.module.css';

const AnagramBot = () => {
    const dispatch = useDispatch();
    const messages = useSelector((state) => state.anagramBot.messages);
    const firstLoad = useSelector((state) => state.anagramBot.firstLoad);
    const [currentWord, setCurrentWord] = useState(null);

    const scrambleWord = (word) => {
        const characters = word.split('');

        for (let i = characters.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [characters[i], characters[j]] = [characters[j], characters[i]];
        }
      
        return characters.join('');
    };
    
    const startGame = () => {
        const randomIndex = Math.floor(Math.random() * wordList.length);
        const selectedWord = wordList[randomIndex];

        const scrambledWord = scrambleWord(selectedWord.word);

        const clueElement = (
            <span>
                Clue - {' '}
                <span className={styles.clue}>
                    {selectedWord.clue}
                </span>
            </span>
          );

        dispatch(addMessage(`${scrambledWord}`, 'Bot'));
        dispatch(addMessage(clueElement, 'Bot'));

        setCurrentWord(selectedWord.word);
    };

    useEffect(() => {
        if (messages.length === 0) {
            dispatch(changeFirstLoad(true));
        }
    }, [messages])
    
    useEffect(() => {
        if (firstLoad) {
            dispatch(addMessage("Hello there! 👋🤓", 'Bot'));
            dispatch(addMessage("I'm in a bit of a pickle right now...", 'Bot'));
            dispatch(addMessage("You see, I have a list of words in my database but they have gotten all scrambled...", 'Bot'));
            dispatch(addMessage("Can you help me??", 'Bot'));
            dispatch(addMessage("Here is the first word:", 'Bot'));
            setTimeout(() => {
                dispatch(changeFirstLoad(false));
            }, 0);
            startGame()
        }
    }, [firstLoad])

    const handleUserMessage = (userMessage) => {
        dispatch(addMessage(userMessage, 'You'));
        if (userMessage.toLowerCase() === currentWord.toLowerCase()) {
            dispatch(addMessage(randomBotResponse(), 'Bot'));
            dispatch(addMessage("Here's another:", 'Bot'));
            startGame();
        } else if (userMessage.toLowerCase() === 'skip') {
            dispatch(addMessage("Okay, we'll try another one.", 'Bot'));
            startGame();
        } else {
            dispatch(addMessage("Sorry, that's incorrect. Try again or type 'skip' to try another one.", 'Bot'));
        }
    };

    return (
        <Box style={chatWindowContainer}>
            <MessageList style={{ flex: 1 }} messages={messages} firstLoad={firstLoad} />
            <Box style={messageInputContainer}>
                <MessageInput onSendMessage={handleUserMessage} />
            </Box>
        </Box>
    );
};

export default AnagramBot;
