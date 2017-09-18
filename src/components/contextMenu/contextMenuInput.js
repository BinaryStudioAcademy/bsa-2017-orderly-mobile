import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, FormInput } from 'react-native-elements';

class BaseName extends Component {
    constructor(props) {
        super(props);
        this.state ={ name: '' }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ 
                name: nextProps.base ? nextProps.base.name : ''
        })
    }
    render(){
        let input
        return (
            <View>                
                <FormInput
                    placeholder="Base Name"
                    defaultValue={this.state.name}
                    onChange = {(e) => this.setState({ name: e.target.value})}
                />
                <Button
                    onPress={e => {
                    this.props.handleClick(this.state.name, 'name', this.props.base._id)
                    }}
                />
            </View>
        )
    }
}

export default BaseName;