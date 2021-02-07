import { SET_ERROR, SET_LOADER } from "../../actions/app/ui/ui.actions";
import { initState, uiReducer } from "./ui.reducer";

describe('Ui reducer', () => {
    const entity = '[Fake-entity]';

    it('should return initState in state if the action type does not match', () => {
        const action = {
            type: 'Fake-Type-Action',
            payload: {
                state: true
            }
        };

        expect(uiReducer(initState, action)).toEqual(initState)
    });

    it('should return new state with entity and state in loading if the action type include SET_LOADER', () => {
        const action = {
            type: `${entity} ${SET_LOADER}`,
            payload: {
                state: true,
                entity
            }
        };

        const expectedState = {...initState, loading: {...initState.loading, [action.payload.entity]: action.payload.state}};

        expect(uiReducer(initState, action)).toEqual(expectedState);
    });

    it('should return new state with entity and state in error if the action type include SET_ERROR', () => {
        const action = {
            type: `${entity} ${SET_ERROR}`,
            payload: {
                state: false,
                entity
            }
        };

        const expectedState = {...initState, error: {...initState.error, [action.payload.entity]: action.payload.state}};

        expect(uiReducer(initState, action)).toEqual(expectedState);
    });
});