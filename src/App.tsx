import './App.css';
import React from 'react';
import {Provider} from 'react-redux';
import {MainPageView} from './page/MainPage';
import {UserInfoView} from './page/UserInfo';
import store from './store';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/users">Users</Link>
                </li>
              </ul>
            </nav>
            <Switch>
              <Route path="/users">
                <UserInfoView />
              </Route>
              <Route path="/">
                <MainPageView />
              </Route>
            </Switch>
          </div>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
