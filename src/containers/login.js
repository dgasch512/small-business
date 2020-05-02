import { connect } from 'react-redux';
import Login from '../components/login';
import { login } from '../redux/actions';



const mapDispatchToProps = ( dispatch ) => {
  return {
      login: ( username ) => dispatch( login( username ) )
  }
}

export default connect( null, mapDispatchToProps )(Login)