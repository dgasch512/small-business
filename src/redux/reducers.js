import { combineReducers } from 'redux';
// import initialState from './state';

const user = (state = [], action ) => {
    switch(action.type) {
        case 'LOG_IN':
            return {
                ...action.value,
                loggedIn: true
            }
        case 'LOG_OUT': 
            return {
                ...state,
                loggedIn: false
            }
        default:
            return state
    }
}

const places = (state = [], action) => {
    switch(action.type) {
        case 'ADD_PLACE':
            return [ ...state, action.value ]
        case 'REMOVE_PLACE':
            const places = [ ...state ]
            places.splice(action.value, 1)
            return places
        default:
            return state
    }
}

// ADD LOGIN AND LOG OUT REDUCER

// const google = () => {
//     return initialState;
// }
// SAVE FOR API FETCH
// const makes = (state = { makes: [] }, action) => {
//     switch(action.type) {
//         case 'FETCH_MAKES' :
//             return action.value
//         case 'DELETE_MAKE' :
//             const makes = [ ...state ]
//             makes.splice(action.value, 1)
//             return makes
//         default:
//             return state
//     }
// }

export default combineReducers({ user, places })