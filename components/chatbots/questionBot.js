export const foodExtractor = (food) => {
    if (food.includes('like ')) {
        return food.split('like ')[1];
    } else if (food.includes('is ')) {
        return food.split('is ')[1];
    } else {
        return food;
    }
};

export const animalExtractor = (animal) => {
    if (animal.includes('are ')) {
        return animal.split('are ')[1];
    } else if (animal.includes('like ')) {
        return animal.split('like ')[1];
    } else if (animal.includes('is ')) {
        return animal.split('is ')[1];
    } else {
        return animal;
    }
};

export const colourExtractor = (colour) => {
    if (colour.includes('like ')) {
        return colour.split('like ')[1];
    } else if (colour.includes('is ')) {
        return colour.split('is ')[1];
    } else {
        return colour;
    }
};

export const foodReasonExtractor = (foodReason) => {
    const foodReasonFirstSeven = foodReason.toLowerCase().split(' ').slice(0,7);
    let foodReasonExtracted = '';
    if ( foodReasonFirstSeven.includes('is') ) {
        foodReasonExtracted = foodReason.substring(foodReason.indexOf('is') + 3)
        return foodReasonExtracted.toLowerCase();
    } if ( foodReasonFirstSeven.includes('it') ) {
        foodReasonExtracted = foodReason.substring(foodReason.indexOf('it') + 3)
        return foodReasonExtracted.toLowerCase();
    }  else if ( foodReasonFirstSeven.includes("it's") ) {
        foodReasonExtracted = foodReason.substring(foodReason.indexOf("it's") + 5)
        return foodReasonExtracted.toLowerCase();
    }
    return foodReason.toLowerCase();
};

export const animalReasonExtractor = (animalReason) => {
    const animalReasonFirstSeven = animalReason.toLowerCase().split(' ').slice(0,7);
    let animalReasonExtracted = '';
    if ( animalReasonFirstSeven.includes('is') ) {
        animalReasonExtracted = animalReason.substring(animalReason.indexOf('is') + 3)
        return animalReasonExtracted.toLowerCase();
    } if ( animalReasonFirstSeven.includes('it') ) {
        animalReasonExtracted = animalReason.substring(animalReason.indexOf('it') + 3)
        return animalReasonExtracted.toLowerCase();
    }  else if ( animalReasonFirstSeven.includes("it's") ) {
        animalReasonExtracted = animalReason.substring(animalReason.indexOf("it's") + 5)
        return animalReasonExtracted.toLowerCase();
    } else if ( animalReasonFirstSeven.includes("are") ) {
        animalReasonExtracted = animalReason.substring(animalReason.indexOf('are') + 4)
        return animalReasonExtracted.toLowerCase();
    }
    return animalReason;
};

export const colourReasonExtractor = (colourReason) => {
    const colourReasonFirstSeven = colourReason.toLowerCase().split(' ').slice(0,7);
    let colourReasonExtracted;
    if ( colourReasonFirstSeven.includes('is') ) {
        colourReasonExtracted = colourReason.substring(colourReason.indexOf('is') + 3)
        return colourReasonExtracted.toLowerCase();
    } if ( colourReasonFirstSeven.includes('it') ) {
        colourReasonExtracted = colourReason.substring(colourReason.indexOf('it') + 3)
        return colourReasonExtracted.toLowerCase();
    } else if ( colourReasonFirstSeven.includes("it's") ) {
        colourReasonExtracted = colourReason.substring(colourReason.indexOf("it's") + 5)
        return colourReasonExtracted.toLowerCase();
    }
    return colourReason;
};