import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import React from 'react';
import createHistory from 'history/createBrowserHistory';
import LoginPage from '../components/loginPage';
import AddExpensePage from '../components/addExpensePage';
import EditExpensePage from '../components/editExpensePage';
import ExpenseDashboardPage from '../components/dashboardPage';
import HelpPage from '../components/helpPage';
import NotFoundPage from '../components/notfoundPage';
import PrivateRoute from './privateRoute';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
    <div>
    <Switch>
        <Route path="/" component={LoginPage} exact={true}/>   
        <PrivateRoute path="/dashboard" component={ExpenseDashboardPage}/>
        <PrivateRoute path="/create" component={AddExpensePage}/>
        <PrivateRoute path="/edit/:id" component={EditExpensePage}/>
        <Route path="/help" component={HelpPage}/>
        <Route component={NotFoundPage}/>
    </Switch>
    </div>
    </Router>
)

export default AppRouter;
