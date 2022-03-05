const people = [
    {
        name: "Bob",
        age: 30,
        profession: "Builder"
    },
    {
        name: "Sarah",
        age: 28,
        profession: "Engineer"
    },
    {
        name: "Bob Junior",
        age: 2,
        profession: "Destroyer"
    },
];

// for (let i = 0; i < people.length; i++) {
//     const { name, age } = people[i];
    
//     const description = `${name} is ${age} years old`;
//     console.log(description);
// }

people.forEach(value => {
    const { name, age } = value;
    
    const description = `${name} is ${age} years old`;
    console.log(description);
});
    
