import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
//import RootReducer from '';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';

//const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
    <h1>Hello world from React!</h1>, document.querySelector('.container'));

/*
<Provider store={createStoreWithMiddleware(RootReducer)}>
    <BrowserRouter>
      <div>
        <Route path="/" component={} />
      </div>
  
    </BrowserRouter>
  </Provider>

*/