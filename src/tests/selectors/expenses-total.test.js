import totalExpenses from '../../selectors/expenses-total'
import expenses from '../fixtures/expenses'

test('Should return total of 0 if no expenses exist', () => {
    const result = totalExpenses([]);
    expect(result).toBe(0)
});

test('Should return total of first fixture expenses', () => {
    const result = totalExpenses([expenses[0]]);
    expect(result).toBe(2001)
});

test('Should return total of all three fixture expenses', () => {
    const result = totalExpenses(expenses);
    expect(result).toBe(6006)
});