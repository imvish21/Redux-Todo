import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { thunk } from 'redux-thunk';  // Make sure to use the named export 'thunk'
import TodoReducer from './reducers/TodoReducers';

const rootReducer = combineReducers({
    // Add your reducers here
    Todo: TodoReducer,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
    rootReducer,
    initialState,  
composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
