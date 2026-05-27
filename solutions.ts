function filterEvenNumbers(values: number[]): number[] {
    const evenNumberArray = values.filter((item) => item % 2 === 0);
  
    return evenNumberArray;
  }

  function reverseString(input: string): string {

    const reverseString=input.split("").reverse().join("");

    return reverseString;

  }

  