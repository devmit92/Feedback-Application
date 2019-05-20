import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import logger from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

const feedbackReducer = (state = {}, action) => {
    if (action.type === 'FEELINGS_REDUX') {
        return { ...state, feeling: action.payload };
    } else if (action.type === 'UNDERSTANDING_REDUX') {
        return { ...state, understanding: action.payload };
    } else if (action.type === 'SUPPORT_REDUX') {
        return { ...state, support: action.payload };
    } else if (action.type === "COMMENT_REDUX") {
        return { ...state, comments: action.payload };
    } else if (action.type === "CLEAR_REDUX") {
        return action.type;
    }
    return state;
}

const finalReducer = (state = [], action) => {
    if (action.type === 'FEEDBACK_REDUX') {
        return action.payload
    } else if (action.type === 'REMOVE_FEEDBACK') {
        const newState = state.filter((element, index) => {
            return index !== parseInt(action.payload);
        });
        return newState
    }
    return state;
}

const storeInstance = createStore(
    combineReducers({
        feedbackReducer,
        finalReducer,
    }),
    applyMiddleware(logger),
)

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();