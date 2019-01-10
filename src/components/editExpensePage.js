import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from "./expenseForm"
import { startEditExpense } from '../actions/expenses'
import { startRemoveExpense } from '../actions/expenses';

export class EditExpensePage extends React.Component {
    onSubmit = (expense) => {
        //this.props.dispatch(editExpense(this.props.expense.id, expense));
        this.props.startEditExpense(this.props.expense.id, expense);
        this.props.history.push('/')
       // console.log(expense);
    };
    onRemove = (expense) => {
         //this.props.dispatch(removeExpense({id: this.props.expense.id}));
         this.props.startRemoveExpense({id: this.props.expense.id});
         this.props.history.push('/')
    };
    render() {
        return (
        <div>
            <ExpenseForm 
            expense={this.props.expense}
            onSubmit={this.onSubmit}
            />
            <button onClick={this.onRemove}>Remove</button>
        </div>
        )}

}

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
    }
};
  const mapDispatchToProps = (dispatch, props) => ({
    startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
    startRemoveExpense: (data) => dispatch(startRemoveExpense(data)) 
  });

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);