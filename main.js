//explicit type annotation: it helps to specify the type of a variable
var username = "Maye";
var age = 20;
//implicit type annotation: typescript infers the type of a variable based on the value assigned to it
var myName = "Maye";
//union type annotation: used to define a variable that can hold more than one type
var id = "100";
id = 100;
// array type annotation: used to define a variable that holds an array of values of a specific type
var friends = ["Maye", "John", "Jane"];
friends.forEach(function (friend) {
    console.log(friend.toUpperCase());
});
var isGameOver = true;
isGameOver ? console.log("Game over") : console.log("Game not over");
//object type annotation: used to define a variable that holds an object of a specific type
var user = {
    name: "Maye",
    age: 20,
    city: "San Francisco",
};
var addNumber = function (a, b) {
    return a + b;
};
console.log(addNumber(1, 2));
var Car = /** @class */ (function () {
    function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    Car.prototype.start = function () {
        console.log("Car engine started");
    };
    return Car;
}());
var myCar = new Car("Toyota", "Corolla", 2020);
console.log("Car Details: ".concat(myCar.make, " ").concat(myCar.model, " (").concat(myCar.year, ")"));
myCar.start(); // Should log: "Car engine started"
