import { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { useSelector, shallowEqual } from 'react-redux';
import { userMessageStyle, friendMessageStyle, loadingMessageStyle, messageContainer } from '@/styles/chatWindowStyles';
import styles from '@/styles/messageList.module.css';


const MessageList = () => {
  const messages = useSelector((state) => state.questionBot.messages, shallowEqual);

  const [displayedMessages, setDisplayedMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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
          await new Promise((resolve) => setTimeout(resolve, 2000));
        }
      }
      setIsLoading(false);
    };

    addToDisplayedMessages();
  }, [messages]);

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
