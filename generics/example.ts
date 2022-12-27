// Количество типов не ограничено
// Можно использовать в типах, интерфейсах, классах и функциях

// example 1
function identity<T>(arg: T): T {
    return arg;
}

const s: string = 'hello';
const n: number = 12345;

const f1 = identity<string>(s)
const f2 = identity<number>(n)

// example 2
interface State<T> {
    loading: boolean;
    error: Error | null;
    data: T;
}

interface User {
    id: number;
    name: string;
}

type UserState = State<User>

// example 3
function merge<U, V>(o1: U, o2: V): U & V {
    return {
        ...o1,
        ...o2
    }
}

// example 4
async function fakeRequest() {
    return 2;
}

const b: Promise<number> = fakeRequest();

// example 5
type Names = Array<string>;

// example 6
type Obj = Record<string, number>;

// example 7
function len<T extends {length: number}>(collection: T) {}

// example 8
function getValue<T extends object, U extends keyof T>(obj: T, prop: U) {
    return obj[prop];
}

const r1 = getValue({
    name: 'Petia'
}, 'name')

// example 9
function getKey<T extends object, U extends keyof T>(obj: T, value: T[U]): U | null {
    const key = (Object.keys(obj) as Array<U>).find(k => obj[k] === value);

    return key || null;
}

// example 10
function patchField<T extends object, U extends keyof T, V extends T[U]>(obj: T, field: U, value: V) {}

// example 11
type FuntionalComponent<T extends object = object> = (props: T & {children: any}) => any;

const component: FuntionalComponent = ({children}) => {

}