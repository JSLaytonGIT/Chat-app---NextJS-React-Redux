const initialState = {
    messages: [],
    food: '',
    foodReason: '',
    animal: '',
    animalReason: '',
    colour: '',
    colourReason: '',
    questionBotChain: 0,
    firstLoad: true,
}

const questionBotReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_QUESTIONBOT_MESSAGE':
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
                animal: action.payload,
            };
        case 'ADD_ANIMAL_REASON':
            return {
                ...state,
                animalReason: action.payload,
            };
        case 'ADD_COLOUR':
            console.log("Adding colour: ", action.payload);
            return {
                ...state,
                colour: action.payload,
            };
        case 'ADD_COLOUR_REASON':
            console.log("Adding colour Reason: ", action.payload);
            return {
                ...state,
                colourReason: action.payload,
            };
        case 'CHANGE_QUESTIONBOT_CHAIN':
            console.log("Changing question bot chain: ", action.payload);
            return {
                ...state,
                questionBotChain: action.payload,
            };
        case 'CHANGE_FIRST_LOAD':
            console.log("Changing first load: ", action.payload);
            return {
                ...state,
                firstLoad: action.payload,
            };
        default:
            return state;
    }
}

export default questionBotReducer;
