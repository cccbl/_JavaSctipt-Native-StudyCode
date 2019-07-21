

export const foo = 123;
export function addFunc(num1: number, num2: number): number {
    return num1 + num2;
}


// globals.d.ts
declare module module1 {
    // some variable declarations
    export var innerBar: number;
  }