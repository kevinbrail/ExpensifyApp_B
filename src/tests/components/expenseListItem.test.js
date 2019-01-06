import React from 'react';
import { shallow } from 'enzyme';
import ExpenseListItem from '../../components/expenseListItem';
import expenses from '../fixtures/expenses';


test('Should render an individual expense', () => {
    const wrapper = shallow(<ExpenseListItem {...expenses[0]} />)
    expect(wrapper).toMatchSnapshot();
});