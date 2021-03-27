import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    results: []
};

const deleteResult = (state, action) => {
    // This how to delete elements from an array immutibly
    const updatedArray = state.results.filter(result => result.id !== action.resultElId);
    return updatedObject(state, {results: updatedArray});
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_RESULT:
            return updateObject(state, {results: state.results.concat({id: new Date(), value: action.result})})

        case actionTypes.DELETE_RESULT:
            //Using a function to lean out the case statement
            return deleteResult(state, action);
            
            
    } 
    return state;
};

export default reducer;