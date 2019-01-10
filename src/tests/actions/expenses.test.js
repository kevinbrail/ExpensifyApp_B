import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startAddExpense, addExpense, setExpenses, editExpense, removeExpense, startSetExpenses } from '../../actions/expenses'
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase'

const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
    const expensesData ={}
    expenses.forEach(({id, description,note, amount, createdAt}) => {
        expensesData[id] = {description, note, amount, createdAt};
    });
    database.ref('expenses').set(expensesData).then(() =>done())
});

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
    const action = addExpense(expenses[2]);
    expect(action).toEqual ({
        type:'ADD_EXPENSE',
        expense: expenses[2]
    })
})

test('Should add expense to database and store', (done) => {
    const store = createMockStore({});
    const expenseData = {
        description: 'mouse', 
        amount: 3000, 
        note: 'This one is better', 
        createdAt:1000
    }
    store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        });
        return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData);
        done();
    })
});
   

test('Should add expense with defaults to database and store', (done) => {
    const store = createMockStore({});
    const expenseDefaults = {
        description: '', 
        amount: 0, 
        note: '', 
        createdAt:0
    }
    store.dispatch(startAddExpense()).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseDefaults
            }
        });
        return database.ref(`expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseDefaults);
        done();
    })
})

test('Should set up set expense action object with test data', () =>{
    const action = setExpenses(expenses);
    expect(action).toEqual({
        type: 'SET_EXPENSES',
        expenses
    })
})

test('Should fetch the expenses from DB', (done) => {
    const store=createMockStore({});
    store.dispatch(startSetExpenses()).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'SET_EXPENSES',
            expenses
        })
        done();
    })
})

