import React, { useState } from 'react';
import { View, TextInput, ScrollView, StyleSheet, Container } from 'react-native';
import { Button } from 'react-native-elements';
import UserBlock from '../common/user-block';
import randomUsersList from '../utils/random-users-list';

function CreateChat({ navigation }) {
    const [members, setMembers] = useState(randomUsersList());
    const [selectedUsers, setSelectedUsers] = useState(0);
    const searchInputRef = React.createRef();

    function onUserSelected() {
        let counter = 0;

        members.forEach(item => {
            if (item.checked) {
                counter++;
            }
        });

        setSelectedUsers(counter);
    }

    function formChatButton() {
        let partition = ` (${selectedUsers} member${selectedUsers > 1 ? 's' : ''})`;

        if  (!selectedUsers) {
            partition = '';

            return;
        }

        return <Button onPress={() => navigation.navigate('Chat', {})} title={`Start chat ${partition}`} style={styles.chatButton}/>
    }

    return <View>
        <TextInput style={styles.searchInput} placeholder="Search for members" ref={searchInputRef}/>
        { formChatButton() }
        <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 50 }}>
            { members.map(item => (
                <UserBlock control="checkbox" item={item} pressCB={onUserSelected} />
            )) }
        </ScrollView>
    </View>
}


const styles = StyleSheet.create({
    chatButton: {
    },
    container: {
        borderTopColor: 'lightgrey',
        borderTopWidth: 1
    },
    searchInput: {
        paddingHorizontal: 20,
        fontWeight: 'bold'
    }
});

export default CreateChat;
