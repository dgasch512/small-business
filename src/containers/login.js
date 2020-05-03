import { connect } from 'react-redux';
import Login from '../components/login';
import { newUser } from '../redux/actions';


const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = ( dispatch ) => {
  return {
      newUser: (user) => dispatch(newUser(user))
  }
}

export default connect( mapStateToProps, mapDispatchToProps )(Login)