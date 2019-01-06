
//SET TEXT FILTER
export const setTextFilter = (text = '') => ({
    type: 'TEXT_FILTER',
    text
})

//SET SORT BY AMOUNT FILTER
export const sortByAmount = () => ({
    type: 'AMOUNT_SORT',
})

//SET SORT BY DATE FILTER
export const sortByDate = () => ({
    type: 'DATE_SORT',
})

//SET START DATE FILTER
export const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
})

//SET END DATE FILTER
export const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
})
