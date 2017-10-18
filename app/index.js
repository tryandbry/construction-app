import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

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
    <Route component={Default} />
  </Switch>

render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'));
