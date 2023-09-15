import { messageInputContainer, chatWindowContainer } from '@/styles/chatWindowStyles';
import { Box } from '@mui/material';
import MessageList from './MessageList';
import MessageInput from './MessageInput';

const ChatWindow = () => {
  return (
    <Box style={chatWindowContainer}>
      <MessageList style={{ flex: 1 }} />
      <Box style={messageInputContainer}>
        <MessageInput />
      </Box>
    </Box>
  );
};

export default ChatWindow;
