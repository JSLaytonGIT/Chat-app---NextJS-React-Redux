export const addMessage = (message, sender) => ({
    type: 'ADD_ANAGRAMBOT_MESSAGE',
    payload: { message, sender },
});

export const changeFirstLoad = (response) => ({
    type: 'CHANGE_FIRST_LOAD',
    payload: response,
});

export const addCurrentWord = (message, sender) => ({
    type: 'ADD_CURRENT_WORD',
    payload: { message, sender },
});