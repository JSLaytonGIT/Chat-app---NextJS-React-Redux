export const foodQuestion = (food) => {
    const foodResponse = `Great choice. ${food} are delicious.`;
  
    if (food.charAt(food.length-1) != 's') {
        food +='s'
    };
    if (food.includes('like ')) {
        return foodResponse(food.split('like ')[1]);
    } else if (food.includes('is ')) {
        return foodResponse(food.split('is ')[1]);
    } else {
        return foodResponse;
    }
};

export const animalsQuestion = (animal) => {
    const animalResponse = `Really cool! ${animal} are the best!`;
    
    if (animal.charAt(animal.length-1) != 's') {
        animal +='s'
    };
    if (animal.includes('like ')) {
        return foodResponse(animal.split('like ')[1]);
    } else if (animal.includes('is ')) {
        return foodResponse(animal.split('is ')[1]);
    } else {
        return animalResponse;
    }
};