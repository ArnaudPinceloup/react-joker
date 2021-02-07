import { createSelector } from 'reselect';

/* Loading */ 
const loadingSelector = (state, entity) => state.ui.loading[entity];

export const getLoadingEntity = createSelector(
    loadingSelector,
    loading => loading
);

/* Error */
const errorSelector = (state, entity) => state.ui.error[entity];

export const getErrorEntity = createSelector(
    errorSelector,
    error => error
);