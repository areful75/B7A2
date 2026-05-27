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
const myBook = { title: "TypeScript Guide", author: "Jane Doe", publishedYear: 2024 };
console.log(toggleReadStatus(myBook));