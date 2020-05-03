import React, { Component } from 'react';
import {
    Button,
    TextField
} from '@material-ui/core';

class Add extends Component {
state = {
  id: '',
  name: '',
  description: '',
  openTime: '',
  closeTime: '',
  address: '',
  isShowing: true
}

handleTextChange = (e) => {
  const newState = { ...this.state }
  newState[e.target.id] = e.target.value
  this.setState(newState)
}

handleSubmit = (e) => {
  e.preventDefault()
  const newPlace = this.state
  newPlace.id = this.props.places.length;
  this.props.addPlace(newPlace)
  this.setState({ isShowing: true })
  window.alert("New Listing Added")


render() {
  return (
    <container className='addContent'>
      <div className="addDiv">
        <form onSubmit={this.handleSubmit}
        style={{ display: 'flex', flexDirection: 'column', width: '40%'}}>
          <TextField 
            id='name'
            placeholder='Name'
            value={this.state.name}
            onChange={this.handleTextChange}
            required /> 
          <TextField 
            id='address'
            placeholder='Address'
            value={this.state.address}
            onChange={this.handleTextChange}
            required /> 
          <TextField 
            id='openTime'
            placeholder='Open Time'
            value={this.state.openTime}
            onChange={this.handleTextChange}
            required /> 
          <TextField 
            id='closeTime'
            placeholder='Close Time'
            value={this.state.closeTime}
            onChange={this.handleTextChange}
            required /> 
          <TextField 
            id='description'
            placeholder='Description'
            value={this.state.description}
            onChange={this.handleTextChange}
            required /> 
          <br />
          <Button 
            variant='contained' 
            color='primary'
            type='submit'
            >SAVE</Button>
        </form>
      </div>
      <div>
        <h2>GOOGLE MAPS</h2>
      </div>
    </container>  
  )
}

}

export default Add;