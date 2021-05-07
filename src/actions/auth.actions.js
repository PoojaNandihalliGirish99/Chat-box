import firebase from 'firebase/app';
import { authConstant } from './constants';


export const signup = (user) => {

    return async (dispatch) => {

        const db = firebase.firestore();
        dispatch({type: `${authConstant.USER_LOGIN}_REQUEST`});


        firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
        .then(data => {
            console.log(data);
            const currentUser = firebase.auth().currentUser
            const name = `${user.firstName} ${user.lastName}`
            currentUser.updateProfile({
                displayName: name
            }).then(()=>{
                //if you are inside here...it means displayname it is updated
                db.collection('users').add({
                    firstName: user.firstName,
                    lastName: user.lastName,
                    uid: data.user.uid,
                    createdAt: new Date(),
                    isOnline: true

                }).then(()=>{
                    //successful
                    const loggedUser = {
                    firstName: user.firstName,
                    lastName: user.lastName,
                    uid: data.user.uid,
                    email: user.email
                    }
                    
                    localStorage.setItem('user', JSON.stringify(loggedUser));
                    console.log('User Logged in successfully......')
                    dispatch({
                        type: `${authConstant.USER_LOGIN}_SUCCESS`,
                        payload: {user: loggedUser }
                    })
                }).catch((error)=>{
                    console.log(error);
                    dispatch({type: `${authConstant.USER_LOGIN}_FAILURE`,
                    payload:{error}
                });

                })
            })
        })
        .catch(error=> {
            console.log(error);
        })
    }
}

export const signin = (user) => {
    return async dispatch => {
        dispatch({type: `${authConstant.USER_LOGIN}_REQUEST`});
        firebase.auth().signInWithEmailAndPassword(user.email, user.password)
        .then((data) => {
            console.log(data)
            const name = data.user.displayName.split(" ");
            const firstName = name[0];
            const lastName = name[1];
            const loggedUser = {
                firstName,
                lastName,
                email:data.user.email,
                uid: data.user.uid,
            }

            localStorage.setItem('user', JSON.stringify(loggedUser));

            dispatch({
                type: `${authConstant.USER_LOGIN}_SUCCESS`,
                payload:{user: loggedUser}
            })
        
        }).catch(error => {
            console.log(error);
            dispatch({
                type: `${authConstant.USER_LOGIN}_FAILURE`,
                payload:{error}
                
 
            })
        })
    }
}

export const isLoggedInUser = () => {
    return async dispatch => {
        const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;

        if(user){
            dispatch({
                type: `${authConstant.USER_LOGIN}_SUCCESS`,
                payload:{user}
            })
        }else{
            dispatch({
                type: `${authConstant.USER_LOGIN}_FAILURE`,
                payload:{error: "login again please"}
            })
        }

    }
}

export const logout = () => {
    return async dispatch => {
        dispatch({
            type: `${authConstant.USER_LOGOUT}_REQUEST`
        })
        
        firebase.auth().signOut()
        .then(()=>{
            localStorage.clear();
            dispatch({type:`${authConstant.USER_LOGOUT}_SUCCESS`})

        })
        .catch((error)=>{
            console.log(error);
            dispatch({type:`${authConstant.USER_LOGOUT}_FAILURE`,
            payload:{error}
        })

        })

    }
}