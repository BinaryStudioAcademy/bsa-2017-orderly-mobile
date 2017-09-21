import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Text, View, Button, Image, FlatList, TouchableHighlight} from 'react-native';
import ESS from 'react-native-extended-stylesheet';
import {bindActionCreators} from 'redux';
import * as tableActions from './tableActions';
import ActionButton from 'react-native-action-button';

class Table extends Component {
    static navigationOptions = ({navigation}) => {
        return {
            title: 'A TABLE',
        }
    };

    onAddRecord = (tableId) => {
        this.props.addRecord(tableId);
    };

    onOpenRecord = (recordId) => {
        this.props.openRecord(recordId);
    };

    onRemoveRecord = (tableId, recordId) => {
        console.log('IN SCREEn');
        console.log(tableId, recordId);
        this.props.removeRecord(tableId, recordId);
    };

    render() {
        const {table} = this.props.screenProps;
        console.log('TABLE PROPS');
        console.log(this.props);
        return (
            <View style={styles.container}>
                <FlatList
                    style={styles.tableContent}
                    data={table.records}
                    keyExtractor={(record) => record._id}
                    renderItem={({item, index}) => (
                        <TouchableHighlight onLongPress={() => this.onRemoveRecord(table._id, item._id)}>
                            <View
                                style={ESS.child(styles, 'record', index, table.records.length)}
                                onPress={() => this.onOpenRecord(item._id)}
                            >
                                {item.record_data.slice(0,4).map((record, index) =>
                                    (<View key={record._id}
                                           style={ESS.child(styles, 'recordContainer', index, item.record_data.length)}
                                           onPress={() => this.onOpenRecord(item._id)}
                                    >
                                        <Text style={styles.fieldName} numberOfLines={1}>
                                            {index !== 0 &&
                                            table.fields[index].name}
                                        </Text>
                                        <Text style={ESS.child(styles, 'recordData', index, item.record_data.length)}
                                            numberOfLines={1}
                                        >
                                            {record.data || (index === 0 ? 'Unnamed record' : ' ')}
                                        </Text>
                                    </View>)
                                )}
                                <Button title='Delete' onPress={() => this.onRemoveRecord(table._id, item._id)}/>
                            </View>
                        </TouchableHighlight>)
                    }
                />
                <ActionButton
                    buttonColor='rgba(40,130,255,1)'
                    offsetY={15}
                    onPress={() => this.onAddRecord(table._id)}/>
            </View>
        );
    }
}

const styles = ESS.create({
    container: {
        flex: 1,
        backgroundColor: '#DDD',
    },
    tableContent: {
    },
    record: {
        borderRadius: 5,
        backgroundColor: '#FFF',
        padding: 5,
        margin: 15,
        marginBottom: 0,
        flexDirection: 'row',
        flexWrap: 'wrap',
        elevation: 1,
    },
    'record:last-child': {
        marginBottom: 85,
    },
    primaryField: {
        fontSize: 20,
        color: '#000'
    },
    recordContainer: {
        padding: 4,
        margin: 4,
    },
    'recordContainer:first-child': {
        width: '98%',
        maxWidth: '100%'
    },
    recordData: {
        maxWidth: 100,
    },
    'recordData:first-child': {
        fontSize: 20,
        maxWidth: '100%',
        color: '#000',
    },
    fieldName: {
        width: 100,
        maxWidth: 100,
        overflow: 'hidden',
    }
});

function mapDispatchToProps(dispatch) {
    return bindActionCreators(tableActions, dispatch);
}

export default connect(null, mapDispatchToProps)(Table);