import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, Picker } from 'react-native';
import { Button, FormInput, Card, Icon } from 'react-native-elements';
import { DatePickerDialog } from 'react-native-datepicker-dialog';
import './date.js' ;

class UserProfileForm extends React.Component {
    constructor(props) {
        super(props);
            this.state = { 
                firstName: '',
                lastName: '',
                gender: '',
                birthday: '',
                country: '',
                city: '',
                address: '',
                phone: ''
            }
        this.handleSubmit = this.handleSubmit.bind(this); 
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            firstName: nextProps.user.firstName ? nextProps.user.firstName : '',
            lastName: nextProps.user.lastName ? nextProps.user.lastName : '',
            gender: nextProps.user.gender ? nextProps.user.gender : '' ,
            birthday: nextProps.user.birthday ? new Date(Date.parse(nextProps.user.birthday)).customFormat( "#YYYY#-#MM#-#DD#" ) : '',
            country: nextProps.user.country ? nextProps.user.country : '',
            city: nextProps.user.city ? nextProps.user.city : '',
            address: nextProps.user.address ? nextProps.user.address : '',
            phone: nextProps.user.phone ? nextProps.user.phone : ''
        });
    }

    handleSubmit(e) {
        const formData = {};
        for (const field in this.refs) {
            formData[field] = this.refs[field].props.value;
        }
        this.props.handleSubmitForm(this.props.user._id, formData);
    }

  /**
   * DOB textbox click listener
   */
    onDOBPress = () => {
        let birthday = this.state.birthday;

        if(!birthday || birthday == null){
            birthday = new Date();
            this.setState({
                birthday: birthday
            });
        }

        //To open the dialog
        this.refs.birthday.open({
            birthday: birthday,
            maxDate: new Date() //To restirct future date
        });
    }

  /**
   * Call back for dob date picked event
   *
   */
    onDOBDatePicked = (date) => {
        this.setState({
            birthday: date//,
            //dobText: moment(date).format('DD-MMM-YYYY')
        });
    }

    render() {
        return (
            <View style={styles.userProfileForm}>
                <View>

                        <View style={styles.formInputBlock}>
                            <Text style={styles.formInputLabel}>First name</Text>
                            <FormInput style={styles.userProfileFormInput} ref='firstName' placeholder='First name'
                                onChange = {(e) => this.setState({ firstName: e.nativeEvent.text})}
                                value={this.state.firstName}    />
                        </View>

                        <View style={styles.formInputBlock}>
                            <Text style={styles.formInputLabel}>Last name</Text>
                            <FormInput style={styles.userProfileFormInput} ref='lastName'    placeholder='Last name'
                                onChange = {(e) => this.setState({ lastName: e.nativeEvent.text})}
                                value={this.state.lastName}    />
                        </View>

                        <View style={styles.formInputBlock}>
                            <Text style={styles.formInputLabel}>Gender</Text>
                            <View style={styles.userProfileFormPicker}>
                                <Picker
                                    ref='gender'
                                    placeholder='Gender'
                                    selectedValue={this.state.gender}
                                    onValueChange={(itemValue, itemIndex) => this.setState({gender: itemValue})}>
                                    <Picker.Item label="Male" value="Male" />
                                    <Picker.Item label="Female" value="Female" />
                                </Picker>
                            </View>
                        </View>

                        <View style={styles.formInputBlock}>
                            <Text style={styles.formInputLabel}>Birthday</Text>

                            <View >
                                <TouchableOpacity onPress={this.onDOBPress.bind(this)} >
                                    <View style={styles.datePickerBox}>
                                        <Text style={styles.datePickerText}>{this.state.birthday}</Text>
                                    </View>
                                </TouchableOpacity>

                            </View>
                        </View>

                        <View style={styles.formInputBlock}>
                            <Text style={styles.formInputLabel}>Country</Text>
                            <FormInput style={styles.userProfileFormInput} ref='country' placeholder='Country'
                                onChange = {(e) => this.setState({ country: e.nativeEvent.text})}
                                value={this.state.country} />
                        </View>

                        <View style={styles.formInputBlock}>
                            <Text style={styles.formInputLabel}>City</Text>
                            <FormInput style={styles.userProfileFormInput} ref='city' placeholder='City'
                                onChange = {(e) => this.setState({ city: e.nativeEvent.text})}
                                value={this.state.city} />
                        </View>


                        <View style={styles.formInputBlock}>
                            <Text style={styles.formInputLabel}>Address</Text>
                            <FormInput style={styles.userProfileFormInput} ref='address' placeholder='Address'
                                onChange = {(e) => this.setState({ address: e.nativeEvent.text})}
                                value={this.state.address} />
                        </View>

                        <View style={styles.formInputBlock}>
                            <Text style={styles.formInputLabel}>Phone</Text>
                            <FormInput style={styles.userProfileFormInput} ref='phone' placeholder='Phone'
                                onChange = {(e) => this.setState({ phone: e.nativeEvent.text})}
                                value={this.state.phone} />
                        </View>

            <View style={styles.userProfileSubmitContainer}>
                <Button
                    style={styles.userProfileSubmitBtn}
                    buttonStyle={{backgroundColor: "#03A9F4", borderRadius: 4}}
                    textStyle={{textAlign: 'center', fontSize: 20}}
                    title="Save"
                    onPress={this.handleSubmit}>Update Data</Button>
            </View>
          </View>
           <DatePickerDialog ref="birthday" onDatePicked={this.onDOBDatePicked.bind(this)} />

        </View>
        )
    }
}

