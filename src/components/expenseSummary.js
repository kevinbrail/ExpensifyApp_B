import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import totalExpenses from '../selectors/expenses-total'
import selectExpenses from '../selectors/expenses';

export const ExpenseSummary = ({expensesCount, expensesTotal}) => {
    const expenseWord = expensesCount === 1 ? 'expense' : 'expenses';
    const formattedExpensesTotal = numeral(expensesTotal / 100).format('$0,00.00');
    
    return (
        <div>
        <h2>You are viewing {expensesCount} {expenseWord} totalling {formattedExpensesTotal}
        </h2>
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

