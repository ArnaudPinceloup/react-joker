import actionSplitterMiddleware from "./actionSplitter.middleware";

describe('Action Splitter middleware', () => {
    const next = jest.fn()
    const createMiddleware = action => actionSplitterMiddleware()(next)(action)

    it('should send next function once time', () => {
        const action = {
            type: 'fake-type',
            payload: 'fake-payload'
        }
        
        createMiddleware(action);
        expect(next).toHaveBeenCalledTimes(1);
    });

    it('should send next function as many times as there are actions', () => {
        const action = [
            {
                type: 'fake-type-one',
                payload: 'fake-payload-one'
            },
            {
                type: 'fake-type-two',
                payload: 'fake-payload-two'
            },
            {
                type: 'fake-type-three',
                payload: 'fake-payload-three'
            }
        ]
        
        createMiddleware(action);
        expect(next).toHaveBeenCalledTimes(action.length);
    });
});