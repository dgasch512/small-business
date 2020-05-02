import {connect} from 'react-redux';
import Listing from '../components/listing';

const mapStateToProps = (state) => {
  return {
    places: state.places
  }
}

export default connect(mapStateToProps)(Listing)