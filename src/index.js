import React from 'react';
import ReactDOM from 'react-dom';
import {add, sum, mult, div} from './Calc';

ReactDOM.render(
  <>
  <ul>
    <li>Sum of two number is {add(40, 4)}</li>
    <li> {sum(40, 4)}</li>
    <li> {mult(40, 4)}</li>
    <li> {div(40, 4)}</li>
  </ul>

  </>,
  document.getElementById('root')


);

