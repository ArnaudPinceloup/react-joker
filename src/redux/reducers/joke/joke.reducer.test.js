import { SET_JOKE } from "../../actions/app/joke/joke.actions";
import { jokeReducer } from "./joke.reducer";

describe('Joke reducer', () => {
    const initialState = {};

    const data = {
        id: 18,
        type: "programming",
        setup: "Why did the programmer quit his job?",
        punchline: "Because he didn't get arrays."
    };

    it('should return empty object in state if the action type does not match SET_JOKE', () => {
        const action = {
            type: 'Fake-Type-Action',
            payload: {
                data
            }
        };

        expect(jokeReducer(initialState, action)).toEqual(initialState)
    });

    it('should return data in state if the action type does match SET_JOKE', () => {
        const action = {
            type: SET_JOKE,
            payload: {
                data
            }
        };

        expect(jokeReducer(initialState, action)).toEqual(data)
    });
});