import React from 'react'
import listings from '../listings.json'
import { Container, Paper } from '@material-ui/core';

// ADD GOOGLE MAPS

const Listing = (props) => {
    const id = props.match.params.id
    const place = listings.find(l => l.id == id)

    return (
        <Container maxWidth="sm" className="car-container">
            <Paper className="car-paper">
                <h2>{place.name}</h2>
                <h5>{place.address.street}, {place.address.city}, {place.address.state}{place.address.zip}</h5>
                <h5>{place.openTime} - {place.closeTime}</h5>
                <p>{place.description}</p>
                <h2>GOOGLE MAPS GOES HERE</h2>
            </Paper>
        </Container>
    )
}

export default Listing