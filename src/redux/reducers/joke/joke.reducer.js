import { SET_JOKE } from '../../actions/app/joke/joke.actions';

export const jokeReducer = (state = {}, action = {}) => {
    const { type, payload } = action

    return type === SET_JOKE ? payload.data : state 
}