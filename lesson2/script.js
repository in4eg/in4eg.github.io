/**
 - * Created by wallee on 21.10.16.
 - */
 MyArray = {};
 MyArray.pop = function () {
     var result = this[this.length-1];
     this.length = this.length-1;
     return result;
 };
 
 MyArray.push = function (addValue) {
     var result = this.length  arguments.length;
     for (var i = this.length, j=0; i < result; i, j){
         this[i] = arguments[j];
     }
     return result;
 };
 
 MyArray.slice = function (from, to) {
     var result = [];
     if (arguments[1] !== undefined) {
         for (var i = 0; i < arguments[1]; i) {
             if (i < arguments[0]) continue;
             result.push(this[i]);
         }
         return result;
     }
     else if (arguments[0] < 0) {
         for (var k = (this.length  arguments[0]) ; k < this.length; k) {
             result.push(this[k]);
         }
         return result;
     }
      else {
         for (var j = arguments[0]; j < this.length; j) {
             result.push(this[j]);
         }
         return result;
     }
 };
 
 MyArray.join = function (addValue) {
     var str = "";
     for (var i = 0; i < this.length; i) {
        str = str  this[i];
        if (i < this.length-1) {
             str = str  arguments[0];
         }
     }
     return str;
 };
 
 MyArray.reverse = function () {
     var temp;
     for (var i = 0, j = this.length - 1; i < j; i, j--) {
         temp = this[i];
         this[i] = this[j];
         this[j] = temp;
     }
     return this;
 };
 
 var arrForTestPop = ['a', 'b', 'c', 4, 5, 6];
 var arrForTestPush = ['a', 'b', 'c', 4, 5, 6];
 var arrForTestSlice = ['a', 'b', 'c', 4, 5, 6];
 var arrForTestJoin = ['a', 'b', 'c', 4, 5, 6];
 var arrForTestReverse = ['a', 'b', 'c', 4, 5, 6];
 
 console.log("Метод pop");
 console.log(MyArray.pop.call(arrForTestPop));          //6
 console.log(arrForTestPop);                             //['a', 'b', 'c', 4, 5]
 Array.prototype.pop = MyArray.pop;
 console.log(arrForTestPop.pop());                       //5
 console.log(arrForTestPop);                             //["a", "b", "c", 4]
 
 console.log("Метод push");
 console.log(MyArray.push.call(arrForTestPush, 88));     //7
 console.log(arrForTestPush);                            //["a", "b", "c", 4, 5, 6, 88]
 Array.prototype.push = MyArray.push;                    //8
 console.log(arrForTestPush.push(99));                   //["a", "b", "c", 4, 5, 6, 88, 99]
 console.log(arrForTestPush);
 
 console.log("Метод slice");
 console.log(MyArray.slice.call(arrForTestSlice, 1, 3)); //["b", "c"]
 console.log(MyArray.slice.call(arrForTestSlice, 2));    //["c", 4, 5, 6]
 console.log(MyArray.slice.call(arrForTestSlice, -2));   //[5, 6]
 console.log(arrForTestSlice);                           //["a", "b", "c", 4, 5, 6]
 Array.prototype.slice = MyArray.slice;
 console.log(arrForTestSlice.slice(1, 3));               //["b", "c"]
 
 console.log("Метод join");
 console.log(MyArray.join.call(arrForTestJoin, "-"));    //a-b-c-4-5-6
 console.log(arrForTestJoin);                            //["a", "b", "c", 4, 5, 6]
 Array.prototype.join = MyArray.join;
 console.log(arrForTestJoin.join("--"));                 //a--b--c--4--5--6
 console.log(arrForTestJoin);                            //["a", "b", "c", 4, 5, 6]
 
 console.log("Метод reverse");
 console.log(MyArray.reverse.call(arrForTestReverse));   //[6, 5, 4, "c", "b", "a"]
 console.log(arrForTestReverse);                         //[6, 5, 4, "c", "b", "a"]
 Array.prototype.reverse = MyArray.reverse;
 console.log(arrForTestReverse.reverse());               //["a", "b", "c", 4, 5, 6]
 console.log(arrForTestReverse);                         //["a", "b", "c", 4, 5, 6]
 
 console.log("Метод sum у чисел");
 Number.prototype.sum = function (arg) {
     var result;
     result = this  arg;
     return result;
 }
 var y = 4;
 console.log(y.sum(3));       