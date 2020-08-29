import actionTypes from './actionTypes';
import firebase from '../../firebaseConfig/firebaseConfig';



const setPath = (path) => {
    return {
        type: actionTypes.getPath,
        path
    }
}

export const getPath = (user) => {
    return async dispatch => {
        try {
            if (user === 'default') {
                const result = await firebase.firestore().collection('path').doc('default').get();
                const path = result.data().path;
                return dispatch(setPath(path))
            } else {
                const result = await firebase.firestore().collection('user').doc(user).get();
                const path = result.data();
                return dispatch(setPath(path))
            }
        } catch (error) {
            console.log(error)
        }
    }
}