export default UserProfileForm;

const styles = StyleSheet.create({
    userProfileForm: {
        paddingTop: 0
    },
    userProfileFormInput: {
        backgroundColor: '#ffffff',
        borderRadius: 4,
        borderColor: '#ABABAB',
        borderWidth: 0.5,
        paddingLeft: 10,
        paddingRight: 10,
        fontSize: 16
    },
    formInputBlock: {
    },
    formInputLabel: {
        marginTop: 16,
        marginBottom: 7,
        fontSize: 16,
        paddingLeft: 19,
        color: 'rgb(170, 170, 170)',
        fontWeight: '500',
    },
    userProfileFormPicker: {
        marginLeft: 15,
        marginRight: 15,
        backgroundColor: '#ffffff',
        borderRadius: 4,
        borderColor: '#ABABAB',
        borderWidth: 0.5,
        padding: 0,
        height: 49,
    },
    datePickerBox:{
        marginTop: 9,
        marginLeft: 15,
        marginRight: 15,
        borderColor: '#ABABAB',
        borderWidth: 1,
        padding: 0,
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4,
        height: 49,
        justifyContent:'center',
        backgroundColor: '#ffffff',
    },
    datePickerText: {
        fontSize: 16,
        marginLeft: 5,
        borderWidth: 0,
        color: '#121212',
    },
    userProfileSubmitContainer: {
        //backgroundColor: 'rgb(250, 250, 250)',
        marginTop: 30,
        marginBottom: 40,
    },
    userProfileSubmitBtn: {
        fontSize: 16
    }
});
/*
<select style={styles.userProfileFormInput} ref='gender'  placeholder='Gender'
                onChange = {(e) => this.setState({ gender: e.nativeEvent.text})}
                value={this.state.gender} >
              <option>Male</option>
              <option>Female</option>
            </select>



    //                      <FormInput style={styles.userProfileFormInput} ref='birthday'    type= 'date'
//                              onChange = {(e) => this.setState({ birthday: e.nativeEvent.text})}
//                              value={this.state.birthday} />



              <Modal trigger={<Button type='submit'>Update Data</Button>} size ='tiny' closeIcon>
                <Modal.Content>
                  <View className='content-import-spreadsheet'>
                      <View className='content-subheader-share-form'>Your data has been successfully updated!</View>
                      <View className='thank-you'>Thank you! </View>
                      <View className='content-import-btn'><Link to={'/'}><Button color='blue'>Go to Orderly Home Page</Button></Link></View>
                  </View>
                </Modal.Content>
              </Modal>
*/