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
            title: 'A TABLE',
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
        console.log('TABLE PROPS');
        console.log(this.props);
        return (
            <View style={styles.container}>
                <FlatList
                    style={styles.tableContent}
                    data={this.props}
                    renderItem={({item, index}) => (
                        <Text
                            style={ESS.child(styles, 'item', index, this.data.length)}
                            onPress={() => this.onOpenRecord(item.recordId || item.key)}
                        >
                            {index}. {item.key} {item.data || null}
                        </Text>)
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
        backgroundColor: '#FFF',
    },
    tableContent: {
    },
    item: {
        borderRadius: 10,
        backgroundColor: '#DDD',
        padding: 10,
        fontSize: 17,
        margin: 5,
    },
    'item:last-child': {
        marginBottom: 80,
    }
});

function mapDispatchToProps(dispatch) {
    return bindActionCreators(tableActions, dispatch);
}

export default connect(null, mapDispatchToProps)(Table);