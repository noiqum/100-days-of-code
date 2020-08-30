import actionTypes from '../actions/actionTypes';


const initialState = {
    days: []
}


const pathReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.getPath:

            return {
                ...state,
                days: action.path
            }
        case actionTypes.setTask:
            return state;
        default:
            return state;
    }
}


export default pathReducer;