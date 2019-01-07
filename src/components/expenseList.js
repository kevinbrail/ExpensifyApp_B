import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './expenseListItem';
import selectExpenses from '../selectors/expenses';

export const ExpenseList = (props) => (
    <div>
    {
        props.expenses.length === 0 ? (
            <p>No Expenses</p>
        ) : (
            props.expenses.map((expense) => 
            <ExpenseListItem {...expense} key={expense.id} />
        ))
    }
    {props.expenses.length === 0 && <p className="">Your Expenses</p>}
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    }
}
export default connect(mapStateToProps)(ExpenseList);

