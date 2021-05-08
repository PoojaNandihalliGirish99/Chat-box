import {userConstant} from '../actions/constants'

const initState = {
    users: [],
    conversations: []
}


export default (state = initState, action) => {
    switch(action.type){
        case `${userConstant.GET_REALTIME_USERS}_REQUEST`:
            break;

        case `${userConstant.GET_REALTIME_USERS}_SUCCESS`:
            state = {
                ...state,
                users: action.payload.users
            }
            break;
        case userConstant.GET_REALTIME_MESSAGES:
            state = {
                ...state,
                conversations: action.payload.conversations
            }
            break;
        case `${userConstant.GET_REALTIME_MESSAGES}_FAILURE`:
            state = {
                ...state,
                conversations: []
            }
            break;
    }
    return state;

}