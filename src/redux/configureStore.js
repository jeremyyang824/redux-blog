import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import {routerReducer, routerMiddleware} from 'react-router-redux';
import { hashHistory} from 'react-router'

import ThunkMiddleware from 'redux-thunk';
import createFetchMiddleware from 'redux-composable-fetch';
import rootReducer from './reducers';
import DevTools from './DevTools.js';

const FetchMiddleware = createFetchMiddleware({
    afterFetch({action, result}) {
        return result.json().then(data => {
            //debugger;
            return Promise.resolve({
                action,
                result: data,
            });
        });
    }
});

const finalCreateStore = compose(
    applyMiddleware(
        ThunkMiddleware,        //应用redux-thunk middleware
        FetchMiddleware,        //应用redux-composable-fetch middleware
        routerMiddleware(hashHistory),  //处理router action
    ),
    DevTools.instrument()
)(createStore); //传入createStore方法创建高阶函数

const reducer = combineReducers({
    ...rootReducer,
    routing: routerReducer, //整合routing reducr
});

export default function configureStore(initialState) {
    const store = finalCreateStore(reducer, initialState)
    return store;
}
