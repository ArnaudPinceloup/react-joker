import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import { AppReducers } from '../reducers';
import { coreMiddleware } from '../middlewares/core';
import { appMiddleware } from '../middlewares/app';

const middlewares = [...appMiddleware, ...coreMiddleware];

process.env.NODE_ENV !== 'production' && middlewares.push(logger);

const stores = createStore(
    AppReducers,
    compose(
        applyMiddleware(...middlewares)
    )
);

export default stores