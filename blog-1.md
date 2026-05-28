The Four Pillars of OOP in TypeScript: Managing Logic and Reducing Complexity 

Introduction 
TypeScript projects can get complex fast. When many developers work on many features, code that can be difficult to read, update, and debug. Object-Oriented Programming or OOP helps us organise code  There are four main pillars of OOP:  
Inheritance  
Polymorphism  
Abstraction  
Encapsulation  
These ideas help us reuse code, keep data safe, hide complexity, and write cleaner code. 
1.Encapsulation: Protecting Data 
Encapsulation is to protect the data in a class. We decide which data is accessible from outside and which data should be private. 
```ts
class BankAccount { 
 public readonly userId: number; 
 public userName: string; 
 private _userBalance: number; 
 
 constructor(userId: number, userName: string, userBalance: number) { 
   this.userId = userId; 
   this.userName = userName; 
   this._userBalance = userBalance; 
 } 
 
 private addBalance(balance: number) { 
   this._userBalance = this._userBalance + balance; 
 } 
 
 callHiddenMethod(balance: number) { 
   this.addBalance(balance); 
 } 
} 
 
const mezbaBhaiAccount = new BankAccount(111, "Mezba", 20); 
 mezbaBhaiAccount.userName = "Mezba Bhai"; 
mezbaBhaiAccount.callHiddenMethod(100); 
```
Here, userId is readonly, so it cannot be changed. _userBalance is private, so it cannot be accessed directly from outside the class. 
This helps protect important data from unwanted changes. 
2.Inheritance: Reusing Common Logic 
Inheritance allows a class to inherit properties and methods from another class. 
```ts
class Person { 
 name: string; 
 age: number; 
 address: string; 
 
 constructor(name: string, age: number, address: string) { 
   this.name = name; 
   this.age = age; 
   this.address = address; 
 } 
 
 getSleep(numOfHours: number) { 
   console.log(`${this.name} ${numOfHours} ghonta ghumai`); 
 } 
} 
 
class Student extends Person { 
 rollNo: number; 
 
 constructor(name: string, age: number, address: string, rollNo: number) { 
   super(name, age, address); 
   this.rollNo = rollNo; 
 } 
} 
 
class Teacher extends Person { 
 designation: string; 
 
 constructor(name: string, age: number, address: string, designation: string) { 
   super(name, age, address); 
   this.designation = designation; 
 } 
 
 takeClass(numOfClass: number) { 
   console.log(`${this.name} ${numOfClass} ghonta class nei`); 
 } 
} 
 
const student1 = new Student("Mr. Fakibaaz", 18, "Bangladesh", 1981); 
 
const teacher1 = new Teacher( 
 "Mr. Smart Teacher", 
 25, 
 "Bangladesh", 
 "Senior Teacher" 
); 
teacher1.getSleep(7); 
teacher1.takeClass(3); 
 ```
Student and Teacher both have common properties like name, age, and address. So we keep them in the Person class. 
This reduces duplicate code. 
 3. Abstraction: Hiding Complex Details 
Abstraction means showing only what is necessary and hiding. 
```ts
abstract class MediaPlayer { 
 abstract play(): void; 
 abstract pause(): void; 
 abstract stop(): void; 
} 

class MezbaPlayer extends MediaPlayer { 
 play() { 
   console.log("Playing music..."); 
 } 
 
 pause(): void { 
   console.log("Music is paused!"); 
 } 
 
 stop(): void { 
   console.log("Music is stopped!"); 
 } 
}  
const mezbaPlayer1 = new MezbaPlayer(); 
 mezbaPlayer1.play(); 
mezbaPlayer1.pause(); 
mezbaPlayer1.stop(); 
 ```
Here, MediaPlayer specifies the functionality of every media player. But it does not say how it will do that. 
The real logic is written inside MezbaPlayer. 
This keeps our project structure tidy. 
4.Polymorphism: Same Method, Different Behavior 
Polymorphism means one method can behave differently in different classes. 
```ts
class Person { 
 getSleep() { 
   console.log("I am a normal happy person. I sleep for 8 hours."); 
 } 
} 
 
class Student extends Person { 
 getSleep() { 
   console.log("I am a student. I sleep for 7 hours."); 
 } 
} 
 
class NextLevelDeveloper extends Person { 
 getSleep() { 
   console.log("I am a Next Level Developer. I sleep for 6 hours."); 
 } 
} 
 
const getSleepingHours = (param: Person) => { 
 param.getSleep(); 
}; 
 const person1 = new Person(); 
const person2 = new Student(); 
const person3 = new NextLevelDeveloper(); 
 getSleepingHours(person1); 
getSleepingHours(person2); 
getSleepingHours(person3); 
```
The function getSleepingHours() accepts a Person. But it can work with Student and NextLevelDeveloper too. 
This makes code flexible and easier to extend. 
Another example: 
```ts
class Shape { 
 getArea(): number { 
   return 0; 
 } 
} 
 class Circle extends Shape { 
 radius: number; 
 
 constructor(radius: number) { 
   super(); 
   this.radius = radius; 
 } 
 
 getArea(): number { 
   return Math.PI * this.radius * this.radius; 
 } 
} 
 class Rectangle extends Shape { 
 height: number; 
 width: number; 
 
 constructor(height: number, width: number) { 
   super(); 
   this.height = height; 
   this.width = width; 
 } 
 
 getArea(): number { 
   return this.height * this.width; 
 } 
}  
const getArea = (param: Shape) => { 
 console.log(param.getArea()); 
}; 
 
const shape1 = new Shape(); 
const shape2 = new Circle(10); 
const shape3 = new Rectangle(10, 20);  
getArea(shape1); 
getArea(shape2); 
getArea(shape3); 
```
Here, every shape has getArea(), but each shape calculates area in its own way. 
Conclusion 
The four pillars of OOP make TypeScript projects cleaner and easier to manage. 
Encapsulation protects data. 
Inheritance removes duplicate code. 
Abstraction hides complex logic. 
Polymorphism makes code flexible. 
These concepts help developers write reusable, maintainable and easy to understand code in large TypeScript projects.  
 

 