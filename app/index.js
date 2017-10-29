import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

import Estimate from './views/estimate';

export const Test = (props) => {
  console.log('Test props: ',props);
  return (
    <div>
      <h1>hello world!</h1>
    </div>
  );
}

export const Default = (props) => {
  return (
    <div>
      <h1>Default route page</h1>
    </div>
  );
}

const App = () => 
  <Switch>
    <Route exact path="/" component={Test}/>
    <Route exact path="/estimate" component={Estimate}/>
    <Route component={Default} />
  </Switch>

render((
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
), document.getElementById('root'));
