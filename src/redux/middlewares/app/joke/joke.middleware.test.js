import { FETCH_JOKE, setJoke } from "../../../actions/app/joke/joke.actions";
import { setError, setLoader } from "../../../actions/app/ui/ui.actions";
import { apiRequest, API_ERROR, API_SUCCESS } from "../../../actions/core/api/api.actions";
import { jokeMiddleware } from "./joke.middleware";

describe('Joke middleware', () => {
    const next = jest.fn()
    const createMiddleware = action => jokeMiddleware()(next)(action)

    it('should send action for other middlewares with next function', () => {
        const action = {
            type: FETCH_JOKE,
            payload: {
                url: 'http://fake-url.com'
            }
        };

        createMiddleware(action);
        expect(next).toHaveBeenCalledWith(action);
    });

    it('should send the right array of actions when type action corresponds to FETCH_JOKE', () => {
        const action = {
            type: FETCH_JOKE,
            payload: {
                url: 'http://fake-url.com'
            }
        };

        const expectedArrayActions = [
            apiRequest({ method: 'GET', url: action.payload.url, entity: FETCH_JOKE }),
            setLoader({ state: true, entity: FETCH_JOKE })
        ]

        createMiddleware(action);
        expect(next).toHaveBeenCalledWith(expectedArrayActions);
    });

    it('should send the right array of actions when type action corresponds to FETCH_JOKE API_SUCCESS', () => {
        const action = {
            type: `${FETCH_JOKE} ${API_SUCCESS}`,
            payload: {
                data: [
                    {
                        id: 25,
                        type: "programming",
                        setup: "How many programmers does it take to change a lightbulb?",
                        punchline: "None that's a hardware problem"
                    }
                ]
            }
        };

        const expectedArrayActions = [
            setJoke({ data: action.payload.data[0] }),
            setLoader({ state: false, entity: FETCH_JOKE }),
            setError({ state: false, entity: FETCH_JOKE })
        ]

        createMiddleware(action);
        expect(next).toHaveBeenCalledWith(expectedArrayActions);
    });

    it('should send the right array of actions when type action corresponds to FETCH_JOKE API_ERROR', () => {
        const action = {
            type: `${FETCH_JOKE} ${API_ERROR}`,
            payload: {
                data: {
                    status: 404,
                    message: 'Not found'
                }
            }
        };

        const expectedArrayActions = [
            setLoader({ state: false, entity: FETCH_JOKE }),
            setError({ state: true, entity: FETCH_JOKE })
        ]

        createMiddleware(action);
        expect(next).toHaveBeenCalledWith(expectedArrayActions);
    });
});