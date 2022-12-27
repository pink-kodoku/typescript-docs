// example 1
let val: unknown;

val = 'Hello world';

const s = (val as string).toUpperCase();

// example 2
interface UserData {
    name: string;
    age: number;
}

const user: UserData = {} as UserData;

user.name = 'Hello world';
user.age = 25;

// example 3
const person = {
    name: 'Hello world',
    surname: 'Hello world'
}

const keys = Object.keys(person) as Array<keyof typeof person>;

// example 4
const element = document.querySelector('#name') as HTMLInputElement;
const {value} = element;

// example 5
const colors = ['blue', 'green', 'red', 'black'] as const;

type Colors = typeof colors;