import {combineReducers, createStore} from 'redux';
import users from './users/reducers';
import likes from './likes/reducers';

const rootReducer = combineReducers({
  users,
  likes,
});

const store = createStore(rootReducer, (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__());

export default store;
