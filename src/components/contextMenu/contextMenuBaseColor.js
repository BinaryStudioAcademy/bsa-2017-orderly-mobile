import React from 'react';
import { StyleSheet, View } from 'react-native';
import { colors } from '../configuration/baseColors'
                                                        // ToDo: change this: e.target.attributes.getNamedItem('value').value
class BaseColor extends React.Component { 
    render() {
        return (
            <View className = 'base-color-pallete'>
                <View onClick={(e)=> this.props.handleClick(e.target.attributes.getNamedItem('value').value, 'color', this.props.base._id)} value={colors.blue} title="blue" style = {{backgroundColor: `${colors.blue}` }} ></View>
                <View onClick={(e)=> this.props.handleClick(e.target.attributes.getNamedItem('value').value, 'color', this.props.base._id)} value={colors.cyan} title="cyan" style = {{backgroundColor: `${colors.cyan}` }} ></View>
                <View onClick={(e)=> this.props.handleClick(e.target.attributes.getNamedItem('value').value, 'color', this.props.base._id)} value={colors.teal} title="teal" style = {{backgroundColor: `${colors.teal}` }} ></View>
                <View onClick={(e)=> this.props.handleClick(e.target.attributes.getNamedItem('value').value, 'color', this.props.base._id)} value={colors.pink} title="pink" style = {{backgroundColor: `${colors.pink}` }} ></View>
                <View onClick={(e)=> this.props.handleClick(e.target.attributes.getNamedItem('value').value, 'color', this.props.base._id)} value={colors.red} title="red" style = {{backgroundColor: `${colors.red}` }} ></View>
                <View onClick={(e)=> this.props.handleClick(e.target.attributes.getNamedItem('value').value, 'color', this.props.base._id)} value={colors.orange} title="orange" style = {{backgroundColor: `${colors.orange}` }}></View>
                <View onClick={(e)=> this.props.handleClick(e.target.attributes.getNamedItem('value').value, 'color', this.props.base._id)} value={colors.yellow} title="yellow" style = {{backgroundColor: `${colors.yellow}` }}></View>
                <View onClick={(e)=> this.props.handleClick(e.target.attributes.getNamedItem('value').value, 'color', this.props.base._id)} value={colors.green} title="green" style = {{backgroundColor: `${colors.green}` }}></View>
                <View onClick={(e)=> this.props.handleClick(e.target.attributes.getNamedItem('value').value, 'color', this.props.base._id)} value={colors.purple} title="purple" style = {{backgroundColor: `${colors.purple}` }}></View>
                <View onClick={(e)=> this.props.handleClick(e.target.attributes.getNamedItem('value').value, 'color', this.props.base._id)} value={colors.gray} title="gray" style = {{backgroundColor: `${colors.gray}` }}></View>
            </View>
        )
    }
}

export default BaseColor