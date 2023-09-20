const initialState = {
    messages: [],
}

const reflectionBotReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_REFLECTIONBOT_MESSAGE':
            return {
                ...state,
                messages: [...state.messages, { text: action.payload.message, user: action.payload.sender }],
            };
        default:
            return state;
    }
}

export default reflectionBotReducer;
