import { configureStore } from '@reduxjs/toolkit';
import questionBotReducer from './reducers/questionBotReducer';
import reflectionBotReducer from './reducers/reflectionBotReducer';
import anagramBotReducer from './reducers/anagramBotReducer';

const store = configureStore({
    reducer: {
        questionBot: questionBotReducer,
        reflectionBot: reflectionBotReducer,
        anagramBot: anagramBotReducer,
    }
});

export default store;