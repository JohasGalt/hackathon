export default () => [
    {
        _id: Math.round(Math.random() * 1000000),
        text:
            'Hello',
        createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
        user: {
            _id: 1,
            name: 'Developer',
        },
    },
    {
        _id: Math.round(Math.random() * 1000000),
        text:
            'Hi',
        createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
        user: {
            _id: 1,
            name: 'Student',
        },
    },
    {
        _id: Math.round(Math.random() * 1000000),
        text:
            'how are you?',
        createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
        user: {
            _id: 1,
            name: 'Student',
        },
    },
    {
        _id: Math.round(Math.random() * 1000000),
        text:
            'i am fine',
        createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
        user: {
            _id: 1,
            name: 'Student',
        },
    },
    {
        _id: Math.round(Math.random() * 1000000),
        text: 'and you?',
        createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
        user: {
            _id: 2,
            name: 'Student',
        },
    },
    {
        _id: Math.round(Math.random() * 1000000),
        text: 'Did you do homework?',
        createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
        user: {
            _id: 2,
            name: 'Student',
        },
    },
    {
        _id: Math.round(Math.random() * 1000000),
        text: 'Yes i do',
        createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
        user: {
            _id: 2,
            name: 'Student',
        },
    },
    {
        _id: Math.round(Math.random() * 1000000),
        text: 'and you?',
        createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
        user: {
            _id: 1,
            name: 'Student',
        },
    },
    {
        _id: Math.round(Math.random() * 1000000),
        text: 'me too',
        createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
        user: {
            _id: 2,
            name: 'Student',
        },
    },
    {
        _id: Math.round(Math.random() * 1000000),
        text: 'Admin message.',
        createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
        system: true,
    },
];