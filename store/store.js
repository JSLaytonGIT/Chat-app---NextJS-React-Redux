import { configureStore } from '@reduxjs/toolkit';
import questionBotReducer from './reducers/questionBotReducer';

const store = configureStore({
    reducer: {
        questionBot: questionBotReducer
    }
});

export default store;