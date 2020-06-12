import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import UserBlock from '../../src/common/user-block';
import { connect } from "react-redux";

function ManageUsers({ navigation, users }) {
    return (
        <View style={{ flex: 1 }}>
            <ScrollView>
                { users.list.map((item) => (
                    <View key={item.id}><UserBlock item={item} navigation={navigation}/></View>
                )) }
            </ScrollView>
            <View style={{
                position: 'absolute',
                textAlign: 'center',
                backgroundColor: '#0083ff',
                borderRadius: 50,
                height: 50,
                width: 50,
                flex: 1,
                bottom: 20,
                right: 20,
                justifyContent: 'center',
                alignItems: 'center' }}>
                <TouchableOpacity onPress={() => navigation.navigate('ManageUser')}>
                    <Text style={{ color: '#fff', fontSize: 30,  }}>  +  </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const mapStateToProps = ({ users }) => {
    return {
        users
    }
};

export default connect(mapStateToProps)(ManageUsers);
