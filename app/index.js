import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

export const Test = (props) => {
  return (
    <div>
      <h1>hello world!</h1>
    </div>
  );
}

/*
render((
  <BrowserRouter>
    <Test />
  </BrowserRouter>
), document.getElementById('root'));
*/

render((
  <Test />
), document.getElementById('root'));
