import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'

test('Should set up default state', () => {
    const state = expensesReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual([]);
}); 

test('Should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id:expenses[1].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]])
})

test('Should not remove expense by id if ID not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id:'-1'
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses)
});

test('Should add new expense to the expenses array', () => {
    const newExpense = {
        id: '99',
        description: 'This is a test',
        note: 'This is a test note',
        amount: 200,
        createdAt: 10000
    }
    const action = {
        type: 'ADD_EXPENSE',
        expense: newExpense
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, newExpense])

})

test ('Should edit an existing expense with supplied ID', () => {
    const note = "UPDATEDNOTE";
        const action ={
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates: {
            note
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state[1].note).toEqual(note) 
});

test ('Should not edit an existing expense with non-existent ID', () => {
    const note = "UPDATEDNOTE";
        const action ={
        type: 'EDIT_EXPENSE',
        id: 4,
        updates: {
            note
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses) 
});

test('Should set expenses to the expenses array', () => {
    const action = {
        type: 'SET_EXPENSES',
        expenses: [expenses[1]]
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[1]])

})