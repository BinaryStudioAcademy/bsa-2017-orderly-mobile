import React, {Component} from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { FormLabel, FormInput, Icon } from 'react-native-elements';
import NavigatorService from '../../navigators/navigatorService';
import * as homePageActions from './homePageActions';

class EditBaseScreen extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View>
			    <View style={styles.teamNameContainer}>
                    <FormLabel style={styles.teamNameHeader}>Name</FormLabel>
                    <FormInput
                        style={styles.teamName}
                        defaultValue={this.props.navigation.state.params.name}
                        onChangeText={(event) => this.props.updateTeam({name: event}, this.props.navigation.state.params.id)}
                    />
                </View>
                <View style={styles.deleteTeamContainer}>
                    <TouchableOpacity
                         onPress={() => { debugger;
                              this.props.deleteTeam(this.props.navigation.state.params.id)
                              NavigatorService.navigate('Home')
                         }}>
                         <Icon
                             style={styles.deleteIcon}
                             name='delete'
                             color='red'
                         />
                        <Text style={styles.deleteHeader}>Delete team</Text>
                    </TouchableOpacity>
                </View>
			</View>
		)
	}
};

EditBaseScreen.navigationOptions = {
    title: 'Edit Team'
};

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
    /*teamNameContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 15,
        borderBottomWidth: 1,
        borderColor: 'rgba(142, 142, 142, 0.14)'
    },*/
    teamNameHeader: {
        color: '#7b7b7b'
    },
    teamName: {
        fontFamily: 'Roboto',
        fontSize: 18,
        color: '#000000'
    },
    deleteTeamContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 15
    },
    deleteIcon: {
        marginRight: 15
    },
    deleteHeader: {
        marginLeft: 30,
        fontSize: 16,
        color: 'red'
    }
});