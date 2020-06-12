import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import user from './src/reducers/user';
import users from './src/reducers/users';

const makeRootReducer = asyncReducers => {
    return combineReducers({
        ...asyncReducers,
        user,
        users
    });
};

export default createStore(makeRootReducer(), applyMiddleware(thunk));
