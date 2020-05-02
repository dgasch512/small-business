import { connect } from 'react-redux';
import Listings from '../components/listings';
import { removePlace } from '../redux/actions';


const mapStateToProps = (state) => {
  return{
    user: state.user,
    places: state.places
  }
}

const mapDispatchToProps = ( dispatch ) => {
  return {
      removePlace: (index) => dispatch(removePlace(index))
  }
}

export default connect( mapStateToProps, mapDispatchToProps )(Listings)