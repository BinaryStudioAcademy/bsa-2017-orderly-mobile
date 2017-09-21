import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
//import ShareModal from './shareModal/shareModal';
import Collaborators from './collaborators';

const ShareBlock = ({team, collaborators, showUserPopup, isShowUserPopup, activeShareModal,
	                changeActiveShareModal, allUsers, getAllUsers, addCollaborator, deleteCollaborator,
                    updateCollaboratorRole}) => (
	<View
	     onClick={() => {
		     changeActiveShareModal(team._id)
	     }}
	     >
		<Collaborators collaborators={collaborators}
		               isShowUserPopup={isShowUserPopup}
	                   showUserPopup={showUserPopup}
		               team={team}/>
		<Text>SHARE</Text>

	</View>
)

export default ShareBlock;
/*
<ShareModal team={team}
		            updateCollaboratorRole={updateCollaboratorRole}
		            deleteCollaborator={deleteCollaborator}
		            addCollaborator={addCollaborator}
                    allUsers={allUsers}
		            getAllUsers={getAllUsers}
		            collaborators={collaborators}
		            activeShareModal={activeShareModal}
		            changeActiveShareModal={changeActiveShareModal}/>
*/