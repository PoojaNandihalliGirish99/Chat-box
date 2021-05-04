import firebase from 'firebase/app';

export const signup = (user) => {

    return (dispatch) => {

        const db = firebase.firestore();
        firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
        .then(user => {
            console.log(user);
        })
        .catch(error=> {
            console.log(error);
        })
    }
}