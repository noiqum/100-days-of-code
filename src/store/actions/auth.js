import actionTypes from './actionTypes';
import firebase, { provider } from '../../firebaseConfig/firebaseConfig';
import { path } from '../../path/path';

export const googleSignIn = (user) => ({
    type: actionTypes.googleSignIn,
    user
})



export const googleSign = () => {
    return async dispatch => {
        try {
            const result = await firebase.auth().signInWithPopup(provider);
            const user = result.user;
            const userDB = await firebase.firestore().collection('user').doc(user.uid).get();
            if (userDB.exists) {
                return dispatch(googleSignIn(user))
            } else {
                const userWithPath = {
                    uid: user.uid,
                    email: user.email,
                    displayName: user.displayName,
                    path
                }
                await firebase.firestore().collection('user').doc(user.uid).set(userWithPath);
                return dispatch(googleSignIn(user))
            }

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

const signUp = (user) => {
    return {
        type: actionTypes.signUp,
        user
    }
}



export const signUpHandle = (user) => {
    return async dispatch => {
        try {
            const result = await firebase.auth().createUserWithEmailAndPassword(user.email, user.password);
            const id = result.user.uid;
            const newUser = { displayName: user.displayName, email: user.email, uid: id, path };
            await firebase.firestore().collection('user').doc(id).set({ ...newUser })
            return dispatch(signUp(newUser))

        } catch (error) {
            console.log(error)

        }
    }
}