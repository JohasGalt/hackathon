import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-native-elements';
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import { bindActionCreators } from 'redux';
import { setLoginStatus, getLoginStatus } from '../reducers/user';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import ChatsList from './chats-list';

function HomeScreen({ navigation, setLoginStatus, getLoginStatus, user }) {
    const isLoggedIn = user.isLoggedIn;
    let _menu = null;

    function logout() {
        setLoginStatus(false);
        navigation.navigate('Login');
    }

    function setMenuRef(ref) {
        _menu = ref;
    }

    function hideMenu() {
        _menu.hide();
    }

    function showMenu() {
        _menu.show();
    }

    function userOptions() {
        return <>
            { user.options.map((item, i) => (
                <MenuItem key={i} onPress={() => {
                    hideMenu();
                    item.onPress(navigation);
                }}>{item.title}</MenuItem>
            )) }
        </>
    }

    function menu() {
        return (
            <Menu
                ref={setMenuRef}
                button={ <TouchableOpacity onPress={showMenu}>
                    <Icon name="menu" size={40} color="grey"/>
                </TouchableOpacity>}
            >
                { userOptions() }
                <MenuItem onPress={hideMenu}> Settings </MenuItem>
                <MenuItem onPress={hideMenu} disabled> Forum </MenuItem>
                <MenuDivider />
                <MenuItem onPress={logout}>Logout</MenuItem>
            </Menu>
        );
    }

    return (
        <View style={{flexDirection: 'column'}}>
            <View style={styles.header}>
                <Image style={styles.logo} resizeMode='contain' source={require('../images/logo.png')}/>
                <Text style={{fontWeight: 'bold', fontSize: 18}}>{user.description}     </Text>
                { !isLoggedIn && <Button
                    title="Login"
                    type="outline"
                    buttonStyle={styles.loginButton}
                    onPress={() => navigation.navigate('Login')}
                /> }
                { isLoggedIn && menu() }
            </View>
            <ChatsList navigation={navigation}/>
        </View>
    );
}

const mapStateToProps = ({ user }) => {
    return {
        user
    }
};

const mapDispathToProps = dispatch => bindActionCreators({
    setLoginStatus,
    getLoginStatus
}, dispatch);

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        height: 68,
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 25,
        paddingRight: 8,
        borderBottomColor: 'grey',
        borderBottomWidth: 2
    },
    buttonStyle: {
        flex: 1,
        borderWidth: 1,
        marginTop: 20
    },
    logo: {
        maxWidth: 40,
        marginRight: 15
    },
    loginButton: {
        paddingHorizontal: 20
    },
    contentWrapper: {
        padding: 20,
        marginBottom: 100
    }
});

export default connect(mapStateToProps, mapDispathToProps)(HomeScreen);

