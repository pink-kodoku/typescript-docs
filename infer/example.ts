// example 1
type Test<T> = T extends string ? true : false;

type R1 = Test<'a'>; // true
type R2 = Test<5>; // true

// example 2
interface Message {
    id: number;
}

interface User {
    id: string;
}

function getId<T extends {id: any}>(obj: T): T extends {id: string} ? string : number {
    return obj.id;
}

const r1 = getId({} as User)
const r2 = getId({} as Message)

// example 3
type NotFalsy<T = null> = T extends (null | undefined | false | 0) ? never : T;

let z: NotFalsy<string>;

z = 'Hello';

// example 4
type Filter<T, U> = T extends U ? never : T;

type R3 = Filter<'a' | 'b' | 'c', 'b'>

// example 5
type GetStatus<T> = T extends object ? T extends {status: string} ? T['status'] : null : null;

type Status = GetStatus<{status: 'hello'}>

// example 6
type TryInfer<T extends object = object> = T extends infer R ? R[keyof R] : never;

type R5 = TryInfer<{a: 1, b: 2}>

// example 7
function test() {
    return 2;
}

type FuntionResult<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;

type R6 = FuntionResult<typeof test>

// example 8
const columns = [
    {
        field: 'name'
    },
    {
        field: 'header'
    },
    {
        field: 'title'
    }
]

type FieldType<ArrType> = ArrType extends readonly (infer ElementType)[] ? ElementType extends {field: string} ? ElementType['field'] : never : never;

type R55 = FieldType<[
    {
        field: 'name'
    },
    {
        field: 'header'
    },
    {
        field: 'title'
    }
]>