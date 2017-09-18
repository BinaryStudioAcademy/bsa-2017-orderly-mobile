import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { baseIcons } from '../configuration/baseIcons'

class BaseIcon extends React.Component { 
 render(){
    return (
        <View>
            <View>
                {baseIcons.map((icon, i) => {
                    return (
                        <View key={i}>
                            <Icon
                                name={icon}
                                onClick={()=> this.props.handleClick(icon, 'icon', this.props.base._id)}
                            />
                        </View>
                 )})
                }
            </View>
        </View>
        )
    }
 }

export default BaseIcon

