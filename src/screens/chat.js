import React from 'react'
import {Image, Text, View } from 'react-native';
import { GiftedChat, Actions, Send, Bubble, SystemMessage } from 'react-native-gifted-chat';
import ImagePicker from 'react-native-image-picker';
import earlierMessages from '../constants/earlier-messages';
import { MaterialIcons } from '@expo/vector-icons';
import getRandomImage from '../utils/random-image';

const user = {
    _id: 1,
    name: 'Developer',
};

const replies = [{
        _id: 30,
        text: 'Thanks, you too 🙂🙂🙂',
        createdAt: new Date(),
        user: {
            _id: Math.random(),
            name: 'Developer',
            avatar: getRandomImage()
        },
    },
    {
        _id: 41,
        text: '',
        image: 'data:image/jpeg;base64,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',
        createdAt: new Date(),
        user: {
            _id: Math.random(),
            name: 'Developer',
            avatar: getRandomImage()
        },
        sent: true,
        received: true,
    }];

export default class Chat extends React.Component {
    state = {
        inverted: false,
        step: 0,
        messages: [],
        loadEarlier: true,
        typingText: null,
        isLoadingEarlier: false,
        appIsReady: false,
        isTyping: false,
    };

    options = {
        title: 'Select Avatar',
        customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
        storageOptions: {
            skipBackup: true,
            path: 'images',
        },
    };

    // renderMessageVideo = (props) => {
    //     const { currentMessage } = props;
    //
    //     return (
    //         <View style={{ padding: 20, width: 250, height: 250 }}>
    //             <Video source={{uri: 'http://techslides.com/demos/sample-videos/small.mp4'}}   // Can be a URL or a local file.
    //                ref={(ref) => {
    //                    this.player = ref
    //                }}
    //                    posterResizeMode="contain"
    //                    resizeMode="contain"
    //                    // repeat={true}
    //                    controls={true}
    //                 style={{
    //                     position: 'absolute',
    //                     top: 0,
    //                     bottom: 0,
    //                     left: 0,
    //                     right: 0,
    //                 }}// Store reference
    //             />
    //         </View>
    //     );
    // };

    _isMounted = false;

    componentDidMount() {
        const { messages = [] } = this.props.route.params;
        this._isMounted = true;

        this.setState({
            messages: [...messages].reverse(),
            appIsReady: true,
            isTyping: false
        })
    }

    componentWillUnmount() {
        this._isMounted = false
    }

    onLoadEarlier = () => {
        this.setState(() => {
            return {
                isLoadingEarlier: true,
            }
        });

        setTimeout(() => {
            if (this._isMounted === true) {
                this.setState((previousState: any) => {
                    return {
                        messages: GiftedChat.prepend(
                            previousState.messages,
                            earlierMessages(),
                            Platform.OS !== 'web',
                        ),
                        loadEarlier: true,
                        isLoadingEarlier: false,
                    }
                })
            }
        }, 1500);
    };

    onSend = (messages = []) => {
        this.setState(previousState => ({
            messages: GiftedChat.append(previousState.messages, messages),
        }));

        setTimeout(() => this.botSend(replies[0]), 2000);
        setTimeout(() => this.botSend(replies[1]), 5000);
    };

    botSend = (message) => {
        this.setState((previousState: any) => {
            console.info(previousState.messages)
            return {
                messages: GiftedChat.append(
                    previousState.messages,
                    [message]
                )
            }
        })
    };

    parsePatterns = (_linkStyle: any) => {
        return [
            {
                pattern: /#(\w+)/,
                style: { textDecorationLine: 'underline', color: 'darkorange' },
                onPress: () => Linking.openURL('http://gifted.chat'),
            },
        ]
    };

    onReceive = (text: string) => {
        this.setState((previousState: any) => {
            return {
                messages: GiftedChat.append(
                    previousState.messages,
                    [
                        {
                            _id: Math.round(Math.random() * 1000000),
                            text,
                            createdAt: new Date(),
                            user: otherUser,
                        },
                    ],
                    Platform.OS !== 'web',
                ),
            }
        })
    };

    onSendFromUser = (messages: IMessage[] = []) => {
        const createdAt = new Date()
        const messagesToUpload = messages.map(message => ({
            ...message,
            user,
            createdAt,
            _id: Math.round(Math.random() * 1000000),
        }));
        this.onSend(messagesToUpload)
    };

    renderBubble = (props) => {
        return <Bubble {...props} wrapperStyle={{
            left: {
                backgroundColor: 'lightgrey',
                padding: 5
            },
            right: {
                padding: 5
            }
        }} />
    };

