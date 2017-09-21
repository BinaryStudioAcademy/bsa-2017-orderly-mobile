import React from 'react';
import { StyleSheet, View, ScrollView, TouchableOpacity, Text } from 'react-native';
import Drawer from 'react-native-drawer'
import HomePageTeamBlock from './homePageTeam/bases/homePageTeamBlock';
import HomePageHeader from './homePageHeader';
import Auth from '../auth/auth';
import ControlPanel from './ControlPanel';

class HomePageContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            drawerOpen: false,
            drawerDisabled: false,
        };
    }

    closeDrawer = () => {
        this._drawer.close()
    };

    openDrawer = () => {
        this._drawer.open()
    };

    componentWillMount() {
        Auth.getToken().then(token => {
            this.props.getUser();
        });
    }

    render() {
        return (
            <Drawer
                ref={(ref) => this._drawer = ref}
                type="displace"
                content={
                    <View style={styles.menuContentContainer}>
                        <ControlPanel closeDrawer={this.closeDrawer} user={this.props.user}/>
                    </View>
                }
                acceptDoubleTap
                styles={{main: {shadowColor: '#000000', shadowOpacity: 0.3, shadowRadius: 15}} }
                onOpen={() => {
                    console.log('onopen')
                    this.setState({drawerOpen: true})
                }}
                onClose={() => {
                    console.log('onclose')
                    this.setState({drawerOpen: false})
                }}
                captureGestures={false}
                /*tweenHandler={(ratio) => ({
                    main: { opacity:(1.5-ratio)/1.5 }
                  })}*/
                tweenDuration={100}
                panThreshold={0.08}
                disabled={this.state.drawerDisabled}
                openDrawerOffset={(viewport) => {
                    return 200
                }}
                closedDrawerOffset={() => 0}
                panOpenMask={0.2}
                negotiatePan
                >
                <HomePageHeader user={this.props.user} style={styles.homePageHeader}/>
                <ScrollView style={styles.homePageBody}>
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
            </Drawer>
        )
    }
}

export default HomePageContainer;

const styles = StyleSheet.create({
    menuContentContainer: {
        flex: 1,
        justifyContent: 'flex-start',

    },
    drawerContainer: {
        padding: 20,
        flex: 1,
    },
    homePageHeader: {
        backgroundColor: 'rgb(250, 250, 250)'
    },
    homePageBody: {
        backgroundColor: 'rgb(250, 250, 250)'
    }
})