export const addMessage = (message, sender) => ({
    type: 'ADD_ANAGRAMBOT_MESSAGE',
    payload: { message, sender },
});

export const changeFirstLoad = (response) => ({
    type: 'CHANGE_FIRST_LOAD',
    payload: response,
});