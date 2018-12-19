import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import createHistory from 'history/createBrowserHistory';

import { Router, Route, Switch } from 'react-router-dom';

export const history = createHistory();

ReactDOM.render((
  <Router history={history}>
    <Switch>
      <Route path="/" component={App} />
    </Switch>
  </Router>
), document.getElementById('root'));
