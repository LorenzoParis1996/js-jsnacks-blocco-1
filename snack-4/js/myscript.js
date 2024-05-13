const guestName = prompt('guest name');
const numInvite = parseInt(prompt('number invite'));

const guestList = [
    'john',
    'jack',
    'bob',
    'jill',
    'ant',
    'lex',
];


if (guestList.length + guestName > 3) {
    console.log('you are on the guest list');
} else {
    console.log('you are not invited');
}