export const UI = '[Ui]';

export const SET_LOADER = `${UI} SET_LOADER`;
export const SET_ERROR = `${UI} SET_ERROR`;

export const setLoader = ({ state, entity }) => ({
    type: `${entity} ${SET_LOADER}`,
    payload: {
        state,
        entity
    }
});

export const setError = ({ state, entity }) => ({
    type: `${entity} ${SET_ERROR}`,
    payload: {
        state,
        entity
    }
});