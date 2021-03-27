import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    counter: 0
}

// THree ways of updating the counter state shown below
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INCREMENT:
            // First: Immutibly update the state
            const newState = Object.assign({}, state);
            newState.counter = state.counter + 1;
            return newState;
        case actionTypes.DECREMENT:
            // Second: Immutibly update the state cleaner
            return {
                ...state,
                counter: state.counter - 1
            }
        // Third: Using a helper function to make it even cleaner
        case actionTypes.ADD:
            return updateObject(state, {counter: state.counter + action.value})

        case actionTypes.SUBTRACT:
            return updateObject(state, {counter: state.counter - action.value})
    } 
    return state;
};

export default reducer;