import {
  connect
} from 'react-redux';
import EditProfile from './EditProfile';
import {
  editProfile
} from '../../actions/profileActions';

function mapStateToProps({
  isLoading,
  hasError,
  isLoginInvalid,
  validationState
}) {
  return {
    isLoading,
    hasError,
    isLoginInvalid,
    validationState
  }
}

function mapDispatchToProps(dispatch) {
  return {
    editProfile: () => dispatch(editProfile())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile);