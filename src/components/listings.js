import React from 'react';
import '../index.css'
import { Table, TableHead, TableRow, TableCell, TableBody  } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { Link } from 'react-router-dom';

function Listings(props) {

    return(
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Hours</TableCell>
            <TableCell>Address</TableCell>
            {props.user.loggedIn ?? (
              <TableCell className='deleteCol'>Delete</TableCell>
            )} 
            
          </TableRow>
        </TableHead>
        <TableBody>
          {props.places.map((place, index) => (
            <TableRow key={place.id}>
             <TableCell component='th' scope='row'><Link to={`/place/${place.id}`}>{place["name"]}</Link></TableCell>
             <TableCell>{place["description"]}</TableCell>
          <TableCell>{place["openTime"]} - {place["closeTime"]}</TableCell>
          <TableCell>{place["address"]}</TableCell>
          {props.user.loggedIn ?? (
            <TableCell>
               <DeleteIcon
                onClick={() => props.removePlace(index)}
                className="icon text-red" />
            </TableCell>
          )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )
}
export default Listings;