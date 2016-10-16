//split
var color = "red, green, blue, black";

var arr = color.split(', ');

console.dir(color);

for (var i = 0; i < arr.length; i++) {
  console.log( arr[i] );
}

//split 2
var letter = "a, b, c, d"
console.log( letter.split(',', 3) );

//split 3
var string = "тест";
console.log( string.split('') );

//join
var animal = ["dog", "cat", "mouse", "lion"];

var str = animal.join(';');

console.log( str );

//remove from array
var cakes = ["sweet", "fresh", "cakes"];

delete cakes[1];

for (var i = 0; i < cakes.length; i++) {
  console.log( cakes[i] );
}
//slice
var games = ["football", "valleyball", "basketball"];

var arrgame = games.slice(1, 2);

var arrgame2 = games.slice(1, 3);


console.log( arrgame );
console.log( arrgame2 );

//sort
var digit = [ 1, 2, 22, 55, 17, 3, 4, 44, 15 ];

digit.sort();

console.log( digit );

//reverse
digit.reverse();

console.log( digit );
