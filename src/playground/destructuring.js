//
//Object Destructuring
//

// const person ={
//     name: 'Kevin',
//     age: 48,
//     location: {
//         city: 'Ossining',
//         temp: 50
//     }   
// };

// const { name = 'Anonymous', age } = person;

// // const name = person.name;
// // const age = person.age;
// const {city, temp: temperature} = person.location;

// console.log(`${name} is ${age}`);

// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}`)
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Halliday',
//     publisher: {
//         name: undefined
//     }
// };

// const { name:publisherName = 'Self Published'} = book.publisher;

// console.log(publisherName);

//
//Array Destructuting
//

// const address = ['15 Browning Dr.', 'Ossining', 'NY', '10562']
// const [, city, state] = address;
// console.log(`You are in ${city} ${state}.`);

const menu = ['coffee (iced)', '$2.00', '$4.50', '$2.75'];
const [item, , mdPrice,] = menu;

console.log (`A medium ${item} costs ${mdPrice}`)


