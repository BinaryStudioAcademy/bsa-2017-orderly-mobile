import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, Button, Image, FlatList } from 'react-native';
import { Icon } from 'react-native-elements';

class Dashboard extends Component {
    static navigationOptions = ({navigation}) => {
        console.log(navigation);
        return {
        title: navigation.state.params,
        rightButtons: []
    }};

    onSwitchTable = (tableId) => {
        this.props.navigation.navigate()
    };

    constructor(props) {
        super(props);
        this.state = {
            baseName: '',
        };
    }
    
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={styles.headerBase}>
                        <View style={styles.baseTitle}>
                            <Icon type='font-awesome' name='cogs'/>
                            <Text style={styles.baseName}>{this.props.dashboard.base.name} </Text>
                        </View>
                        <Image style={styles.headerUser} source={require('../../images/default-avatar.png')}/>
                    </View>
                </View>
                <FlatList
                    data={[
                        {key: 'Devin', data: 'OK'},{key: 'Jackson'},{key: 'James'},{key: 'Joel'},{key: 'John'},{key: 'Jillian'},{key: 'Jimmy'},{key: 'Julie'},
                        {key: 'Devin2'},{key: 'Jackson2'},{key: 'James2'},{key: 'Joel2'},{key: 'John2'},{key: 'Jillian2'},{key: 'Jimmy2'},{key: 'Julie2'},
                        {key: 'Devin3'},{key: 'Jackson3'},{key: 'James3'},{key: 'Joel3'},{key: 'John3'},{key: 'Jillian3'},{key: 'Jimmy3'},{key: 'Julie3'},
                    ]}
                    renderItem={({item}) => <Text style={styles.item}>{item.key} {item.data || null}</Text>}
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
    header: {
        height: 50,
        marginBottom: 5,
        backgroundColor: '#000',
    },
    headerBase: {
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#AAA',
    },
    baseTitle: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    headerHome: {
        color: '#F00',
    },
    baseName: {
        textAlign: 'center',
        fontSize: 20,
        margin: 5,
    },
    headerUser: {
        height: 50,
        width: 50,
        resizeMode: 'center',
    },
    item: {
        borderRadius: 10,
        backgroundColor: '#AAF',
        padding: 5,
        fontSize: 17,
        margin: 5,
    },
});

const mapStateToProps = (state) => ({
    dashboard: state.dashboard
});

export default connect(mapStateToProps)(Dashboard);