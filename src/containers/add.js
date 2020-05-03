import { connect } from 'react-redux';
import Add from '../components/add';
import { addPlace } from '../redux/actions';

const mapStateToProps = state => {
  return {
    places: state.places,
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addPlace: (place) => dispatch(addPlace(place))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Add)