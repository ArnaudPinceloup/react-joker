import { apiError, apiRequest, apiSuccess, API_ERROR, API_REQUEST, API_SUCCESS } from "./api.actions";

describe('Api actions', () => {
    const entity = '[Fake-entity]';

    it('should success send apiRequest', () => {
        const [method, url] = ['POST', 'http://fake-url.com'];
        const body = {firstName: 'Arnaud', lastName: 'Pinceloup'};
        const meta = {normalize: 'lastName'};

        const expectedAction = {
            type: `${entity} ${API_REQUEST}`,
            payload: {
                body,
                method,
                url,
                entity
            },
            meta
        };

        expect(apiRequest({ body, method, url, entity, meta })).toEqual(expectedAction);
    });

    it('should success send apiSuccess', () => {
        const response = {
            data: [
                {
                    id: 1,
                    firstName: 'Arnaud',
                    lastname: 'Pinceloup'
                },
                {
                    id: 2,
                    firstName: 'Chuck',
                    lastname: 'Norris'
                }
            ]
        };

        const expectedAction = {
            type: `${entity} ${API_SUCCESS}`,
            payload: {
                data: response
            }
        };

        expect(apiSuccess({ response, entity })).toEqual(expectedAction);
    });

    it('should success send apiError', () => {
        const error = {
            data: {
                status: 404,
                message: 'Not found'
            }
        };

        const expectedAction = {
            type: `${entity} ${API_ERROR}`,
            payload: {
                data: error
            }
        };

        expect(apiError({ error, entity })).toEqual(expectedAction);
    });
});