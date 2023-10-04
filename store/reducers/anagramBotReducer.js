const initialState = {
    messages: [],
    firstLoad: true,
    currentWord: '',
}

const anagramBotReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_ANAGRAMBOT_MESSAGE':
            return {
                ...state,
                messages: [...state.messages, { text: action.payload.message, user: action.payload.sender }],
            };
        case 'CHANGE_FIRST_LOAD':
            return {
                ...state,
                firstLoad: action.payload,
            };
        case 'ADD_CURRENT_WORD':
            return {
                ...state,
                currentWord: action.payload,
            }
        default:
            return state;
    }
}

export default anagramBotReducer;
