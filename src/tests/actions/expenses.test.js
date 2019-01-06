import { addExpense, editExpense, removeExpense} from '../../actions/expenses'

test('Should call remove expense action object with ID', () => {
    const action = removeExpense({id: '12345'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '12345'
    });
});

test('Should call edit expense action object with ID and updated expense value', () => {
    const action = editExpense('12345', {note:'Test Note'});
    expect(action).toEqual ({
        type:'EDIT_EXPENSE',
        id: '12345',
        updates:{
            note:'Test Note'
        }
    })
})

test('Should setup addExpense action object with supplied values', () => {
    const expenseData = {
        description: 'Rent',
        amount: 109000,
        createdAt: 1000,
        note: 'This is a note'
    }
    const action = addExpense(expenseData);
    expect(action).toEqual ({
        type:'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
})

test('Should setup addExpense action object with no data, should return default values', () => {
    const action = addExpense();
    expect(action).toEqual ({
        type:'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '',
            amount: 0,
            createdAt: 0,
            note: ''
        }
    })
})

