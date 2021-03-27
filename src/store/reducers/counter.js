import * as actionTypes from '../actions/actionTypes';

const initialState = {
    counter: 0
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INCREMENT:
            // One way to immutibly update the state
            const newState = Object.assign({}, state);
            newState.counter = state.counter + 1;
            return newState;
        case actionTypes.DECREMENT:
            return {
                // Another way to immutibly update the state
                ...state,
                counter: state.counter - 1
            }
        case actionTypes.ADD:
            return {
                ...state,
                counter: state.counter + action.value
            }
        case actionTypes.SUBTRACT:
            return {
                ...state,
                counter: state.counter - action.value
            }
    } 
    return state;
};

export default reducer;