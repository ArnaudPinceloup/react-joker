export const JOKE = '[Joke]';

export const FETCH_JOKE = `${JOKE} Fetch`;
export const SET_JOKE = `${JOKE} Set`;

export const fetchJoke = ({ query }) => ({
    type: FETCH_JOKE,
    payload: {
        url: query
    }
});

export const setJoke = ({ data }) => ({
    type: SET_JOKE,
    payload: {
        data
    }
});