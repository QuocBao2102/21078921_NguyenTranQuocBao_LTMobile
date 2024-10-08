// filter
// In ra ki tu dai hon 8
const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];
result = words.filter((word) => word.length > 8);
console.log(result);

// In ra so chan
let numbers = [1, 2, 3, 4, 5, 6];
evenNumbers = numbers.filter(function(number) {
    return number % 2 === 0;
});
console.log(evenNumbers);


//some
// in ra true neu co phan tu le
// let numbers = [1, 2, 3, 4, 5];
hasEven = numbers.some(function(number) {
    return number % 2 !== 0;
});
console.log(hasEven);

// in ra true neu co tu dai hon 6
// const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];
longWord = words.some(function(word) {
    return word.length > 6;
});
console.log(longWord);


//every
// in ra true neu tat ca la so chan
// let numbers = [1, 2, 3, 4, 5];
allEven = numbers.every(function(number) {
    return number % 2 === 0;
});
console.log(allEven);

// in ra true neu tat ca la tu dai hon 6
// const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];
allLong = words.every(function(word) {
    return word.length > 6;
});
console.log(allLong);

// in ra true neu tat ca la tu dai hon 4
// const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];
allLong = words.every(function(word) {
    return word.length > 4;
});
console.log(allLong);


// //map
// in ra so nhan 3
// let numbers = [1, 2, 3, 4, 5];
tripleNumbers = numbers.map(function(number) {
    return number * 3;
});
console.log(tripleNumbers);

// in ra do dai cua cac tu
// let words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];
wordLengths = words.map(function(word) {
    return word.length;
});
console.log(wordLengths);

// //reduce
// tinh tong cac so
// let numbers = [1, 2, 3, 4, 5];
sum = numbers.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);
console.log(sum);

// //find
// in ra so chan dau tien
// let numbers = [1, 2, 3, 4, 5];
evenNumber = numbers.find(function(number) {
    return number % 2 === 0;
});
console.log(evenNumber);