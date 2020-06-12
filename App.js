import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/home';
import CreateChat from './src/screens/create-chat';
import ManageUsers from './src/screens/manage-users';
import ManageUser from './src/screens/manage-user';
import LoginScreen from './src/screens/login';
import Chat from './src/screens/chat';
import ChatsList from './src/screens/chats-list';
import store from './store';
import { Provider } from 'react-redux';
import { getLoginStatus } from './src/reducers/user';

const Stack = createStackNavigator();

function nonLoggedIn() {
    return <>
        <Stack.Screen name="Login" component={LoginScreen} options={({ route }) => ({
            header: () => false
        })} />
        <Stack.Screen name="Home" component={HomeScreen} options={({ route }) => ({
            header: () => false
        })} />
    </>
}

function loggedIn() {
    return <>
        <Stack.Screen name="Home" component={HomeScreen} options={({ route }) => ({
            header: () => false
        })} />
        <Stack.Screen name="Login" component={LoginScreen} options={({ route }) => ({
            header: () => false
        })} />

    </>
}

function MyStack({ isLoggedIn }) {
    return (
        <Provider store={store}>
            <Stack.Navigator>
                { isLoggedIn && loggedIn() }
                { !isLoggedIn && nonLoggedIn() }
                <Stack.Screen name="Chat" component={Chat} />
                <Stack.Screen name="ChatsList" component={ChatsList}  />
                <Stack.Screen name="ManageUsers" component={ManageUsers} />
                <Stack.Screen name="ManageUser" component={ManageUser} />
                <Stack.Screen name="CreateChat" component={CreateChat}/>
            </Stack.Navigator>
        </Provider>
    );
}

export default function App() {
    const [loaded, setLoaded] = useState(false);
    const [isLoggedIn, setLoginStatus] = useState(false);

    getLoginStatus()(store.dispatch).then(({ isLoggedIn }) => {
        setLoginStatus(isLoggedIn);
        setLoaded(true);
    });

    return (
        <NavigationContainer>
            { loaded && <MyStack isLoggedIn={isLoggedIn} /> }
        </NavigationContainer>
    );
}
