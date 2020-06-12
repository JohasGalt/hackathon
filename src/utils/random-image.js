export default function () {
    const children = [
        require('../images/children-faces/1.png'),
        require('../images/children-faces/2.png'),
        require('../images/children-faces/3.png'),
        require('../images/children-faces/4.png'),
        require('../images/children-faces/5.png'),
        require('../images/children-faces/6.png'),
        require('../images/children-faces/7.png'),
        require('../images/children-faces/8.png'),
        require('../images/children-faces/9.png'),
        require('../images/children-faces/10.png'),
        require('../images/children-faces/11.png'),
        require('../images/children-faces/12.png'),
        require('../images/children-faces/13.png')
    ];

    const index = Math.ceil(Math.random() * 12 - 0.1);

    return children[index]
}
