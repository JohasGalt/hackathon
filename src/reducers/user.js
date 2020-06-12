import storage from '../utils/storage';
import roles from '../constants/roles';

const initialState = {
    isLoggedIn: false,
    permissions: {},
    chats: []
};

export default function user(state = initialState, action) {
    switch (action.type) {
        case 'SET_USER_DETAILS':
            return { ...state, ...action.payload };
        case 'RESET_USER_DETAILS':
            return { ...initialState };
        default:
            return state
    }
}

export function setLoginStatus(isLoggedIn, details) {
    return dispatch => {
        if (isLoggedIn) {
            storage.setItem('isLoggedIn',  '1');
            storage.setItem('role',  details.role);

            dispatch({
                type: 'SET_USER_DETAILS',
                payload: {
                    isLoggedIn: true,
                    ...roles[details.role]
                }
            });
        } else {
            storage.removeItem('isLoggedIn');
            storage.removeItem('role');

            dispatch({
                type: 'RESET_USER_DETAILS'
            });
        }
    }
}

export function getLoginStatus() {
    return dispatch => new Promise((resolve) => {
        Promise.all([
            storage.getItem('isLoggedIn'),
            storage.getItem('role')
        ]).then(([isLoggedIn, role]) => {
            dispatch({
                type: 'SET_USER_DETAILS',
                payload: {
                    isLoggedIn,
                    ...roles[role]
                }
            });

            resolve({ isLoggedIn, role });
        })
    });
}

