import { useState, useEffect, use } from 'react';
import { Box } from '@mui/material';
import { useDispatch } from 'react-redux';
import { userMessageStyle, friendMessageStyle, loadingMessageStyle } from '@/styles/chatWindowStyles';
import { changeFirstLoad, resetConversation } from '../store/actions/questionBotActions';
import styles from '@/styles/messageList.module.css';

const MessageList = ({ messages, firstLoad, restartFlag, setRestartFlag }) => { 
  const dispatch = useDispatch();
  const [displayedMessages, setDisplayedMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [firstLoadTrigger, setFirstLoadTrigger] = useState(true);

  const addToDisplayedMessages = async () => {
    setIsLoading(true);
    for (let i = displayedMessages.length; i < messages.length; i++) {
      const message = messages[i];

      setDisplayedMessages((prevDisplayedMessages) => [
        ...prevDisplayedMessages,
        message,
      ]);

      if (message.user !=='You') {
        const randomTimeout = Math.floor(Math.random() * 500) + 500;
        await new Promise((resolve) => setTimeout(resolve, randomTimeout));
      }
    }
    setIsLoading(false);
  };

  useEffect(() => {
    if (!firstLoad && !firstLoadTrigger) {
      addToDisplayedMessages();
    }
  }, [messages])

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
    console.log(firstLoad, "EEEEEEEEEEEEEEEEEEEEEEEEEE", firstLoadTrigger);
    if (restartFlag) {
      setDisplayedMessages([]);
      setFirstLoadTrigger(true);
    }
    if ((firstLoad || !firstLoadTrigger)) {
      addToDisplayedMessages();
    }
  }, [restartFlag, firstLoadTrigger]);

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
