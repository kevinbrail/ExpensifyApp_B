import React from 'react';
import { shallow } from 'enzyme';
import {ExpenseSummary} from '../../components/expenseSummary';

test('Should correctly render summary for multiple expenses', () => {
    const wrapper = shallow(<ExpenseSummary expensesCount={1} expensesTotal={3000} />);
    expect(wrapper).toMatchSnapshot();
})

test('Should correctly render summary for one expense', () => {
    const wrapper = shallow(<ExpenseSummary expensesCount={3} expensesTotal={12000} />);
    expect(wrapper).toMatchSnapshot();
})