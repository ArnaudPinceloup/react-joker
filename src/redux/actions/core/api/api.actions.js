export const API_REQUEST = 'API_REQUEST';
export const API_SUCCESS = 'API_SUCCESS';
export const API_ERROR = 'API_ERROR';

export const apiRequest = ({body, method, url, entity, meta}) => ({
    type: `${entity} ${API_REQUEST}`,
    payload: {
        body,
        method,
        url,
        entity
    },
    meta
});

export const apiSuccess = ({response, entity}) => ({
    type: `${entity} ${API_SUCCESS}`,
    payload: {
        data: response
    }
});

export const apiError = ({error, entity}) => ({
    type: `${entity} ${API_ERROR}`,
    payload: {
        data: error
    }
})