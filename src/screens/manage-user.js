import React, {useState} from 'react';
import { TextInput, Image, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';
import DropDownPicker from 'react-native-dropdown-picker';
import { inputStyle } from "../styles/custom-ui";
import roles from '../constants/roles';
import { bindActionCreators } from "redux";
import { changeUserDetails } from "../reducers/users";
import { connect } from "react-redux";
import Icon from "react-native-vector-icons/Feather";
import ImagePicker from "react-native-image-picker";

function ManageUsers({ navigation, route, changeUserDetails, pending }) {
    React.useEffect(() => {

        if (route.params?.user) {
            changeUser({ ...route.params.user });
        }

    }, [route.params?.user]);

    const options = {
        title: 'Select Avatar',
        customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
        storageOptions: {
            skipBackup: true,
            path: 'images',
        },
    };

    const [user, changeUser] = useState({ name: '', role: '', image: '' });
    const data = Object.keys(roles).map(r => ({ value: r, label: r }));

    function onSubmit() {
        changeUserDetails(user);
    }

    function onIconEdit() {
        ImagePicker.launchImageLibrary(options, (response) => {
            let image;

            if (response.data) {
                image = 'data:image/jpeg;base64,' + response.data;
                changeUser({ ...user, image, type: 'base64' });
            }
        })
    }

    function getSource ({ type, image }) {
        if (type === 'base64') {
            return { uri: image }
        }
        return image;
    }

    return (
        <View style={styles.wrapper}>
            <View style={styles.imgWrapper}>
                <TouchableOpacity onPress={onIconEdit}>
                    <Icon name="camera" size={50} color="white" style={styles.camera} />
                    <Image style={styles.userImage} source={getSource(user)}/>
                </TouchableOpacity>
            </View>
            <Text style={styles.label}>Name</Text>
            <TextInput
                style={inputStyle}
                value={user.name}
                onChangeText={text => changeUser({...user, name: text})}
            />
            <Text style={styles.label}>Role</Text>
            <DropDownPicker
                items={data}
                placeholder={user.role.id}
                containerStyle={{height: 40, marginBottom: 20 }}
                onChangeItem={item => { console.log(item); changeUser({...user, role: roles[item.label]});}}
            />
            <View style={{ zIndex: 1 }} >
                { !pending &&  <Button
                    title="Save"
                    style={styles.buttonHolder}
                    onPress={() => { onSubmit() }}
                /> }
                { pending && <Button
                    loading
                /> }
            </View>
        </View>
    );
}

const mapStateToProps = ({ users }) => {
    return {
        pending: users.pending
    }
};

const mapDispathToProps = dispatch => bindActionCreators({
    changeUserDetails
}, dispatch);

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        padding: 20
    },
    imgWrapper: {
        alignItems: 'center'
    },
    userImage: {
        backgroundColor: 'lightgrey',
        height: 150,
        width: 150,
        marginRight: 15,
        borderRadius: 150
    },
    camera: {
        position: 'absolute',
        zIndex: 1,
        left: 52, top: 45
    },
    label: {
        fontWeight: 'bold'
    },
    buttonHolder: {
        marginTop: 15
    }
});

export default connect(mapStateToProps, mapDispathToProps)(ManageUsers)
