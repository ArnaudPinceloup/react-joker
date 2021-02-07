import { fetchJoke, FETCH_JOKE, setJoke, SET_JOKE } from "./joke.actions";

describe('Joke actions', () => {

    it('should success send fetchJoke', () => {
        const query = 'http://fake-query.com';

        const expectedAction = {
            type: FETCH_JOKE,
            payload: {
                url: query
            }
        };

        expect(fetchJoke({ query })).toEqual(expectedAction);
    });

    it('should success send setJoke', () => {
        const data = {
            id: 24,
            type: "programming",
            setup: "A SQL query walks into a bar, walks up to two tables and asks...",
            punchline: "'Can I join you?'"
        };

        const expectedAction = {
            type: SET_JOKE,
            payload: {
                data
            }
        };

        expect(setJoke({ data })).toEqual(expectedAction);
    });
});