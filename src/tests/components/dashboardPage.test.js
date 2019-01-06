import React from 'react';
import { shallow } from 'enzyme';
import ExpenseDashboardPage from '../../components/dashboardPage';
import expenses from '../fixtures/expenses';

test('Should render the main dashboard page', () => {
    const wrapper = shallow(<ExpenseDashboardPage />);
    expect(wrapper).toMatchSnapshot();
});