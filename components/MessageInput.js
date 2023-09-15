import React, { useState } from 'react';
import { Box, TextField, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addMessage } from '../store/actions/chatActions';
import { inputField, sendButton } from '@/styles/chatWindowStyles'

const MessageInput = () => {
  const dispatch = useDispatch();
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
      dispatch(addMessage({ text: newMessage, user: 'You' }));
      setNewMessage('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <Box display="flex" mt={2}>
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Type your message..."
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        onKeyPress={handleKeyPress}
        InputProps={{ style: inputField }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={handleSendMessage}
        style={sendButton}
      >
        Send
      </Button>
    </Box>
  );
};

export default MessageInput;
