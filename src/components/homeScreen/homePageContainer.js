import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import HomePageTeamBlock from './homePageTeam/bases/homePageTeamBlock';
import HomePageHeader from './homePageHeader';
import Auth from '../auth/auth';

class HomePageContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        Auth.getToken().then(token => {
            this.props.getUser();
        });
    }

    render() {
        return (
            <ScrollView>
                <HomePageHeader user={this.props.user}/>
                <View>
                    <HomePageTeamBlock teams={this.props.teams}
                                       teamNames={this.props.teamNames}
                                       tables={this.props.tables}
                                       updateCollaboratorRole={this.props.updateCollaboratorRole}
                                       deleteCollaborator={this.props.deleteCollaborator}
                                       addCollaborator={this.props.addCollaborator}
                                       allUsers={this.props.allUsers}
                                       getAllUsers={this.props.getAllUsers}
                                       activeShareModal={this.props.activeShareModal}
                                       changeActiveShareModal={this.props.changeActiveShareModal}
                                       isShowUserPopup={this.props.isShowUserPopup}
                                       showUserPopup={this.props.showUserPopup}
                                       collaborators={this.props.collaborators}
                                       getCollaborators={this.props.getCollaborators}
                                       updateTeam={this.props.updateTeam}
                                       addNewTeam={this.props.addNewTeam}
                                       deleteTeam={this.props.deleteTeam}
                                       activeModal={this.props.activeModal}
                                       setTeamModal={this.props.setTeamModal}
                                       getBasesByTeam={this.props.getBasesByTeam}
                                       getTeamsByUser={this.props.getTeamsByUser}
                                       teamPopupIsShow={this.props.teamPopupIsShow}
                                       toggleTeamPopup={this.props.toggleTeamPopup}
                                       user={this.props.user}
                                       menu={this.props.menu}
                                       saveCurrentTeamRoles={this.props.saveCurrentTeamRoles}
                                       showMenu={this.props.showMenu}
                    />
                </View>
            </ScrollView>
        )
    }
}

export default HomePageContainer