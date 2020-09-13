import actionTypes from '../actions/actionTypes';


const initialstate = {
    user: {
        uid: 'default'
    },
    loginStatus: false,
    register: false

}

const userReducer = (state = initialstate, action) => {
    switch (action.type) {
        case actionTypes.googleSignIn:

            return {
                ...state,
                user: action.user,
                loginStatus: true
            }
        case actionTypes.signUp:
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
        case actionTypes.signIn:

            return {
                ...state,
                user: action.user,
                loginStatus: true
            }
        case actionTypes.registerProcess:
            return {
                ...state,
                register: action.bool
            }
        default:
            return state;
    }
}

export default userReducer;