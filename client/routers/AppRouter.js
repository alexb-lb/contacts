import React from 'react';
import {Router, Route, Switch, Link, NavLink} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

// compontents
const AddContact = () => (<div>add  contact</div>)
import ContactsList from '../components/ContactsList/ContactsList';

// history
export const history = createHistory();

// routing
const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <Route path="/" component={ContactsList} exact={true}/>
        <Route path="/add" component={AddContact} exact={true}/>
      </Switch>
    </div>
  </Router>
);

export default AppRouter;