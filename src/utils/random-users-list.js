import randomName from './random-user-name';
import randomImage from './random-image';
import randomRole from './random-role';

export default function () {
    let arr = [];

    for (let i = 0; i < 20; i++) {
        arr.push({
            id: i + 1,
            name: randomName(),
            image: randomImage(),
            role: randomRole()
        })
    }

    return arr;
}
