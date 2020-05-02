import React, { Component, Fragment } from 'react';
import {
    Button,
    TextField,
    Dialog,
    DialogContent,
    DialogTitle
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
  const payload = { ...this.state }
  payload.id = this.props.places.length + 1;
  // add this.props.addCar function here
  // also add this.setState to close the dialog
  this.props.addPlace(payload)
  this.setState({ isShowing: true })
}

componentDidUpdate = (prevProps, prevState) => {
  this.setState({
    id: '',
    name: '',
    description: '',
    openTime: '',
    closeTime: '',
    address: '',
    isShowing: true
  })
}

render() {
  return (
    <container className='addContent'>
      <div className="addDiv">
        <form onSubmit={this.handleSubmit}
        style={{ display: 'flex', flexDirection: 'column', width: '40%'}}>
          <TextField 
            id='name'
            placeholder='Name'
            value='this.state.name'
            onChange={this.handleTextChange}
            required /> 
          <TextField 
            id='address'
            placeholder='Address'
            value='this.state.address'
            onChange={this.handleTextChange}
            required /> 
          <TextField 
            id='openTime'
            placeholder='Open Time'
            value='openTime'
            onChange={this.handleTextChange}
            required /> 
          <TextField 
            id='closeTime'
            placeholder='Close Time'
            value='this.state.closeTime'
            onChange={this.handleTextChange}
            required /> 
          <TextField 
            id='description'
            placeholder='Description'
            value='this.state.description'
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