import React from 'react';
import {shallow} from 'enzyme';
import moment from 'moment';
import ExpenseForm from '../../components/expenseForm';
import expenses from '../fixtures/expenses';


test ('Should render Expense Form correctly', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
})

test('Should render Expense form with expense data', () => {
    const wrapper = shallow(<ExpenseForm expense={expenses[1]} />);
    expect(wrapper).toMatchSnapshot();
});

test('Should render error when submitted with invalid data', () => {
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('form').simulate('submit', {
       preventDefault: () => { }
    });
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
});

test('Should set description on input change', () => {
    const value = 'New Description';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(0).simulate('change', {
        target : {value}
    });
    expect(wrapper.state('description')).toBe(value);  
});

test('Should set note on textarea input change', () => {
    const value = 'New Note';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('textarea').simulate('change', {
        target : {value}
    });
    expect(wrapper.state('note')).toBe(value);  
});

test('Should set amount on valid amount input change', () => {
    const value = '23.00';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change', {
        target : {value}
    });
    expect(wrapper.state('amount')).toBe(value);  
});

test('Should NOT set amount on invalid amount input change', () => {
    const value = '23.00.12';
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('input').at(1).simulate('change', {
        target : {value}
    });
    expect(wrapper.state('amount')).toBe("");  
});

test('Sound call onSubmit prop for valid form submission', () => {
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy}/>);
    wrapper.find('form').simulate('submit', {
        preventDefault: () => { }
     });
     expect(wrapper.state('error')).toBe('');
     expect(onSubmitSpy).toHaveBeenLastCalledWith({
         description: expenses[0].description,
         amount:  2001.0000000000002,
         note: expenses[0].note,
         createdAt: expenses[0].createdAt
     });
});

test('Should set new date onDateChange', () => {
    const now = moment();
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('SingleDatePicker').prop('onDateChange')(now);
    expect(wrapper.state('createdAt')).toEqual(now);
});

test('Should set calendar focus on change', () => {
    const focused = true;
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('SingleDatePicker').prop('onFocusChange')({ focused });
    expect(wrapper.state('calendarFocused')).toBe(focused);
})

