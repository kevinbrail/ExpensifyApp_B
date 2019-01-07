import React from 'react';
import ExpenseList from './expenseList'
import ExpenseListFilters from './expenseListFilters'
import ExpenseSummary from './expenseSummary'

const ExpenseDashboardPage =() => (
    <div>
    <ExpenseSummary />
    <ExpenseListFilters />
    <ExpenseList />
    </div>
)

export default ExpenseDashboardPage;