import { setError, setLoader, SET_ERROR, SET_LOADER } from "./ui.actions";

describe('Ui actions', () => {
    const entity = '[Fake-entity]';
    const state = true;

    it('should success send setLoader', () => {
        const expectedAction = {
            type: `${entity} ${SET_LOADER}`,
            payload: {
                state,
                entity
            }
        };

        expect(setLoader({ state, entity })).toEqual(expectedAction)
    });

    it('should success send setError', () => {
        const expectedAction = {
            type: `${entity} ${SET_ERROR}`,
            payload: {
                state,
                entity
            }
        };

        expect(setError({ state, entity })).toEqual(expectedAction)
    });
});