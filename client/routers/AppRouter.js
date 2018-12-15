import React from 'react';
import {Router, Route, Switch, Link, NavLink} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

// compontents
import AddContactPage from '../components/AddContactPage/AddContactPage';
import ContactsListPage from '../components/ContactsListPage/ContactsListPage';

// history
export const history = createHistory();

// routing
const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <Route path="/" component={ContactsListPage} exact={true}/>
        <Route path="/add" component={AddContactPage} exact={true}/>
      </Switch>
    </div>
  </Router>
);

export default AppRouter;