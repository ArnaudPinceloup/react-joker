import { getErrorEntity, getLoadingEntity } from "./ui.selectors";

describe('Ui selectors', () => {
    const entity = '[Fake-entity]';

    const state = {
        ui: {
            loading: {
                [entity]: true
            },
            error: {
                [entity]: false
            }
        }
    };

    it('should return loading from entity in state', () => {
        const result = getLoadingEntity(state, entity)

        expect(result).toEqual(state.ui.loading[entity])
    });

    it('should return error from entity in state', () => {
        const result = getErrorEntity(state, entity)

        expect(result).toEqual(state.ui.error[entity])
    });
});