import React from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Button, FormInput } from 'react-native-elements';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import NavigatorService from '../../../../navigators/navigatorService';
import {fieldIcons} from "../../../configuration/fieldTypes";

class RecordItemScreen extends React.Component {
    static navigationOptions = ({navigation}) => {
        const {params} = navigation.state;
        return {
            headerStyle: {backgroundColor: params.baseColor},
            headerTitleStyle: { color: 'rgb(230, 230, 230)'},
            headerTintColor: 'rgb(230, 230, 230)',
            title: params.currentRecord.record_data[0].data,
            headerRight: <TouchableOpacity onPress={() => {params.removeRecord(params.table._id, params.currentRecord._id); return navigation.goBack();}} >
                             <Text style={styles.deleteRecordItemIcon}><Icon name='trash' style={styles.deleteRecordItemIcon}/></Text>
                         </TouchableOpacity>
        }
    };

    render() {
        const {table, currentRecord, currentRecordIndex, changeRecord} = this.props.navigation.state.params;
        return (
        <ScrollView>
            <View style={styles.recordItemsScreenWrapper}>
               {currentRecord.record_data.map((recordItem, fieldIndex) => {
                    return (
                        <View key={recordItem._id} style={styles.recordItemContainer}>
                            <Text style={styles.recordItemFieldNameBlock}>
                                <Icon name={fieldIcons[table.fields[fieldIndex].type ]} style={styles.recordItemFieldIcon}/>
                                <Text>  </Text>
                                <Text style={styles.recordItemFieldName}>{table.fields[fieldIndex].name}</Text>
                            </Text>
                            <Recordtem id={recordItem._id}
                                    type={table.fields[fieldIndex].type}
                                    value={recordItem.data}
                                    currentField={table.fields[fieldIndex]}
                                    tableId={table._id}
                                    changeRecord={changeRecord}
                            />
                        </View>
                    )
                })}
            </View>
        </ScrollView>
        );
    }
}

export const Recordtem = ({id, type, value, tableId, currentField, changeRecord }) => {
    return (
        <FormInput style={styles.recordtemFormInput}
            underlineColorAndroid='transparent'
            onChange = {(e) => changeRecord(tableId, id, e.nativeEvent.text, null)}
            defaultValue={value}
        />
    );
};

export default RecordItemScreen;

const styles = StyleSheet.create({
    deleteRecordItemIcon: {
        fontSize: 26,
        marginRight: 19,
        color: 'rgb(230, 230, 230)'
    },
    recordItemsScreenWrapper: {
        backgroundColor: 'rgb(245, 245, 245)'
    },
    recordItemFieldNameBlock: {
        marginTop: 20   ,
        marginBottom: 9,
        fontSize: 16,
        paddingLeft: 19,
        color: 'rgb(170, 170, 170)',
        fontWeight: '500',
    },
    recordItemFieldIcon: {
        fontSize: 16
    },
    recordItemFieldName: {
        marginRight: 100,
        paddingRight: 100,
    },
    recordtemFormInput: {
        backgroundColor: '#ffffff',
        borderRadius: 4,
        borderColor: '#ABABAB',
        borderWidth: 0.5,
        paddingLeft: 10,
        paddingRight: 10,
        fontSize: 16
    },
});