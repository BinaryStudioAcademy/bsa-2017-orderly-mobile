import React, {Component} from 'react';
import R from 'ramda';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';
import TeamItem from './teamItem';



class TeamList extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<View>
				{ R.map((team) => TeamItem(team, this.props.menu, this.props.handleClick, this.props.onNewBaseClick,
					this.props.toggleTeamPopup, this.props.teamPopupIsShow, this.props.setTeamModal,
					this.props.activeModal, this.props.updateTeam, this.props.deleteTeam, this.props.getCollaborators,
					this.props.collaborators, this.props.showUserPopup, this.props.isShowUserPopup,
					this.props.activeShareModal, this.props.changeActiveShareModal, this.props.allUsers,
					this.props.getAllUsers, this.props.addCollaborator, this.props.deleteCollaborator,
					this.props.updateCollaboratorRole, this.props.saveCurrentTeamRoles, this.props.teamNames))(this.props.teams || []) }
				<View style={styles.teamContainer}>
					<TouchableHighlight
					     onPress={() => {
						      this.props.addNewTeam(this.props.user._id)
					     }}>
                        <Text style={styles.teamName}>{'+ Add new team'.toUpperCase()}</Text>
                    </TouchableHighlight>
				</View>
			</View>
		)
	}
}

export default TeamList;

const styles = StyleSheet.create({
    teamContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 15,
        backgroundColor: '#d8d8d8',
    },
    teamName: {
        fontFamily: 'notoserif',
        fontSize: 16,
        color: '#7b7b7b'
    }
});