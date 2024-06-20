const person = [
    {
        name: "Beau",
        age: 24,
    },
    {
        name: "John",
        age: 30,
    },
];

function example(name: string, age: number) {
    const somePerson = person[0].name;

    // console.log(`Hello ${name} and age is ${age}`);
    return `Hello ${name} and age is ${age}, but some person is ${somePerson}`;
}

example("Beau", 24);
