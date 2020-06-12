import storage from '../utils/storage';
import roles from '../constants/roles';
import randomUsersList from '../utils/random-users-list';

const initialState = {
    list: randomUsersList(),
    selectedUser: {},
    pending: false
};

export default function users(state = initialState, action) {
    switch (action.type) {
        case 'CHANGE_USER_DETAILS':
            return { ...state, ...action.payload };
        case 'SET_SELECTED_USER':
            return { ...state, ...action.payload };
        case 'RESET_USER':
            return { ...initialState };
        default:
            return state
    }
}

export function changeUserDetails(details) {
    return (dispatch, getState) => {
        dispatch({
            type: 'CHANGE_USER_DETAILS',
            payload: {
                pending: true
            }
        });
        setTimeout(() => {
            let list = getState().users.list;

            if (details.id) {
                list = list.map(u => {

                    if (u.id === details.id) {
                        u = details;
                    }

                    return u;
                });
            } else {
                list.unshift({ ...details, id: list.length + 1 })
            }

            dispatch({
                type: 'CHANGE_USER_DETAILS',
                payload: {
                    list,
                    pending: false
                }
            });
        }, 500)
    }
}

export function setSelectedUser(user) {
    return (dispatch, getState) => {
        dispatch({
            type: 'SET_SELECTED_USER',
            payload: {
                selectedUser: user
            }
        });
    }
}