function filterEvenNumbers(values: number[]): number[] {
    const evenNumberArray = values.filter((item) => item % 2 === 0);
    return evenNumberArray;
}

function reverseString(input: string): string {
    const reverseString = input.split("").reverse().join("");
    return reverseString;

}

type StringOrNumber = string | number;
function checkType(data: StringOrNumber): string {
    if (typeof data === "string") {

        return "String";

    }
    else {

        return "Number";

    }

}


function getProperty<X, Y extends keyof X>(obj: X, key: Y) {
    return obj[key];
}

interface Book {
    title: string;
    author: string;
    publishedYear: number;
}
function toggleReadStatus(bookInformation: Book) {
    return {
        ...bookInformation,
        isRead: true,

    };

}


class Person {

    name: string;

    age: number;

    constructor(name: string, age: number) {

        this.name = name;

        this.age = age;

    }

}

class Student extends Person {
    grade: string;
    constructor(name: string, age: number, grade: string) {

        super(name, age);

        this.grade = grade;
    }
    getDetails(): string {
        return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
    }
}



function getIntersection(array1: number[], array2: number[]): number[] {

    const result: number[] = [];

    for (const value of array1) {

        if (array2.includes(value)) {

            result.push(value);

        }

    }
    return result;
} 
