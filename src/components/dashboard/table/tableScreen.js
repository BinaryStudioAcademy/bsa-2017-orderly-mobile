import React, {Component} from 'react';
import {connect} from 'react-redux';
import {StyleSheet, Text, View, Button, Image, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {bindActionCreators} from 'redux';
import * as tableActions from './tableActions'

class Table extends Component {
    static navigationOptions = ({navigation}) => {
        console.log('TABLE NAV OPTIONS');
        console.log(navigation);
        return {
            title: 'A TABLE',
        }
    };

    onOpenRecord = (recordId) => {
        this.props.openRecord(recordId);
    };

    render() {
        console.log('TABLE PROPS');
        console.log(this.props);
        return (
            <View style={styles.container}>
                <FlatList
                    data={[
                        {key: 'Devin', data: 'OK', recordId: 666}, {key: 'Jackson'}, {key: 'James'}, {key: 'Joel'}, {key: 'John'}, {key: 'Jillian'}, {key: 'Jimmy'}, {key: 'Julie'},
                        {key: 'Devin2'}, {key: 'Jackson2'}, {key: 'James2'}, {key: 'Joel2'}, {key: 'John2'}, {key: 'Jillian2'}, {key: 'Jimmy2'}, {key: 'Julie2'},
                        {key: 'Devin3'}, {key: 'Jackson3'}, {key: 'James3'}, {key: 'Joel3'}, {key: 'John3'}, {key: 'Jillian3'}, {key: 'Jimmy3'}, {key: 'Julie3'},
                    ]}
                    renderItem={({item}) => (
                        <Text
                            style={styles.item}
                            onPress={() => this.onOpenRecord(item.recordId || item.key)}
                        >
                            {item.key} {item.data || null}
                        </Text>)
                    }
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EEE',
    },
    item: {
        borderRadius: 10,
        backgroundColor: '#AAF',
        padding: 5,
        fontSize: 17,
        margin: 5,
    },
});

function mapDispatchToProps(dispatch) {
    return bindActionCreators(tableActions, dispatch);
}

export default connect(null, mapDispatchToProps)(Table);