import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import totalExpenses from '../selectors/expenses-total'
import selectExpenses from '../selectors/expenses';
import {Link} from 'react-router-dom';

export const ExpenseSummary = ({expensesCount, expensesTotal}) => {
    const expenseWord = expensesCount === 1 ? 'expense' : 'expenses';
    const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,00.00');
    
    return (
        <div className="page-header">
            <div className="content-container">
                <h2 className="page-header__title">You are viewing <span>{expensesCount}</span> {expenseWord} totalling <span>{formattedExpensesTotal}</span></h2>
                <div className="page-header__actions">
                <Link to="create" className="button">Add Expense</Link>
                </div>
            </div>
        </div>
    )};

    const mapStateToProps = (state) => {
        const filteredExpenses  = selectExpenses(state.expenses, state.filters)
        return {
            expensesCount: filteredExpenses.length,
            expensesTotal: totalExpenses(filteredExpenses)
        }
    }

export default connect(mapStateToProps)(ExpenseSummary);

