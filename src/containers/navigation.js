import { connect } from 'react-redux'
import Navigation from '../components/navigation'
import { logOut } from '../redux/actions'


const mapStateToProps = ( state ) => {
    return {
        user: state.user,
    }
}


const mapDispatchToProps = ( dispatch ) => {
    return {
        logOut: () => dispatch( logOut() )
    }
}

export default connect( mapStateToProps, mapDispatchToProps )(Navigation)