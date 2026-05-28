# Generics in TypeScript: Reusable Code with Strong Typing

## Introduction
Generics help us write flexible code without losing TypeScript type safety.
In simple words, Generics allow us to create one reusable structure or function that can work with different data types like `string`, `number`, `boolean`, object, tuple, and more.
## Generic Array

```ts
type GenericArray<T> = Array<T>;

const friends: GenericArray<string> = ["Mr. X", "Mr. Y", "Mr. Z"];

const rollNumbers: GenericArray<number> = [4, 7, 11];

const isEligibleList: GenericArray<boolean> = [true, false, true];

type User = { name: string; age: number };

const userList: GenericArray<User> = [
  {
    name: "Mr. X",
    age: 22,
  },
  {
    name: "Mr. Y",
    age: 25,
  },
];
```
Here, `T` is a type placeholder.
When we use `GenericArray<string>`, `T` becomes `string`.
When we use `GenericArray<number>`, `T` becomes `number`.
So one generic type works for many data types.
## Generic Tuple

```ts
type Coordinates<X, Y> = [X, Y];
const coordinates1: Coordinates<number, number> = [20, 30];
const coordinates2: Coordinates<string, string> = ["20", "30"];
```
Here, `X` and `Y` are dynamic types.
So the same `Coordinates` type can support numbers, strings, or any other type.
## Generic Interface

```ts
interface Developer<T, X = null> {
  name: string;
  salary: number;
  device: {
    brand: string;
    model: string;
    releasedYear: string;
  };
  smartWatch: T;
  bike?: X;
}

interface BrandCharaWatch {
  heartRate: string;
  stopwatch: boolean;
}

interface AppleWatch {
  heartRate: string;
  callSupport: boolean;
  calculator: boolean;
  AiFeature: boolean;
}
```
The `Developer` interface is reusable.
Different developers can have different smartwatch and bike types.

```ts
const poorDeveloper: Developer<
  BrandCharaWatch,
  { brand: "Yamaha"; engineCapacity: "200cc" }
> = {
  name: "Mr. Poor",
  salary: 20,
  device: {
    brand: "lenovo",
    model: "A21",
    releasedYear: "2010",
  },
  smartWatch: {
    heartRate: "200",
    stopwatch: true,
  },
};
```
```ts
const richDeveloper: Developer<AppleWatch> = {
  name: "Mr. Rich",
  salary: 100,
  device: {
    brand: "hp",
    model: "X34",
    releasedYear: "2050",
  },
  smartWatch: {
    heartRate: "200",
    callSupport: true,
    calculator: true,
    AiFeature: true,
  },
  bike: null,
};
```
Here, `poorDeveloper` uses `BrandCharaWatch`, and `richDeveloper` uses `AppleWatch`.
So TypeScript checks the correct smartwatch properties for each developer.
## Generic Function

Without generics, we may need separate functions for every type.

```ts
// const createArrayWithString = (value: string) => [value];
// const createArrayWithNumber = (value: number) => [value];
// const createArrayWithUserObj = (value: { id: number; name: string }) => [value];
```

With generics, one function is enough.

```ts
const createArrrayWithGeneric = <T>(value: T) => {
  return [value];
};

const arrString = createArrrayWithGeneric("Apple");
const arrNum = createArrrayWithGeneric(222);
const arrObj = createArrrayWithGeneric({
  id: 123,
  name: "Next Level",
});
```

TypeScript understands the type automatically.

* `arrString` becomes `string[]`
* `arrNum` becomes `number[]`
* `arrObj` becomes object array

## Generic Tuple Function

```ts
const createArrayTupleWithGeneric = <X, Y>(param1: X, param2: Y) => [
  param1,
  param2,
];

const res1 = createArrayTupleWithGeneric("Mezba", false);

const res2 = createArrayTupleWithGeneric(222, { name: "Mezba" });
```

This function accepts two different types and returns them together.

But a better strict tuple version is:

```ts
const createArrayTupleWithGeneric = <X, Y>(param1: X, param2: Y): [X, Y] => [
  param1,
  param2,
];
```

Now TypeScript knows the exact tuple type.

## Real-Life Example: Add Student to Course

```ts
const addStudentToCourse = <T>(studentInfo: T) => {
  return {
    course: "Next Level",
    ...studentInfo,
  };
};

const student1 = {
  id: 123,
  name: "Mezba",
  hasPen: true,
};

const student2 = {
  id: 321,
  name: "Jhankar Mahbub",
  hasCar: true,
  isMarried: true,
};

const result = addStudentToCourse(student2);

console.log(result);
```

This function can accept any student object.
It adds a course property and keeps the original student data type.

So `student1` and `student2` can have different properties, but the function still works safely.

## Why Generics Are Powerful

Generics help us:

* Reuse the same code
* Avoid `any`
* Keep strict type checking
* Make functions flexible
* Support different different data structures

## Conclusion

Generics are like dynamic type variables in TypeScript.
Generics help us write code that can work with different types safely.
We can write one function, interface, or component and use it with many types without repeating code.
In big projects, Generics are useful for arrays, interfaces, API data, reusable functions, and components.
