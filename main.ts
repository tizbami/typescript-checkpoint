//explicit type annotation: it helps to specify the type of a variable

let username: string = "Maye";
let age: number = 20;

//implicit type annotation: typescript infers the type of a variable based on the value assigned to it
let myName = "Maye";

//union type annotation: used to define a variable that can hold more than one type

let id: string | number = "100";
id = 100;

// array type annotation: used to define a variable that holds an array of values of a specific type

const friends: string[] = ["Maye", "John", "Jane"];

friends.forEach((friend) => {
  console.log(friend.toUpperCase());
});

let isGameOver: boolean = true;

isGameOver ? console.log("Game over") : console.log("Game not over");

//object type annotation: used to define a variable that holds an object of a specific type

const user: { name: string; age: number; city: string } = {
  name: "Maye",
  age: 20,
  city: "San Francisco",
};

const addNumber = (a: number, b: number): number => {
  return a + b;
};

console.log(addNumber(1, 2));

interface Vehicle {
  make: string;
  model: string;
  year: number;
  start(): void;
}

class Car implements Vehicle {
  make: string;
  model: string;
  year: number;

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  start(): void {
    console.log("Car engine started");
  }
}

const myCar = new Car("Toyota", "Corolla", 2020);
console.log(`Car Details: ${myCar.make} ${myCar.model} (${myCar.year})`);
myCar.start(); // Should log: "Car engine started"
