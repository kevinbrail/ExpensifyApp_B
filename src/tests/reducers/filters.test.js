import filtersReducer from '../../reducers/filters'
import moment from 'moment';

test ('Should set up default filters values', () => {
    const state = filtersReducer(undefined, {type: '@@INTIT'});
    expect(state).toEqual ({
        text:'',
        sortBy: 'date',
        startDate : moment().startOf('month'),
        endDate: moment().endOf('month')
    })
})

test ('Should set sort by to amount', () => {
    const state = filtersReducer(undefined, {type:'AMOUNT_SORT'})
    expect(state.sortBy).toBe('amount');
})

test('Should set sort by to date', () => {
    const currentState={
        text:'',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    }
    const action ={type: 'DATE_SORT'};
    const state = filtersReducer(currentState, action);
    expect(state.sortBy).toBe('date');
})

test('Sound set the text filter', () => {
    const currentState ={
        text:'',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'date'
    }
    const text = 'Rent';
    const action = { type: 'TEXT_FILTER', text};
    const state =filtersReducer(currentState, action);
    expect(state.text).toBe(text);
});

test('Sound set the start date filter', () => {
    const startDate = moment();
    const action = { type: 'SET_START_DATE', startDate};
    const state =filtersReducer(undefined, action);
    expect(state.startDate).toBe(startDate);
});

test('Sound set the End date filter', () => {
    const endDate = moment();
    const action = { type: 'SET_END_DATE', endDate};
    const state =filtersReducer(undefined, action);
    expect(state.endDate).toBe(endDate);
});