import { connect } from 'react-redux';
import Add from '../components/add';
import { addPlace } from '../redux/actions';

const mapDispatchToProps = (dispatch) => {
  return {
    addPlace: (place) => dispatch(addPlace(place))
  }
}

export default connect(null, mapDispatchToProps)(Add)