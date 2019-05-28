//function functionName() {
//    console.log("His name is Peter");
//};
//
//functionName();

//var calculateAge = function (currentYear, yearOfBirth) {
//    return currentYear - yearOfBirth;
//};
//
//var printAge =  function (cAge) {
//    var current = 2019;
//    var birthYear = 1962;
//    
//    return cAge(current, birthYear);
//};
//
//printAge(calculateAge);

//function combineNumbers (age) {
//    return function () {
//        console.log(age);
//    };
//};
//
//combineNumbers(23)();

//(function (age) {
//    console.log(age);
//})(22);


var someData = {
    name: "Peter",
    age: 32,
    married: true,
    printName: function () {
        console.log("His name is " + this.name);
    }
};

someData.printName();