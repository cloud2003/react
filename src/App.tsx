import './App.css';
import React from 'react';
import {Provider} from 'react-redux';
import {MainPageView} from './page/MainPage';
import store from './store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <MainPageView />
      </Provider>
    </div>
  );
}

export default App;
