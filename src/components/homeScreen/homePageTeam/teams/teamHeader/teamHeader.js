import React, {Component} from 'react';
import R from 'ramda';
import { StyleSheet, View, Text } from 'react-native';
import ShareBlock from './shareBlock';

class TeamHeader extends Component {
	constructor(props) {
		super(props)
	}

	componentWillMount() {
		if (R.isEmpty(this.props.collaborators)) {
			this.props.getCollaborators(this.props.team._id, R.pluck('userId', this.props.team.collaborators))
		}
	}

	render() {
		return (
			<View>
				<View
				     onContextMenu={(event) => {
					     event.stopPropagation();
					     event.preventDefault();
					     this.props.toggleTeamPopup(this.props.team._id, !this.props.teamPopupIsShow.isShow)
					     setTimeout(() => {
						     this.props.toggleTeamPopup(this.props.team._id, false)
					     } , 3000)
				     }}>
				        <Text>{this.props.team.name}</Text>
				     </View>
				<ShareBlock collaborators={this.props.collaborators}
				            updateCollaboratorRole={this.props.updateCollaboratorRole}
				            deleteCollaborator={this.props.deleteCollaborator}
				            addCollaborator={this.props.addCollaborator}
			                allUsers={this.props.allUsers}
				            getAllUsers={this.props.getAllUsers}
				            activeShareModal={this.props.activeShareModal}
				            changeActiveShareModal={this.props.changeActiveShareModal}
				            isShowUserPopup={this.props.isShowUserPopup}
				            showUserPopup={this.props.showUserPopup}
				            team={this.props.team}/>
			</View>
		)
	}
}

export default TeamHeader;