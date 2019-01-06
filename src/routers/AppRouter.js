import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import React from 'react';
import AddExpensePage from '../components/addExpensePage';
import EditExpensePage from '../components/editExpensePage';
import ExpenseDashboardPage from '../components/dashboardPage';
import Header from '../components/header';
import HelpPage from '../components/helpPage';
import NotFoundPage from '../components/notfoundPage';

const AppRouter = () => (
    <BrowserRouter>
    <div>
    <Header/>
    <Switch>
    <Route path="/" component={ExpenseDashboardPage} exact={true}/>
    <Route path="/create" component={AddExpensePage}/>
    <Route path="/edit/:id" component={EditExpensePage}/>
    <Route path="/help" component={HelpPage}/>
    <Route component={NotFoundPage}/>
    </Switch>
    </div>
    </BrowserRouter>
)

export default AppRouter;
