import React, {Component} from 'react';
import R from 'ramda';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import NavigatorService from '../../../../../navigators/navigatorService';
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
            <View style={styles.teamContainer}
                 /*onContextMenu={(event) => {
                     event.stopPropagation();
                     event.preventDefault();
                     this.props.toggleTeamPopup(this.props.team._id, !this.props.teamPopupIsShow.isShow)
                     setTimeout(() => {
                         this.props.toggleTeamPopup(this.props.team._id, false)
                     } , 3000)
                 }}*/>
                    <Text style={styles.teamName}>{this.props.team.name.toUpperCase()}</Text>
                    <TouchableOpacity>
                        <Icon name='mode-edit'
                            style={styles.teamEditIcon}
                            onPress={() => NavigatorService.navigate('EditTeam', {id: this.props.team._id, name: this.props.team.name})}/>
                    </TouchableOpacity>
            </View>
		)
	}
}

export default TeamHeader;
/*
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
*/

const styles = StyleSheet.create({
    teamContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
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