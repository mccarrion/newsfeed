import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './components';
import * as serviceWorker from './serviceWorker';
import createHistory from 'history/createBrowserHistory';

export const history = createHistory();

ReactDom.render(
  <Router history={history}>
    <Switch>
      <Route path="/" component={App} />
    </Switch>
  </Router>
), document.getElementById('root');
