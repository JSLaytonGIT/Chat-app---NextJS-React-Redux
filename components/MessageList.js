import { Box } from '@mui/material';
import { useSelector } from 'react-redux';
import { userMessageStyle, friendMessageStyle } from '@/styles/chatWindowStyles';

const MessageList = () => {
  const messages = useSelector((state) => state.chat.messages);
  console.log(messages);

  return (
    <Box>
      {messages.map((message, index) => (
        <div key={index} style={message.user === 'You' ? userMessageStyle : friendMessageStyle}>
          <strong>{message.user}:</strong> {message.text}
        </div>
      ))}
    </Box>
  );
};

export default MessageList;
