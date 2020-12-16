import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

import { LoginReducer } from '../reducers/login-reducer';
import { HomeReducer } from '../reducers/home-reducer';

export default function configureStore(initialState) {
   
    const rootReducer = combineReducers({
        LoginState: LoginReducer,
        HomeState: HomeReducer
    });

    return createStore(
        rootReducer,
        initialState,
        compose(applyMiddleware(thunk))
    );
}
