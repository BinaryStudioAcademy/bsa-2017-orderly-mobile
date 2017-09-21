import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, PixelRatio } from 'react-native';
import FileInput from 'react-file-input';
import ImagePicker from 'react-native-image-picker';
import avatar from '../../../images/avatar.png';
import AppConfig from '../../../config';

class UserProfilePhoto extends React.Component {
constructor(props) {
    super(props);
    this.props = props; 
    this.state = {
            avatar: ''
        }  
    }

    selectPhotoTapped() {
        const options = {
            quality: 1.0,
            maxWidth: 200,
            maxHeight: 200,
            storageOptions: {
                skipBackup: true
            }
        };

        ImagePicker.showImagePicker(options, (response) => {
          console.log('Response = ', response);

          if (response.didCancel) {
            console.log('User cancelled photo picker');
          }
          else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
          }
          else if (response.customButton) {
            console.log('User tapped custom button: ', response.customButton);
          }
          else {
            let source = { uri: response.uri };                                                     // ToDo: ???????????????????

            // You can also display the image using data:
            // let source = { uri: 'data:image/jpeg;base64,' + response.data };

            this.setState({
              avatar: source
            });
          }
        });
      }

    componentWillReceiveProps(nextProps) {
        this.setState({
        avatar: nextProps.user.avatar ? nextProps.user.avatar : ''
        })
    }

    handleFile = (event) => {
        let hasExtension = (inputID, exts) => {
            return (new RegExp('(' + exts.join('|').replace(/\./g, '\\.') + ')$')).test(event.target.files[0].name);
        }
        
        let file = event.target.files[0];
        const data = new FormData();
        data.append('file', event.target.files[0]);
        data.append('userId', this.props.user._id)

        if (file.size > 2097152 ) {
            alert ('please upload the photo with the size less than 2MB')
        } else if (!hasExtension(file, ['.jpg', '.gif', '.png'])) {
            alert("Sorry, " + event.target.files[0].name + " is invalid, allowed extensions are: .jpg, .png, and .gif");
        } else {
            this.props.handleFile(data);
        }
    }

    render() {
        return (
            <View style={styles.userProfilePhotoWrapper}>
                <View style={styles.userProfilePhoto}>

                </View>
                <View style={styles.container}>
                    <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
                        <View style={[styles.avatar, styles.avatarContainer, {marginBottom: 20}]}>
                        { this.state.avatar === null ? <Text>Select a Photo</Text> :
                            <Image
                                style={styles.avatar}
                                source={this.state.avatar == '' ? `${AppConfig.host}/files/${this.props.user.avatar}` : avatar} />
                        }
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
/*
<Image source={ this.state.avatar == '' ?
                                                `${AppConfig.host}/files/${this.props.user.avatar}`
                                                : avatar}
                                />

<Form>
                     <FileInput name="myImage"
                            accept=".png,.gif"
                            placeholder="My Image"
                            style={styles.changeAvatarInput}
                            onChange={this.handleFile} />
                </Form>
*/
export default UserProfilePhoto;

const styles = StyleSheet.create({
    userProfilePhotoWrapper: {
        backgroundColor: 'rgb(200, 200, 200)'
    },
    userProfilePhoto: {
        backgroundColor: 'rgb(200, 200, 200)'
    },
    changeAvatarInput: {

    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    avatarContainer: {
        borderColor: '#9B9B9B',
        borderWidth: 1 / PixelRatio.get(),
        justifyContent: 'center',
        alignItems: 'center'
    },
    avatar: {
        borderRadius: 75,
        width: 150,
        height: 150
    }
});