import React, { PropTypes, Component } from 'react';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import * as LogoutActions from './logoutActions';

class Logout extends Component {
    /*constructor(props) {
        super(props);
        this.props = props;
    }*/

    componentWillMount(){
        // Redirect to login page if user is logged in
        this.props.logout();
    }

    render(){
        return null;
    }
}

/*Logout.propTypes = {
    logout: PropTypes.func.isRequired
};*/

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Object.assign({}, LogoutActions),  dispatch);
}

export default connect(null, mapDispatchToProps)(Logout);