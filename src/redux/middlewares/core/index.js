import actionSplitterMiddleware from './actionSplitter/actionSplitter.middleware'
import apiMiddleware from './api/api.middleware';

export const coreMiddleware = [
    actionSplitterMiddleware,
    apiMiddleware
];
