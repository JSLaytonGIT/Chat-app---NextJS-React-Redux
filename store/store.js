import { configureStore } from '@reduxjs/toolkit';
import questionBotReducer from './reducers/questionBotReducer';
import reflectionBotReducer from './reducers/reflectionBotReducer';

const store = configureStore({
    reducer: {
        questionBot: questionBotReducer,
        reflectionBot: reflectionBotReducer
    }
});

export default store;