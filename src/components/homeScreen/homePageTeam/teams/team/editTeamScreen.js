import React, {Component} from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { FormLabel, FormInput, Icon } from 'react-native-elements';
import NavigatorService from '../../../../../navigators/navigatorService';
import * as homePageActions from '../../../homePageActions';

class EditTeamScreen extends Component {
	constructor(props) {
		super(props);
	}
    static navigationOptions = ({navigation}) => {
        return {
            title: 'Edit Team',
            headerRight: <TouchableOpacity
                              onPress={() => {
                                   this.props.deleteTeam(this.props.navigation.state.params.id)
                                   NavigatorService.navigate('Home')
                              }}>
                              <Icon style={styles.deleteIcon} name='delete' color='#222222' size={26}/>
                         </TouchableOpacity>
        }
    };

	render() {
		return (
            <ScrollView style={styles.teamNameContainer}>
                <Text style={styles.teamNameHeader}>Name</Text>
                <FormInput
                    style={styles.teamName}
                    defaultValue={this.props.navigation.state.params.name}
                    onChangeText={(event) => this.props.updateTeam({name: event}, this.props.navigation.state.params.id)}
                />
            </ScrollView>
		)
	}
};

//EditTeamScreen.navigationOptions = {
//    title: 'Edit Team'
//};

function mapStateToProps(state) {
    return {
        baseStore: state.baseStore
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(homePageActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(EditTeamScreen);

const styles = StyleSheet.create({
    teamNameContainer: {
        backgroundColor: 'rgb(250, 250, 250)',
    },
    teamNameHeader: {
        marginTop: 16,
        marginBottom: 7,
        fontSize: 16,
        paddingLeft: 19,
        color: 'rgb(170, 170, 170)',
        fontWeight: '500',
    },
    teamName: {
        fontFamily: 'Roboto',
        fontSize: 18,
        color: '#000000',
        backgroundColor: '#ffffff',
        borderRadius: 4,
        borderColor: '#ABABAB',
        borderWidth: 0.5,
        paddingLeft: 10,
        paddingRight: 10,
    },
    deleteTeamContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 15
    },
    deleteIcon: {
        marginRight: 19,
    },
    deleteHeader: {
        marginLeft: 30,
        fontSize: 16,
        color: 'red'
    }
});