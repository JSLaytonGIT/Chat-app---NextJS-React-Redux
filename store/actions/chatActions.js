export const addMessage = (message, sender) => ({
    type: 'ADD_MESSAGE',
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