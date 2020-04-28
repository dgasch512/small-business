import { combineReducers } from 'redux'

const user = (state = null) => state

const places = (state = [], action) => {
    switch(action.type) {
        case 'ADD_PLACE':
            return [ ...state, action.value ]
        case 'REMOVE_PLACE':
            const cars = [ ...state ]
            cars.splice(action.value, 1)
            return cars
        default:
            return state
    }
}

// ADD LOGIN AND LOG OUT REDUCER


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

export default combineReducers({ user, places, google })