import getRandomImage from '../utils/random-image';

export default {
    studentChats: [{
        title: 'School news',
        lastMessage: 'Winter holidays are cancelled!'
    }, {
        title: 'Class news',
        lastMessage: 'We\'ll gather money for classroom curtains'
    }, {
        title: 'Music 7 class',
        lastMessage: 'Take your pianos to school on Monday'
    }, {
        title: 'Mathematics 7 class',
        lastMessage: '2 + 2 = 4'
    }, {
        title: 'Chemistry 7 class',
        lastMessage: 'Due to Friday lesson explosion, we need new teacher...'
    }, {
        title: 'English 7 class',
        lastMessage: 'London is the capital of Gr B',
        messages: [
            {
                _id: 1,
                text: 'Good afternoon, Mrs. Stones. Do you have the results of our last exam?',
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: 'Hank Dewalt',
                    avatar: require('../images/children-faces/4.png')
                },
                sent: true,
                received: true,
            },
            {
                _id: 2,
                text: 'yes, please... we can\'t wait to see 😊!',
                createdAt: new Date(),
                user: {
                    _id: 1,
                    name: 'Adam Wagle',
                    avatar: require('../images/children-faces/7.png')
                },
            },
            {
                _id: 3,
                text: 'Hello, children 🙂',
                createdAt: new Date(),
                user: {
                    _id: 10,
                    name: 'M S',
                    avatar: require('../images/adult-faces/1.png')
                },
            },
            {
                _id: 4,
                text: 'One moment...',
                createdAt: new Date(),
                user: {
                    _id: 10,
                    name: 'M S',
                    avatar: require('../images/adult-faces/1.png')
                },
                sent: true,
                received: true,
            },
            {
                _id: 5,
                text: 'here it is',
                image: 'https://image.isu.pub/190322153503-293b7ff7b303fd2d4ed0de2ac2ad3d97/jpg/page_1.jpg',
                createdAt: new Date(),
                user: {
                    _id: 10,
                    name: 'M S',
                    avatar: require('../images/adult-faces/1.png')
                },
            },
            {
                _id: 6,
                text: 'Wow! I thought I didn\'t pass :) Many thanks, Mrs. Stones !!!!!',
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: 'Betty Johnson',
                    avatar: require('../images/children-faces/6.png')
                },
                sent: true,
                received: true,
            }
        ]
    }, {
        title: 'World literature 7 class',
        lastMessage: 'Read the Metamorphosis for tomorrow'
    }, {
        title: 'Geography 7 class',
        lastMessage: 'Are you little flat-earth believers?'
    }, {
        title: 'History 7 class',
        lastMessage: 'Take your books for tomorrow, kids'
    }, {
        title: 'Physics 7 class',
        lastMessage: 'E = mc^2. It\'s basis, but you do not know it!'
    }, {
        title: 'Art',
        lastMessage: 'Is it embarrassing to not know Van Gogh?'
    }],

    teacherChats: [{
        title: 'English 5 class',
        lastMessage: 'Do you fancy sharing that with the rest of the class?'
    }, {
        title: 'English 6 class',
        lastMessage: 'That is your LAST warning'
    }, {
        title: 'English 7 class',
        lastMessage: 'I won’t be there in your exam',
        messages: [
            {
                _id: 1,
                text: 'Good afternoon, Mrs. Stones. Do you have the results of our last exam?',
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: 'Hank Dewalt',
                    avatar: require('../images/children-faces/4.png')
                },
                sent: true,
                received: true,
            },
            {
                _id: 2,
                text: 'yes, please... we can\'t wait to see 😊!',
                createdAt: new Date(),
                user: {
                    _id: 3,
                    name: 'Adam Wagle',
                    avatar: require('../images/children-faces/7.png')
                },
            },
            {
                _id: 3,
                text: 'Hello, children 🙂',
                createdAt: new Date(),
                user: {
                    _id: 1,
                    name: 'Developer',
                },
            },
            {
                _id: 4,
                text: 'One moment...',
                createdAt: new Date(),
                user: {
                    _id: 1,
                    name: 'Developer',
                },
                sent: true,
                received: true,
            },
            {
                _id: 5,
                text: 'here it is',
                image: 'https://image.isu.pub/190322153503-293b7ff7b303fd2d4ed0de2ac2ad3d97/jpg/page_1.jpg',
                createdAt: new Date(),
                user: {
                    _id: 1,
                    name: 'Developer',
                },
            },
            {
                _id: 6,
                text: 'Wow! I thought I didn\'t pass :) Many thanks, Mrs. Stones !!!!!',
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: 'Betty Johnson',
                    avatar: require('../images/children-faces/6.png')
                },
                sent: true,
                received: true,
            }
        ]
    }, {
        title: 'English 8 class',
        lastMessage: 'Pass all of your worksheets to the front'
    }, {
        title: 'English 9 class',
        lastMessage: 'Not quite, but that’s a very good attempt at an answer'
    }, {
        title: 'English 10 class',
        lastMessage: 'Sorry, no practical lesson. We’re doing theory today'
    }, {
        title: 'English 11 class',
        lastMessage: 'It’s your time you’re wasting, not mine.'
    }, {
        title: 'English 4 class',
        lastMessage: 'I don’t care what Mrs Spencer said, this is how we’re doing it.'
    }, {
        title: 'School news',
        lastMessage: 'Please, welcome our new chemistry teacher: Mrs. Stones'
    }, {
        title: 'Director\'s birthday party',
        lastMessage: 'Does anyone has video of him dancing on the table?'
    }],

    parentChats: [{
        title: 'Parent meeting May 5th',
        lastMessage: 'Sorry for that fight with mrs. Middleton:('
    }, {
        title: 'Parent meeting Feb 5th',
        lastMessage: 'Thanks... I\'ll have a serious talk with him...'
    }, {
        title: 'Teacher day present',
        lastMessage: 'Let\'s buy her a one-way ticket'
    }, {
        title: 'Class news for parents',
        lastMessage: 'Photo'
    }]
}
