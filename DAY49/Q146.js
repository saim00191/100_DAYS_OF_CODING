var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var filteredNumbers = numbers.filter(function (number) {
    return number % 2 === 1;
});
console.log(filteredNumbers);
