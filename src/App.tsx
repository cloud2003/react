import './App.css';
import React from 'react';
import {Provider} from 'react-redux';
import {MainPageView} from './page/MainPage';
// import {UserInfoView} from './page/UserInfo';
import store from './store';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import {UserInfoView} from './page/UserInfo';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path={`/users/:userId`}>
              <UserInfoView />
            </Route>
            <Route path="/" exact>
              <MainPageView />
            </Route>
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
