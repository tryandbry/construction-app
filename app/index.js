import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import Estimate from './views/estimate';

const App = () => 
  <Switch>
    <Route exact path="/" component={Estimate}/>
    <Route component={Estimate} />
  </Switch>

render((
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
), document.getElementById('root'));
