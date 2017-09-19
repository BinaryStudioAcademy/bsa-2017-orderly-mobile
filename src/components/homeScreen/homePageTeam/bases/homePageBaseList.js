import React, {Component} from 'react';
import { StyleSheet, View, Image, Text, TouchableHighlight } from 'react-native';
import BaseItem from './homePageBaseItem';
import template from '../../../../images/template_gallery_icon.png'
import scratch from '../../../../images/empty_template_icon.png'
//import ModalImportSpreadsheet from './baseImportPopUp'

let temporaryKey = 0;

class BaseList extends Component {
	constructor(props) {
		super(props)
		this.state ={
			showMewnu: false,
			modalClass: false
		}
		this.handleClickOnMenu = this.handleClickOnMenu.bind(this);
    	this.handleOutsideClick = this.handleOutsideClick.bind(this);
	}
  	handleClickOnMenu(event) {
	    if (!this.state.showMewnu) {
	      document.addEventListener('click', this.handleOutsideClick, false);     // Todo: ????
	    } else {
	      document.removeEventListener('click', this.handleOutsideClick, false);  // Todo: ????
	    }

	     if (this.refs.createBase) {
	      this.setState(prevState => ({
	         showMewnu: !prevState.showMewnu
	      }));
	    }
  	}
	handleOutsideClick(e) {
	    if ( event.target.closest(".addBasePopover") === null) {                  // Todo: ????
	      if (this.node) {
	        if (this.node.contains(e.target)) {                                   // Todo: ????
	          return;
	        }
	      }
	    this.handleClickOnMenu();
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
                        })
                        }
					<View style={styles.baseContainer}>
                        <TouchableHighlight style = {styles.baseIconContainer}
                            onPress={(event) => {props.onNewBaseClick('#234FED', props.teamId)/*; this.handleClickOnMenu(event)*/}}>
                            <Text style={styles.baseIcon}>+</Text>
                        </TouchableHighlight>
                        <Text style={styles.baseName}>Add New Base</Text>
                    </View>
				 </View>
			)
		} else {
			return (<View></View>)
		}

	}
}

export default BaseList

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