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
