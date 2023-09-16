const initialState = {
    messages: [],
    food: '',
    foodReason: '',
    animal: '',
    animalReason: '',
}

const chatReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_MESSAGE':
            return {
                ...state,
                messages: [...state.messages, { text: action.payload.message, user: action.payload.sender }],
            };
        case 'ADD_FOOD':
            return {
                ...state,
                food: action.payload,
            };
        case 'ADD_FOOD_REASON':
            return {
                ...state,
                foodReason: action.payload,
            };
        case 'ADD_ANIMAL':
            return {
                ...state,
                foodReason: action.payload,
            };
        case 'ADD_ANIMAL_REASON':
            return {
                ...state,
                foodReason: action.payload,
            };
        default:
            return state;
    }
}

export default chatReducer;
