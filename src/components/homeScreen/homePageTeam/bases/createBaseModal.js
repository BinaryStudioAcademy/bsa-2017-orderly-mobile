import React, { Component } from 'react';
import { Modal, Text, TouchableHighlight, View, StyleSheet } from 'react-native';
import Prompt from 'react-native-prompt';

class PromptCreateNewBase extends Component {

  state = {
    modalVisible: false,
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
    <View>
     <Prompt
         title="Say something"
         placeholder="Start typing"
         defaultValue="Hello"
         visible={ this.state.promptVisible }
         onCancel={ () => this.setState({
           promptVisible: false,
           message: "You cancelled"
         }) }
         onSubmit={ (value) => {
           this.props.onNewBaseClick('#234FED', this.props.teamId);
           this.props.promptVisible = false;
           /*this.setState({
             promptVisible: false,
             message: `You said "${value}"`
           })
           */
         }}
     />
    </View>
    );
  }
}

export default PromptCreateNewBase;

