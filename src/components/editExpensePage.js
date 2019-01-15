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
            <div className="page-header">
                <div className="content-container">
                    <h1 className="page-header__title">Edit Expense</h1>
                </div>    
            </div>
            <div className="content-container">
                <ExpenseForm 
                    expense={this.props.expense}
                    onSubmit={this.onSubmit}
                />
                <button 
                    onClick={this.onRemove}
                    className="button button--secondary">Remove Expense</button>
                </div>
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