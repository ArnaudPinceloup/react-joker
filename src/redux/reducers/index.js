import { combineReducers } from 'redux'
import { jokeReducer } from './joke/joke.reducer';
import { uiReducer } from './ui/ui.reducer';

export const AppReducers = combineReducers({
    ui: uiReducer,
    joke: jokeReducer
});