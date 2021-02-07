import React from 'react';
import { Provider } from 'react-redux';
import stores from './redux/stores';
import App from './components/App/App';

const AppProvider = () => {
    return (
        <Provider store={stores}>
            <App />
        </Provider>
    )
};

export default AppProvider;