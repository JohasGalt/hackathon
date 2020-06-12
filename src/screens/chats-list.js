import React from 'react';
import { connect } from 'react-redux';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
//import FourBlocksView from '../common/four-blocks-view';
import Icon from 'react-native-vector-icons/Feather';

function ChatsList({ navigation, user }) {
    const { permissions, chats } = user;

    function getLastMessage(item) {
        if (item.messages) {
            return item.messages[item.messages.length - 1].text;
        }

        return item.lastMessage;
    }

    return (
        <ScrollView contentContainerStyle={styles.scrollViewStyle}>
            { chats.map((item, index) => (
                <View key={index} style={styles.chatBlock}>
                    <TouchableOpacity onPress={() => navigation.navigate('Chat', { messages: item.messages })} style={styles.chat}>
                        {/*<FourBlocksView/>*/}
                        <Image source={{
                            uri: `https://picsum.photos/${60 + Math.floor(Math.random() * 100)}`
                        }} style={styles.chatImage}/>
                        <View style={styles.chatInfo}>
                            <Text numberOfLines={1} style={styles.chatName}>{item.title}</Text>
                            <Text numberOfLines={1} style={styles.chatSnippet}>{getLastMessage(item)}</Text>
                        </View>
                    </TouchableOpacity>
                    { permissions.editChats && <TouchableOpacity>
                        <Icon name="settings" size={20} color="grey" style={styles.icon} />
                    </TouchableOpacity> }
                </View>
            )) }
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollViewStyle: {
        paddingBottom: 68
    },
    chatBlock: {
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        display: 'flex'
    },
    icon: {
        marginRight: 25
    },
    chat: {
        flexDirection: 'row',
        display: 'flex',
        flex: 1,
        paddingVertical: 15,
        paddingHorizontal: 20
    },
    chatInfo: {
        flex: 1
    },
    chatImage: {
        backgroundColor: 'lightgrey',
        height: 52,
        width: 52,
        marginRight: 15,
        borderRadius: 5
    },
    chatName: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    chatSnippet: {
        fontSize: 14,
    }
});

const mapStateToProps = ({ user }) => {
    return {
        user
    }
};

export default connect(mapStateToProps)(ChatsList);
