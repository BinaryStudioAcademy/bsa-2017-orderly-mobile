import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Icon } from 'react-native-elements';
//import ModalDublicateBase from '../homePage/homePageTeam/bases/dublicateBasePopUp'

let BaseOptions = (props) => {
    return (
        <View>
            <View>
                <View>
                    <Icon name='send'/>
                    <Text>Share</Text>
                </View>
                <View>
                    <Icon name='info' className='icon' color='black'    />
                    <Text>Description</Text>
                </View>

                <View>
                    <Icon name='settings applications'/>
                    <Text>Slack notifications</Text>
                </View>
                <View onClick={()=> props.handleClick(null, 'delete', props.base._id)}>
                    <Icon name='delete'/>
                    <Text>Delete Base</Text>
                </View>
            </View>
        </View>
    )
}

export default BaseOptions

//<ModalDublicateBase handleClick = {props.handleClick} teamId = {props.teamId} base = {props.base} teamNames={props.teamNames}/>