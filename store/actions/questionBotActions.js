export const addMessage = (message, sender) => ({
    type: 'ADD_QUESTIONBOT_MESSAGE',
    payload: { message, sender },
});

export const addFood = (response) => ({
    type: 'ADD_FOOD',
    payload: response,
  });
  
export const addFoodReason = (response) => ({
    type: 'ADD_FOOD_REASON',
    payload: response,
});

export const addAnimal = (response) => ({
    type: 'ADD_ANIMAL',
    payload: response,
});

export const addAnimalReason = (response) => ({
    type: 'ADD_ANIMAL_REASON',
    payload: response,
});

export const addColour = (response) => ({
    type: 'ADD_COLOUR',
    payload: response,
});

export const addColourReason = (response) => ({
    type: 'ADD_COLOUR_REASON',
    payload: response,
});

export const changeQuestionBotChain = (response) => ({
    type: 'CHANGE_QUESTIONBOT_CHAIN',
    payload: response,
});

export const changeFirstLoad = (response) => ({
    type: 'CHANGE_FIRST_LOAD',
    payload: response,
});