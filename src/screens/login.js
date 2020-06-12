import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button } from 'react-native-elements';
import { View, TextInput, StyleSheet, Text, Image } from 'react-native';
import { setLoginStatus } from '../reducers/user';
import { inputStyle, headerH5Style } from '../styles/custom-ui';

function LoginScreen({ navigation, setLoginStatus }) {
    const [pending, setPending] = useState(false);
    const [email, setEmail] = useState('admin@gmail.com');
    const [password, setPassword] = useState('password');

    function getRole() {
        const parts = email.split('@');
        const role = parts[0];

        if (role) {
            return role;
        } else {
            return 'student';
        }
    }

    function onSubmit() {
        setPending(true);
        setTimeout(() => {
            setLoginStatus(true, {
                role: getRole()
            });
            navigation.navigate('Home');
            setPending(false);
        }, 1500);
    }

    return (
        <View style={styles.wrapper}>
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Image style={styles.logo} resizeMode='contain' source={require('../images/wirfuerschule_final.png')}/>
            </View>
            <Text style={{...headerH5Style, fontWeight: 'bold', marginBottom: 40, textAlign: 'center'}}>Please, authorize</Text>
            <Text style={styles.label}>Deine E-Mail-Adresse</Text>
            <TextInput
                style={inputStyle}
                autoCompleteType="email"
                value={email}
                onChangeText={text => setEmail(text)}
            />
            <Text style={styles.label}>Dein Passwort</Text>
            <TextInput
                style={inputStyle}
                secureTextEntry={true}
                autoCompleteType="password"
                value={password}
                onChangeText={text => setPassword(text)}
            />
            <View style={styles.buttonHolder}>
                { !pending && <Button
                    title="Login"
                    onPress={() => { onSubmit() }}
                /> }
                { pending && <Button
                    loading
                /> }
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    logo: {
        width: 250,
        height: 80
    },
    wrapper: {
        flex: 1,
        justifyContent: 'center',
        padding: 20
    },
    label: {
        fontWeight: 'bold'
    },
    buttonHolder: {
        marginTop: 15
    }
});

const mapDispathToProps = dispatch => bindActionCreators({
    setLoginStatus
}, dispatch);

export default connect(() => ({}), mapDispathToProps)(LoginScreen)
