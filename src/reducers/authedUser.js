import { SET_AUTHED_USER, NotAllowedUser } from '../actions/authedUser'

export
 default function authedUser(state = null, action) {

    switch (action.type) {
        case SET_AUTHED_USER:
           
        return action.id
       
       
        case NotAllowedUser:
           
        return null;
        default:

            return state;
    }
}