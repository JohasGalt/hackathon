import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { CheckBox } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Feather';

function UserBlock({ navigation, user, control, item, pressCB = () => false }) {
    const [checked, setChecked] = useState(false);
    const { permissions } = user;

    function getRole() {

    }

    function selectUser() {
        setChecked(!checked);
    }

    function onUserPressed() {
        if (control === 'checkbox') {
            setChecked(!checked);
            item.checked = !checked;
        }

        pressCB();
    }

    function onUserEdit() {
        navigation.navigate('ManageUser', { user: item });
    }

    function controlIcon() {
        if (control === 'checkbox') {
            return permissions.editChats && <CheckBox
                center
                checkedIcon='dot-circle-o'
                uncheckedIcon='circle-o'
                uncheckedColor="lightgrey"
                containerStyle={{ marginRight: 0}}
                onPress={() => selectUser()}
                checked={checked}
            />;
        } else {
            return permissions.editChats && <TouchableOpacity onPress={onUserEdit}>
                <Icon name="settings" size={20} color="grey" style={{marginRight: 25 }} />
            </TouchableOpacity>
        }
    }

    function getSource ({ type, image }) {
        if (type === 'base64') {
            return { uri: image }
        }
        return image;
    }

    return <View style={styles.userBlock}>
        <TouchableOpacity onPress={onUserPressed} style={styles.user}>
            <Image source={getSource(item)} style={styles.userImage}/>
            <View style={styles.userInfo}>
                <Text style={styles.userName}>{item.name}</Text>
                <Text style={styles.userSnippet}>{item.role.id}</Text>
            </View>
        </TouchableOpacity>
        { controlIcon() }
    </View>
}

const styles = StyleSheet.create({
    userBlock: {
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        display: 'flex'
    },
    userInfo: {
        justifyContent: 'center',
    },
    user: {
        flexDirection: 'row',
        display: 'flex',
        flex: 1,
        paddingVertical: 15,
        paddingHorizontal: 20
    },
    userImage: {
        backgroundColor: 'lightgrey',
        height: 45,
        width: 45,
        marginRight: 15,
        borderRadius: 5
    },
    userName: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    userSnippet: {
        fontSize: 14,
    }
});

const mapStateToProps = ({ user }) => {
    return {
        user
    }
};

export default connect(mapStateToProps)(UserBlock);
