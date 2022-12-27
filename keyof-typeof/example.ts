const formData = {
    firstName: 'Hello',
    lastName: 'World',
    age: 30,
    id: 1
}

type ValidationResult = {
    [key in keyof typeof formData]: boolean;
}

// example 1
declare function validate<T>(data:T): ValidationResult;

// example 2
declare function validate2<T>(data: T): {[key in keyof T]: boolean}

const r = validate(formData);