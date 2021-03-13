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
            // This how to delete elements from an array immutibly
            const updatedArray = state.results.filter(result => result.id !== action.resultElId);
            return {
                    ...state,
                    results: updatedArray
                    
            }
    } 
    return state;
};

export default reducer;