import React, {Component} from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import BaseItem from './homePageBaseItem';
//import ModalImportSpreadsheet from './baseImportPopUp'
import Prompt from 'react-native-prompt';

let temporaryKey = 0;

class BaseList extends Component {
	constructor(props) {
		super(props)
		this.state ={
			promptVisible: false
		}
	}

	render() {
		const props = this.props
		if (this.props.bases) {
			return (
				<View>
                    { this.props.bases && this.props.bases.map(function (base) {
                        return (
                            <View key={base._id || ++temporaryKey}>
                                <BaseItem
                                          handleClick={props.handleClick}
                                          teamId={props.teamId}
                                          collaborators={props.collaborators}
                                          saveCurrentTeamRoles={props.saveCurrentTeamRoles}
                                          team={props.team}
                                          base={base}
                                          menu={props.menu}
                                          teamNames={props.teamNames}
                                />
                            </View>
                        )
                    })}
					<TouchableOpacity style={styles.baseContainer}
					    onPress={(event) => this.setState({promptVisible: true})/*props.onNewBaseClick('#234FED', props.teamId)*/}>
                        <View style = {styles.baseIconContainer}>
                            <Text style={styles.baseIcon}>+</Text>
                        </View>
                        <Prompt
                             title="Please, enter Base name"
                             placeholder="Base name"
                             defaultValue="New base"
                             visible={ this.state.promptVisible }
                             onCancel={ () => this.setState({
                               promptVisible: false
                             }) }
                             onSubmit={ (value) => {
                                 props.onNewBaseClick('#234FED', props.teamId, value);
                                 this.setState({
                                    promptVisible: false
                                 })
                             }}
                        />
                        <Text style={styles.baseName}>Add New Base</Text>
                    </TouchableOpacity>
				 </View>
			)
		} else {
			return (<View></View>)
		}

	}
}
//<PromptCreateNewBase promptVisible={this.state.promptVisible} teamId={props.teamId}/>
export default BaseList;

//<ModalImportSpreadsheet teamId={this.props.teamId}/>

/*
                        <View ref="createBase">
                            <View>
                                <View></View>
                                <View>
                                    <Image source={template} />
                                    <Text>Start with a template</Text>
                                </View>

                                <View onClick={(event) => {props.onNewBaseClick('#234FED', props.teamId); this.handleClickOnMenu(event)}}>
                                    <Image source={scratch} />
                                    <Text>Start from scratch</Text>
                                </View>
                            </View>
                        </View>
*/
const styles = StyleSheet.create({
    baseContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 12,
        borderBottomWidth: 1,
        borderColor: 'rgba(142, 142, 142, 0.14)'
    },
    baseIconContainer: {
        justifyContent: 'center',
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: '#8e8e8e',
        width: 40,
        height: 40
    },
    baseIcon: {
        alignSelf: 'center',
        fontSize: 20
    },
    baseName: {
        fontFamily: 'Roboto',
        fontSize: 16,
        marginLeft: 20
    }
});