const initialstate = {
    user: {

    },
    loginStatus: false

}

const userReducer = (state = initialstate, action) => {
    switch (action.type) {
        case "GOOGLE_SIGN_IN":

            return {
                ...state,
                user: action.user,
                loginStatus: true
            }

        default:
            return state;
    }
}

export default userReducer;