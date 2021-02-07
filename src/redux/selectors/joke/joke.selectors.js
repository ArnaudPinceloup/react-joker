import { createSelector } from 'reselect';

const jokeSelector = state => state.joke;

export const getSetupJoke = createSelector(
    jokeSelector,
    joke => joke.setup
);

export const getPunchlineJoke = createSelector(
    jokeSelector,
    joke => joke.punchline
);