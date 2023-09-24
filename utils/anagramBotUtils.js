export const wordList = [
    { word: 'banana', clue: "It's a Fruit" },
    { word: 'rocket', clue: 'Flies into space' },
    { word: 'yellow', clue: 'A colour' },
    { word: 'purple', clue: 'Mix of red and blue' },
    { word: 'guitar', clue: 'Musical instrument' },
    { word: 'pocket', clue: 'Small pouch in clothing' },
    { word: 'turtle', clue: 'Slow-moving reptile' },
    { word: 'dragon', clue: 'Mythical fire-breathing creature' },
    { word: 'candle', clue: 'Source of light' },
    { word: 'window', clue: 'Lets in light' },
    { word: 'monitor', clue: 'Displays images' },
    { word: 'diamond', clue: 'Gemstone' },
    { word: 'bicycle', clue: 'Transportation' },
    { word: 'flamingo', clue: 'A bird' },
    { word: 'weather', clue: 'Changes daily' },
    { word: 'journey', clue: 'There and back again' },
    { word: 'success', clue: 'Achieving your goals' },
    { word: 'harmony', clue: 'Pleasant combination of sounds' },
    { word: 'tropical', clue: 'Warm, humid climate' },
    { word: 'whistle', clue: 'High-pitched' },
    { word: 'apple', clue: 'A fruit' },
    { word: 'dance', clue: 'Movement' },
    { word: 'smile', clue: 'An expression' },
    { word: 'cloud', clue: 'Fluffy' },
    { word: 'ocean', clue: 'Salty' },
    { word: 'tiger', clue: 'Striped' },
    { word: 'maple', clue: 'A type of tree' },
    { word: 'grape', clue: 'A fruit' },
    { word: 'leafy', clue: 'Abundant with green' },
    { word: 'beach', clue: 'Sandy' },
    { word: 'elephant', clue: 'Large' },
    { word: 'triangle', clue: 'A shape' },
    { word: 'umbrella', clue: 'Keeps you dry' },
    { word: 'backpack', clue: 'Carries your belongings' },
    { word: 'calendar', clue: 'Helps with dates' },
    { word: 'chocolate', clue: 'Sweet treat' },
    { word: 'telephone', clue: 'A device' },
    { word: 'mountain', clue: 'Massive' },
    { word: 'computer', clue: 'Electronic' },
];

export const randomBotResponse = () => {
    const randomNumber = Math.random();
  
    if (randomNumber < 1 / 3) {
      return 'Fantastic!';
    } else if (randomNumber < 2 / 3) {
      return 'Brilliant!';
    } else {
      return 'Wonderful!';
    }
};
  