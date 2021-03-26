import * as actionTypes from '../actions/action';

const initialState = {
    results: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({id: new Date(), value: action.result})
            }
        case actionTypes.DELETE_RESULT:
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