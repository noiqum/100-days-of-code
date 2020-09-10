import actionTypes from './actionTypes';
import firebase from '../../firebaseConfig/firebaseConfig';
import { toast } from 'react-toastify';




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
                const userInfo = result.data();
                console.log(userInfo)
                return dispatch(setPath(userInfo.path))
            }
        } catch (error) {
            console.log(error)
        }
    }
}
const setTask = () => ({
    type: actionTypes.setTask
})
export const updateTask = (user, day, linkIndex) => {
    return async dispatch => {
        try {
            toast.success('⭐ keep going 💪')
            const userInfo = await firebase.firestore().doc(`user/${user}`).get();
            const pathItem = userInfo.data().path[day - 1];
            const path = userInfo.data().path;
            const newLinks = pathItem.links.map((link, index) => {
                if (index === linkIndex) {
                    return { ...link, done: !link.done }
                } else {
                    return link
                }
            });
            const updatedPathItem = { ...pathItem, links: newLinks };
            path.splice((day - 1), 1, updatedPathItem)
            await firebase.firestore().doc(`user/${user}`).update({ path: path })
            return dispatch(getPath(user))
            // return dispatch(setTask())
        } catch (error) {
            console.log(error)
        }
    }
}