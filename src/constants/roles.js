import messages from '../constants/messages';

const { parentChats, studentChats, teacherChats } = messages;

const roles = {
    admin: {
        description: 'Administration',
        id: 'admin',
        permissions: {
            createChats: true,
            editChats: true,
            postInChats: true,
            manageUsers: true
        },
        options: [{
            title: 'Create new chat',
            type: 'outline',
            onPress: navigation => navigation.navigate('CreateChat')
        }, {
            title: 'Manage users',
            onPress: navigation => navigation.navigate('ManageUsers')
        }],
        chats: [...parentChats, ...studentChats, ...teacherChats]
    },
    student: {
        id: 'student',
        description: 'Student',
        permissions: {
            postInChats: true
        },
        options: [],
        chats: studentChats
    },
    parent: {
        id: 'parent',
        permissions: {},
        description: 'Parent',
        options: [],
        chats: parentChats
    },
    teacher: {
        id: 'teacher',
        permissions: {
            editChats: true,
            postInChats: true
        },
        description: 'Teacher',
        options: [{
            title: 'Create new chat',
            type: 'outline',
            onPress: navigation => navigation.navigate('CreateChat')
        }],
        chats: teacherChats
    }
};

export default roles;
