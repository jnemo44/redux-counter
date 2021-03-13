const initialState = {
    counter: 0,
    results: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            // One way to immutibly update the state
            const newState = Object.assign({}, state);
            newState.counter = state.counter + 1;
            return newState;
        case 'DECREMENT':
            return {
                // Another way to immutibly update the state
                ...state,
                counter: state.counter - 1
            }
        case 'ADD5':
            return {
                ...state,
                counter: state.counter + action.value
            }
        case 'SUB5':
            return {
                ...state,
                counter: state.counter - action.value
            }
        case 'STORE_RESULT':
            return {
                ...state,
                results: state.results.concat({id: new Date(), value: state.counter})
            }
        case 'DELETE_RESULT':
        return {
                ...state
        }
    } 
    return state;
};

export default reducer;