    renderSystemMessage = props => {
        return (
            <SystemMessage
                {...props}
                containerStyle={{
                    marginBottom: 15,
                }}
                textStyle={{
                    fontSize: 14,
                }}
            />
        )
    };

    onQuickReply = replies => {
        const createdAt = new Date();
        if (replies.length === 1) {
            this.onSend([
                {
                    createdAt,
                    _id: Math.round(Math.random() * 1000000),
                    text: replies[0].title,
                    user,
                },
            ])
        } else if (replies.length > 1) {
            this.onSend([
                {
                    createdAt,
                    _id: Math.round(Math.random() * 1000000),
                    text: replies.map(reply => reply.title).join(', '),
                    user,
                },
            ])
        } else {
            console.warn('replies param is not set correctly')
        }
    };

    renderQuickReplySend = () => <Text>Hello</Text>;

    renderSend = (props) => (
        <Send {...props} containerStyle={{ justifyContent: 'center' }}>
            <MaterialIcons size={30} color={'tomato'} name={'send'} />
        </Send>
    );


    deattachImage = () => {
        this.setState({
            image: false
        })
    };

    attachedImage = () => {
        const { image } = this.state;

        return image && <View style={{flex: 1, justifyContent: 'center', position: 'relative'}}>
            <Image source={image} style={{
                width: 35,
                height: 35,
                resizeMode: 'cover',
            }} />
            <Text style={{
                position: 'absolute',
                top: 0,
                right: -2,
                backgroundColor: '#f1f1f1',
                width: 15,
                height: 15,
                textAlign: 'center',
                lineHeight: 15,
                borderRadius: 10,
                fontSize: 6
            }} onPress={this.deattachImage}>✕</Text>
        </View>
    };

    renderActions = (props) => {
        const { image } = this.state;

        return <View style={{display: 'flex', flexDirection: 'row', width: image ? 90 : 40 }}>
            <Actions
                {...props}
                containerStyle={{
                    width: 44,
                    height: 44,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginLeft: 4,
                    marginRight: 4,
                    marginBottom: 0,
                }}
                icon={() => (
                    <View>
                        <Text style={{
                            textAlign: 'center',
                            backgroundColor: '#0083ff',
                            color: '#fff',
                            borderRadius: 5,
                            height: 25,
                            width: 25,
                            lineHeight: 24
                        }}>  +  </Text>
                    </View>
                )}
                options={{
                    'Choose image': () => {
                        ImagePicker.launchImageLibrary(this.options, (response) => {
                            let image;

                            if (response.data) {
                                image = {
                                    uri: 'data:image/jpeg;base64,' + response.data
                                }
                            }

                            this.setState({
                                image
                            });
                        });

                    },
                    'Make a photo': () => {
                        ImagePicker.launchCamera(this.options, (response) => {
                            let image;

                            if (response.data) {
                                image = {
                                    uri: 'data:image/jpeg;base64,' + response.data
                                }
                            }

                            this.setState({
                                image
                            });
                        });
                    },
                    Cancel: () => {
                        console.log('Cancel');
                    },
                }}
                optionTintColor="#222B45"
            />
            { image && image.uri && this.attachedImage() }
        </View>
    };

    render() {
        const { focus } = this.state;

        return (
            <GiftedChat
                messages={this.state.messages}
                onSend={this.onSend}
                // loadEarlier={this.state.loadEarlier}
                // onLoadEarlier={this.onLoadEarlier}
                // isLoadingEarlier={this.state.isLoadingEarlier}
                parsePatterns={this.parsePatterns}
                user={user}
                // scrollToBottom
                onLongPressAvatar={user => alert(JSON.stringify(user))}
                onPressAvatar={() => alert('short press')}
                onQuickReply={this.onQuickReply}
                // keyboardShouldPersistTaps='never'
                renderBubble={this.renderBubble}
                renderSystemMessage={this.renderSystemMessage}
                // renderSend={this.renderSend}
                quickReplyStyle={{ borderRadius: 2 }}
                renderQuickReplySend={this.renderQuickReplySend}
                inverted={Platform.OS !== 'web'}
                timeTextStyle={{ left: { color: 'grey' }, right: { color: 'yellow' } }}
                isTyping={this.state.isTyping}
                infiniteScroll
                textInputProps={{ autoFocus: focus }}
                renderActions={this.renderActions}
                // renderMessageVideo={this.renderMessageVideo}
            />)
    }
}
