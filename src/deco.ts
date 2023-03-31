// function Component(name: string) {
//     return (target: typeof TestClass) => {
//         target.elementId = name;
//     };
// }

// function Prop() {
//     return (target: Object, propertyKey: string) => {
//         let value: string = "";
//         const setter = (newValue: string) => {
//             console.log("setting value of " + propertyKey + " to " + newValue);
//             value = newValue;
//         };

//         const getter = () => {
//             console.log("getting value...");
//             return value;
//         };

//         Object.defineProperty(target, propertyKey, {
//             get: getter,
//             set: setter,
//         });
//     };
// }

// function Param(_: Object, propertyName: string, index: number) {
//     console.log({
//         propertyName,
//         index,
//     });
// }

// @Component("Test")
// class TestClass {
//     static elementId: string;

//     @Prop()
//     id!: string;

//     printId(@Param prefix: string): string {
//         console.log({ prefix });
//         return `${prefix}`;
//     }
// }

// const test = new TestClass();
// test.id = "hello";

// console.log(test.id);
