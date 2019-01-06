import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// ADD_EXPENSE
const addExpense = (
    { 
        description = '', 
        note ='', 
        amount=0, 
        createdAt=0
    } = {}
    ) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});

//REMOVE_EXPENSE
const removeExpense = ({id} = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

//EDIT EXPENSE
const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})

//SET TEXT FILTER
const setTextFilter = (text = '') => ({
    type: 'TEXT_FILTER',
    text
})

//SET SORT BY AMOUNT FILTER
const sortByAmount = () => ({
    type: 'AMOUNT_SORT',
})

//SET SORT BY DATE FILTER
const sortByDate = () => ({
    type: 'DATE_SORT',
})

//SET START DATE FILTER
const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
})

//SET END DATE FILTER
const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
})

//Expenses Reducer
const expensesReducerDefaultState =[];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
           return [
               ...state,
               action.expense
           ];
        case 'REMOVE_EXPENSE':
           return state.filter(({ id }) => id !== action.id);
        case  'EDIT_EXPENSE':
               return state.map((expense) => {
                if (expense.id == action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    };
                } else {
               return expense; 
            }
           });
        default:
        return state;
    }
};
//Filters Reducer
const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date', 
    startDate: undefined,
    endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'TEXT_FILTER':
         return {
             ...state,
             text: action.text
         };
        case 'AMOUNT_SORT':
        return {
            ...state,
            sortBy: 'amount'
        };
        case 'DATE_SORT':
        return {
            ...state,
            sortBy: 'date'
        };
        case 'SET_START_DATE':
        return {
            ...state,
            startDate: action.startDate
        };
        case 'SET_END_DATE':
        return {
            ...state,
            endDate: action.endDate
        };
        default:
        return state;
    }
};

//Get Visible Expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
        
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy === 'date'){
            return a.createdAt < b.createdAt ? 1 : -1;
        } else if (sortBy === 'amount'){
            return a.amount < b.amount ? 1 : -1;
        }
    })
}

//Store Create
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer 
    })
);

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses (state.expenses, state.filters)
    console.log(visibleExpenses);
});

 const expenseOne = store.dispatch(addExpense({description:'Rent', amount:500, createdAt:-200} ));

 const expenseTwo = store.dispatch(addExpense({description:'Coffee', amount:1475, note:'Gawd, Coffee is expensive!', createdAt: -1000} ));

// store.dispatch(removeExpense({ id: expenseOne.expense.id}));

// store.dispatch(editExpense(expenseTwo.expense.id, {amount:500}));

//store.dispatch(setTextFilter('rent'));

// store.dispatch(setTextFilter());

store.dispatch(sortByAmount());

//store.dispatch(sortByDate());

//store.dispatch(setStartDate(1025))

// store.dispatch(setStartDate())

// store.dispatch(setEndDate(999))

const demoState = {
    expenses:[{
        id: 'random',
        description: 'Description',
        note: 'optional note',
        amount: 0,
        createdAt: 0 
    }],
    filters: {
        text: 'rent',
        sortBy: 'date', 
        startDate: undefined,
        endDate: undefined
    }
};
