import roles from '../constants/roles';

const keys = Object.keys(roles);


export default function () {
    return roles[keys[Math.floor(Math.random() * 2.9)]];
    // return roles['student']
}
