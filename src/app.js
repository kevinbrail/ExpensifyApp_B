import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from "./routers/AppRouter";
import { addExpense } from './actions/expenses';
import { setTextFilter} from './actions/filters';
import configureStore from './store/configureStore';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css'

const store = configureStore();


//store.dispatch(addExpense({description: 'Water Bill'}));
//store.dispatch(addExpense({description: 'Gas Bill'}));

const expenseOne = store.dispatch(addExpense({description:'Water Bill', note:'Water should be free', amount:500, createdAt:200} ));
const expenseTwo = store.dispatch(addExpense({description:'Gas Bill', amount:475, note:'Gas is expensive', createdAt:1000} ));
const expenseThree = store.dispatch(addExpense({description:'Rent', amount:10000, note:'Rent is too damn high!', createdAt:-200} ));

// store.dispatch(setTextFilter('Water'));
// setTimeout(() => {
//     store.dispatch(setTextFilter('Bill'));
// }, 3000)

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

console.log(visibleExpenses);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'))

