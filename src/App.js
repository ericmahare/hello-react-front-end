import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import Greeting from './components/Greeting';
import store from './store/createStore';

const App = () => (
  <Provider store={store}>
      <Routes>
        <Route exact path="/" element={<Greeting />} />
      </Routes>
  </Provider>
);

export default App;