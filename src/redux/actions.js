// const url = "https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json"

export const addPlace = (place) => {
    return {
        type: 'ADD_PLACE',
        value: car
    }
}

export const removeCar = ({place.id}) => {
    return {
        type: 'REMOVE_PLACE',
        value: {place.id}
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