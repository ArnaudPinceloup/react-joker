import { getPunchlineJoke, getSetupJoke } from "./joke.selectors";

describe('Joke selectors', () => {
    const state = {
        joke: {
            id: 23,
            type: "programming",
            setup: "Why do programmers always mix up Halloween and Christmas?",
            punchline: "Because Oct 31 == Dec 25"
        }
    };

    it('should return setup from joke in state', () => {
        const result = getSetupJoke(state)

        expect(result).toEqual(state.joke.setup)
    });

    it('should return punchline from joke in state', () => {
        const result = getPunchlineJoke(state)

        expect(result).toEqual(state.joke.punchline)
    });
});