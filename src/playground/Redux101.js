import { createStore } from 'redux';

const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
})

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
})
  
const setCount = ({ setCount }) => ({
    type: 'SET',
    setCount
})

const reset =() => ({
   type: 'RESET'
})

const countReducer = (state = {count: 0}, action) => {
    switch (action.type) {
        case 'INCREMENT':
        return {
            count: state.count + action.incrementBy
        };
        case 'DECREMENT':
        return {
            count: state.count - action.decrementBy
        };
        case 'SET':
        return {
            count: action.setCount
        };
        case 'RESET':
        return {
            count: state.count = 0
        };
        default:
        return state;
    }
}

const store = createStore (countReducer);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 10
// });

store.dispatch(incrementCount({incrementBy:10}));

store.dispatch(incrementCount());

store.dispatch(reset());

store.dispatch(decrementCount());

store.dispatch(decrementCount({decrementBy:5}));

store.dispatch(setCount({setCount:101}));