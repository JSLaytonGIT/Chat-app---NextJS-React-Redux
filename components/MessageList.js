import { useState, useEffect, use } from 'react';
import { Box } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { userMessageStyle, friendMessageStyle, loadingMessageStyle } from '@/styles/chatWindowStyles';
import { changeFirstLoad } from '../store/actions/questionBotActions';
import styles from '@/styles/messageList.module.css';

const MessageList = ({ hasLoaded, setHasLoaded }) => { 
  const dispatch = useDispatch();
  const messages = useSelector((state) => state.questionBot.messages);
  const firstLoad = useSelector((state) => state.questionBot.firstLoad);
  const [displayedMessages, setDisplayedMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [firstLoadTrigger, setFirstLoadTrigger] = useState(true);

  useEffect(() =>{
    if (!firstLoad && firstLoadTrigger) {
      setDisplayedMessages(messages);
    }
    if (messages != 0) {
      setFirstLoadTrigger(false);
      dispatch(changeFirstLoad(false));
    }
  }, [messages, firstLoadTrigger])

  useEffect(() => {
    const addToDisplayedMessages = async () => {
      setIsLoading(true);
      for (let i = displayedMessages.length; i < messages.length; i++) {
        const message = messages[i];

        setDisplayedMessages((prevDisplayedMessages) => [
          ...prevDisplayedMessages,
          message,
        ]);

        if (message.user !=='You') {
          await new Promise((resolve) => setTimeout(resolve, 1000));
        }
      }
      setIsLoading(false);
    };
    if (firstLoad || !firstLoadTrigger) {
      addToDisplayedMessages(); 
    }
  }, [messages]);

  useEffect(() => {
    console.log("MESSAGESSSSSSSSS", messages);
    console.log("DISPLAAAAAAAAYED", displayedMessages);
  }, [messages, displayedMessages]);

  return (
    <Box>
      {displayedMessages.map((message, index) => (
        <div key={index} style={message?.user === 'You' ? userMessageStyle : ( index == displayedMessages?.length - 1 && isLoading ? loadingMessageStyle : friendMessageStyle)}>
          {isLoading && message?.user != 'You' && index == displayedMessages?.length - 1 ? (
            <div className={styles.bouncingLoader}>
              <div></div>
              <div></div>
              <div></div>
            </div>
          ) : (
            <div>
              <strong>{message?.user}: </strong>
              {message?.text}
            </div>
          )}
        </div>
      ))}
    </Box>
  );
};

export default MessageList;
