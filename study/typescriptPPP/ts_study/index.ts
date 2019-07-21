
interface Person {
    name: string;
    age: number;
}
interface IPerson extends Person {
    gender: boolean;
}

let tom: IPerson = {
    name: "Tom",
    age: 25,
    gender: true
}

console.log(tom)