import actionTypes from './actionTypes';
import firebase, { provider } from '../../firebaseConfig/firebaseConfig';


export const googleSignIn = (user) => ({
    type: actionTypes.googleSignIn,
    user
})



export const googleSign = () => {
    return async dispatch => {
        try {
            const result = await firebase.auth().signInWithPopup(provider);
            const user = result.user;

            return dispatch(googleSignIn(user));
        } catch (error) {
            console.log(error)
        }
    }
}

export const logout = () => {
    return {
        type: actionTypes.logout
    }
}

export const logoutHandler = () => {
    return async dispatch => {
        try {
            await firebase.auth().signOut();
            return dispatch(logout());
        } catch (error) {
            console.log(error)
        }
    }
}