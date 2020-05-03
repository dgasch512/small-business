// const url = "https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json"

export const addPlace = (place) => {
    return {
        type: 'ADD_PLACE',
        value: place
    }
}

export const removePlace = (index) => {
    return {
        type: 'REMOVE_PLACE',
        value: index
    }
}

export const newUser = (user) => {
    return {
        type: 'NEW_USER',
        value: user
    }
}

// SAVE FOR API FETCH

// export const fetchMakes = () => {
//     return (dispatch) => {
//         fetch(url)
//         .then(res => res.json())
//         .then(response => {
//             const action = {
//                 type: 'FETCH_MAKES',
//                 value: response.Results
//             }
//             dispatch(action)
//         })
//     }
// }