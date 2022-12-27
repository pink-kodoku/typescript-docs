// Для объектов лучше использовать интерфейсы
// Являются взаимозаменяемые

interface UserA {
    name: string;
    age: number;
}

type UserB = {
    name: string;
    age: number;
}


// Для функций - типы
interface SumA {
    (a: number, b: number): number;
}

type SumB = (a: number, b: number) => number;

const sum: SumA = (a, b) => a + b;

// Можно наследоваться интерфейсом от типа
type B = {
    name: string;
}

interface A extends B {

}

const b: A = {
    name: 'deed'
}

// primitive alias работает только для типов
type UniqueId = string;

interface User2 {
    id: UniqueId;
}

// tuple или кортеж работает только для типов
type State = [number, (n: number) => void]

const s2: State = [123, n => n]

// Union работает только для типову
type A2 = {
    age: number;
}

type B2 = {
    name: string;
}

type C = A2 | B2;

const obj2: C = {
    age: 5,
    name: 'deed',
}

// Auto Merge работает только для интерфейсов
interface Name {
    name: string;
}

interface Name {
    id: number;
}

const name2: Name = {
    id: 1,
    name: 'Hello world'
}