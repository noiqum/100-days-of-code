import actionTypes from '../actions/actionTypes';


const initialstate = {
    user: {

    },
    loginStatus: false

}

const userReducer = (state = initialstate, action) => {
    switch (action.type) {
        case actionTypes.googleSignIn:

            return {
                ...state,
                user: action.user,
                loginStatus: true
            }
        case actionTypes.logout:

            return {
                ...state,
                user: {},
                loginStatus: false
            }
        default:
            return state;
    }
}

export default userReducer;