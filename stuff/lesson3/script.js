// factorial
Number.prototype.factorial = function(){
    return this * (this != 1 ? (this-1).factorial() : 1);
};
console.log('Factorial 10:   ', (10).factorial());

// power of
Number.prototype.pow = function(val){
    return this * (this != this*val ? (this).pow(val-1) : 1);
};
console.log('Power of 10:    ', (10).pow(3));

// sum of digits
Number.prototype.sum = function(){ 
  var cache = this % 10;
  var sum = cache;
  if (this >= 10) {
    var rest = Math.floor(this / 10);
    sum += (rest).sum(); 
  }
  return sum;
};
console.log('Sum of 12345:   ', (12345).sum());

// sum to
Number.prototype.getSum = function(){
    return this + (this != 1 ? (this-1).getSum() : 0);
};
console.log('GetSum of 100:  ', (100).getSum());

// fibonacci
Number.prototype.fib = function(){
    return this <= 1 ? this : (this-2).fib() + (this-1).fib();
};
console.log('Fibonacci of 10:', (10).fib())