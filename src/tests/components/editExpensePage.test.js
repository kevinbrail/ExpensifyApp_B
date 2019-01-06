import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/editExpensePage'
import expenses from '../fixtures/expenses';

let editExpense, removeExpense, history, wrapper;
beforeEach(() => {
    editExpense = jest.fn();
    removeExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(<EditExpensePage 
        editExpense={editExpense} 
        removeExpense={removeExpense}
        history={history}
        expense={expenses[2]}
        />);
});

test('Should render Edit expense page correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('Should handle editExpense', () => {
   // console.log(wrapper.find('ExpenseForm'))
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(editExpense).toHaveBeenLastCalledWith(expenses[2].id, expenses[2]);
});

test('Should handle removeExpense', () => {
     wrapper.find('button').simulate('Click');
     expect(history.push).toHaveBeenLastCalledWith('/');
     expect(removeExpense).toHaveBeenLastCalledWith({
         id: expenses[2].id
     });
 });