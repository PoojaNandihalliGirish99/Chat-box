import {userConstant} from './constants'
import firebase from 'firebase/app'

export const getRealTimeUsers = (uid) => {
    return async (dispatch) => {
        dispatch({type: `${userConstant.GET_REALTIME_USERS}_REQUEST`});

        const db =  firebase.firestore();
        db.collection("users")
        //.where("uid", "!=", uid)
        .onSnapshot((querySnapshot) => {
            var users = [];
            querySnapshot.forEach((doc) => {
                if(doc.data().uid != uid){
                users.push(doc.data());
                }
            });
            //console.log(users);
        dispatch({type: `${userConstant.GET_REALTIME_USERS}_SUCCESS`,
            payload:{ users }
        });
            
        });
    }
}