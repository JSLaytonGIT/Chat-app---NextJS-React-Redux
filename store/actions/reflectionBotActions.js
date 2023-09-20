export const addMessage = (message, sender) => ({
    type: 'ADD_REFLECTIONBOT_MESSAGE',
    payload: { message, sender },
});
