import {setTextFilter, setStartDate, setEndDate, sortByAmount, sortByDate} from '../../actions/filters'
import moment from 'moment'

test('Should generate the default text sort when no text is supplied', () => {
    const action = setTextFilter();
    expect(action).toEqual ({
        type: 'TEXT_FILTER',
        text: ''
    })
})
test('Should generate the text sort when filter text is supplied', () => {
    const text='Rent';
    const action = setTextFilter(text);
    expect(action).toEqual ({
        type: 'TEXT_FILTER',
        text: 'Rent'
    })
})
test ('Should generate amount sort object', () => {
    const action = sortByAmount();
    expect(action).toEqual ({
        type: 'AMOUNT_SORT',
    })

});
test ('Should generate date sort object', () => {
    const action = sortByDate();
    expect(action).toEqual ({
        type: 'DATE_SORT',
    })

});
test ('Should generate set start date action object', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual ({
        type: 'SET_START_DATE',
        startDate: moment(0)
    })

});

test ('Should generate set end date action object', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual ({
        type: 'SET_END_DATE',
        endDate: moment(0)
    })

});