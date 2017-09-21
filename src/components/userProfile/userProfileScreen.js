import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
//import UserProfile from './userProfile'
import UserProfilePhoto from './userProfileComponents/userProfilePhoto';
import UserProfileForm from './userProfileComponents/userProfileForm';
import { changeUserData, getCurrentUser, uploadSuccess, getAvatarByPath } from './userProfileActions';
import '../../images/logo.png'
import NavigatorService from '../../navigators/navigatorService';

class UserProfileScreen extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        const handleFile = props.handleFile;
        const handleSubmitForm = props.handleSubmitForm;
        const getCurrentUser = props.getCurrentUser;
        const getAvatarByPath = props.getAvatarByPath;
    }
    componentWillMount(){
        this.props.getCurrentUser();            
    }

    render() {
        return (
        <ScrollView>
            <View style={styles.userProfileWrapper}>
                <UserProfilePhoto
                    user={this.props.user}
                    handleFile = {this.props.handleFile}
                />
                <View style={styles.userProfileInfo}>
                    <UserProfileForm
                    style={styles.userProfileWrapper}
                        user={this.props.user}
                        handleSubmitForm = {this.props.handleSubmitForm}
                    />
                </View>
            </View>
        </ScrollView>
        );
    }
}

UserProfileScreen.navigationOptions = {
    title: 'My profile'
};

const mapStateToProps = (state) => {
    return {
        user: state.userProfile.user
    };
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleSubmitForm: (_id, formData) => { 
        dispatch(changeUserData(_id, formData))
    },
    handleFile: (data, path) => {
        dispatch(uploadSuccess(data))
    }, 
    getCurrentUser:() => {dispatch(getCurrentUser())}
  }
}

UserProfileScreen = connect(mapStateToProps, mapDispatchToProps)(UserProfileScreen)

export default UserProfileScreen;

const styles = StyleSheet.create({
    userProfileWrapper: {
        backgroundColor: 'rgb(245, 245, 245)'
    },
    userProfileInfo: {

    }
});


/*
            <View className ='home-page-header' >
                <Text className="user-profile-logout-wrapper header-icon">
                    <Link to={'/logout'} className="logout" title="Logout">
                        <Icon name="log out" size="large" />
                    </Link>
                </Text>
                <UserProfile user={this.props.user}/>
            </View>
*/