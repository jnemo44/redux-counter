import * as actionTypes from './actionTypes';

export const saveResult = ( res ) => {
    return {
        type: actionTypes.STORE_RESULT,
        result: res
    }; 
}

// Async Action creator enabled by redux-thunk works by calling a
// syncronous action creator
export const storeResult = ( res ) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(saveResult(res));
        },2000);
    }
};

export const deleteResult = (id) => {
    return {
        type: actionTypes.DELETE_RESULT,
        resultElId: id
    };
};