import React, {Component} from 'react';
import R from 'ramda';
import { StyleSheet, View, Text } from 'react-native';
import { Icon } from 'react-native-elements';

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
					this.props.updateCollaboratorRole, this.props.saveCurrentTeamRoles, this.props.teamNames)) }
				<View>
					<View
					     onClick={() => {
						      this.props.addNewTeam(this.props.user._id)
					     }}>
					     <Icon name='plus-one'/>
					     <View>
					        <Text>Add_new_team</Text>
                         </View>
                    </View>

				</View>
			</View>
		)
	}
}

//(this.props.teams || [])

export default TeamList;
