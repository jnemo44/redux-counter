import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import './index.css';
import counterReducer from './store/reducers/counter';
import resultReducer from './store/reducers/result';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const rootReducer = combineReducers({
    ctr: counterReducer,
    res: resultReducer
});

// Middleware - Used for async code
// store is an input to a function
const logger = store => {
    // return another function that recieves the next argument
    return next => {
        // return another function that recieves action as an argument
        return action => {
            console.log('[middleware] Dispatching', action);
            const result = next(action);
            console.log('[middleware] next state', store.getState())
            return result;
        }
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger, thunk)));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
