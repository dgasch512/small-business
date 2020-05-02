import React from 'react';
import { Container, Paper, Typography } from '@material-ui/core';

// ADD GOOGLE MAPS

const Listing = (props) => {
    const id = props.match.params.id
    const place = props.places.find(p => p.id == id)

    return (
    <Container maxWidth="sm" className="place-container">
        <Paper className="place-paper">
            <Typography>{place.name}</Typography>
            <Typography>{place.address}</Typography>
            <Typography>{place.openTime} - {place.closeTime}</Typography>
            <Typography>{place.description}</Typography>
            <Typography>GOOGLE MAPS GOES HERE</Typography>
        </Paper>
    </Container>

    )
}

export default Listing