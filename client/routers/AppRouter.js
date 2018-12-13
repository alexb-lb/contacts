import React from 'react';
import {Router, Route, Switch, Link, NavLink} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

// compontents
// import ContactsList from '../components/ContactsList';

// history
export const history = createHistory();

// routing
const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>

      </Switch>
    </div>
  </Router>
);

export default AppRouter;