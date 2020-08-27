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
            console.log(user);
            return dispatch(googleSignIn(user));
        } catch (error) {
            console.log(error)
        }
    }
}