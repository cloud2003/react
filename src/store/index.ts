import {combineReducers, compose, createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import users from './users/reducers';
import likes from './likes/reducers';
import saga from '../saga';

const rootReducer = combineReducers({
  users,
  likes,
});

const sagaMiddleware = createSagaMiddleware();
// @ts-ignore
const composeEnhancer = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose || compose;
// (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()

const store = createStore(rootReducer, composeEnhancer(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(saga);

export default store;

export type RootStoreType = ReturnType<typeof rootReducer>;

