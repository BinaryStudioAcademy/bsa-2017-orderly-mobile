import HomePageContainer from './homePageContainer';
import { connect } from 'react-redux';
import { getTeamsByUser, getBasesByTeam, toggleTeamPopup,
		setTeamModal, updateTeam, deleteTeam, addNewTeam,
		getCollaborators, showUserPopup, changeActiveShareModal,
		getAllUsers, addCollaborator, deleteCollaborator,
		updateCollaboratorRole, getCurrentUser, saveCurrentTeamRoles} from './homePageActions';

const mapStateToProps = (state) => {
  let teamNames = [];
  for (let team in state.baseStore.teams) {
  teamNames.push({
          value: state.baseStore.teams[team]._id,
          label: state.baseStore.teams[team].name,
      })
  }

  return ({
	teamNames: teamNames,
    menu: state.baseStore.showMenuforBase,
    user: state.baseStore.user,

	teams: state.baseStore.teams,
	teamPopupIsShow: state.baseStore.teamPopupIsShow,
	activeModal: state.baseStore.activeModal,
	collaborators: state.baseStore.collaborators,
	isShowUserPopup: state.baseStore.isShowUserPopup,
	activeShareModal: state.baseStore.activeShareModal,
	allUsers: state.baseStore.allUsers
  });
}
//avatar: state.userProfile.file,
const mapDispatchToProps = {
	getUser: getCurrentUser,
	getTeamsByUser: getTeamsByUser,
	getBasesByTeam: getBasesByTeam,
	toggleTeamPopup: toggleTeamPopup,
	setTeamModal: setTeamModal,
	updateTeam: updateTeam,
	deleteTeam: deleteTeam,
	addNewTeam: addNewTeam,
	getCollaborators: getCollaborators,
	showUserPopup: showUserPopup,
	changeActiveShareModal: changeActiveShareModal,
	getAllUsers: getAllUsers,
	addCollaborator: addCollaborator,
	deleteCollaborator: deleteCollaborator,
	updateCollaboratorRole: updateCollaboratorRole,
	saveCurrentTeamRoles: saveCurrentTeamRoles
}

const HomeScreen = connect(
    mapStateToProps,
    mapDispatchToProps
)(HomePageContainer);

HomeScreen.navigationOptions = {
    title: 'Back to Login',
};

export default HomeScreen;