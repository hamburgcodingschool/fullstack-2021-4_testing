// EXAMPLE 1:

// const person = {
//     name: "Bob",
//     age: 30
// }
// const work = {
//     profession: "Builder"
// }

// const result = {
//     ...person,
//     ...work
// };

// console.log(result);


// EXAMPLE 2:
// const person = {
//     name: "Bob",
//     age: 30,
//     profession: "Builder"
// }
// const person2 = { ...person };
// person2.name = "Sarah";

// console.log(person);
// console.log(person2);

// EXAMPLE 2.1:
const person = {
    name: "Bob",
    age: 30,
    profession: "Builder"
}
const person2 = { ...person, name: "Sarah" };

console.log(person);
console.log(person2);