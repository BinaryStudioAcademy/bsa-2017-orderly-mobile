import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Text, View, Button, Image, FlatList} from 'react-native';
import ESS from 'react-native-extended-stylesheet';
import {bindActionCreators} from 'redux';
import * as tableActions from './tableActions'
import ActionButton from 'react-native-action-button';

class Table extends Component {
    static navigationOptions = ({navigation}) => {
        console.log('TABLE NAV OPTIONS');
        console.log(navigation);
        return {
            tintColor: '#FAA',
            title: 'A TABLE',
            headerStyle: {
                color: '#AAF',
            },
            tabBarOptions: {
                activeTintColor: '#AAA',
                inactiveTintColor: '#000',
                labelStyle: {
                    fontSize: 2,
                },
                style: {
                    backgroundColor: '#EAF',
                }

            }
        }
    };

    onOpenRecord = (recordId) => {
        this.props.openRecord(recordId);
    };

    onAddRecord = (tableId) => {
        console.log('ADD RECORD BUTT');
        console.log(tableId);
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
                        <View
                            style={ESS.child(styles, 'record', index, table.records.length)}
                            onPress={() => this.onOpenRecord(item._id)}
                        >
                            {item.record_data.slice(0,4).map((record, index) =>
                                (<View key={record._id}
                                       style={ESS.child(styles, 'recordContainer', index, item.record_data.length)}
                                       onPress={() => this.onOpenRecord(item._id)}
                                >
                                    <Text style={styles.fieldName}>
                                        {index !== 0 &&
                                        table.fields[index].name}
                                    </Text>
                                    <Text style={ESS.child(styles, 'recordName', index, item.record_data.length)}>
                                        {record.data || (index === 0 ? 'Unnamed record' : '')}
                                    </Text>
                                </View>)
                            )}
                        </View>)
                    }
                />
                <ActionButton
                    buttonColor='rgba(40,130,255,1)'
                    offsetY={15}
                    onPress={() => this.onAddRecord(123)}/>
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
        // borderColor: 'rgba(0,0,0,0.8)',
        // borderRadius: 4,
        // borderWidth: 1,
    },
    'recordContainer:first-child': {
        width: '98%',
    },
    'recordName:first-child': {
        fontSize: 20,
        color: '#000',
    },
    fieldName: {

    }
});

function mapDispatchToProps(dispatch) {
    return bindActionCreators(tableActions, dispatch);
}

export default connect(null, mapDispatchToProps)(Table);