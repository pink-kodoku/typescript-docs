const allowListOnly = (allowList: string[]) => {
    return (target: any, key: string) => {
        let currentValue: any = target[key];

        Object.defineProperty(target, key, {
            set: (newValue: any) => {
                if (!allowList.includes(newValue)) {
                    return;
                }
                currentValue = newValue;
            },
            get: () => currentValue
        })
    }
}

const maxLength = (maxLength: number) => {
    return (target: any, key: string) => {
        let currentValue: string = target[key];
        Object.defineProperty(target, key, {
            get: () => currentValue,
            set: (newValue: string) => {
                if (newValue.length > maxLength) {
                    throw new Error('String is too big')
                }
                currentValue = newValue;
            }
        })
    }
}

const enumerable = (value: boolean) => {
    return (target: any, key: string, descriptor: PropertyDescriptor) => {
        descriptor.enumerable = value;
    }
}

const log = (target: Function) => {
    console.log(target)
}

const deprecated = (deprecationReason: string) => {
    return (target: any, memberName: string, propertyDescriptor: PropertyDescriptor) => {
      return {
        get() {
          const wrapperFn = (...args: any[]) => {
            console.warn(`Method ${memberName} is deprecated with reason: ${deprecationReason}`);
            propertyDescriptor.value.apply(this, args)
          }
  
          Object.defineProperty(this, memberName, {
              value: wrapperFn,
              configurable: true,
              writable: true
          });
          
          return wrapperFn;
        }
      }
    }
  }

function print(target: Object, propertyKey: string, parameterIndex: number) {
    console.log(`Decorating param ${parameterIndex} from ${propertyKey}`);
}

@log
class Person {
    @allowListOnly(['Jane', 'John'])
    name: string = 'Peter';

    @maxLength(10)
    email: string = 'test@ma';

    constructor(@print private id: number = 5) {}


    // не будет отображаться в цикле
    @enumerable(false)
    get fullName() {
        return `${this.name} has ${this.email}`
    }

    @deprecated('Return value is might not be campitable')
    someOldMethod() {
        console.log("I return some value")
    }
}

const person1 = new Person();
console.log(person1.email)
// person1.email = 'deeddedeeddedede' // Error (string is too big)