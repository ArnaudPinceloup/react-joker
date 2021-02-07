const actionSplitterMiddleware = () => next => action => {
    Array.isArray(action) ? action.forEach(_action => next(_action)) : next(action)
};

export default actionSplitterMiddleware