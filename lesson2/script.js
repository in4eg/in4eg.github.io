      var newArray=[1, 2, 3, 4];
      var newArray2=["a", "b", "c", "d", "e"];


      var newObject = {

      	pop: function () {

      		if (this.length != 0){

      			var last = this[this.length-1];

      			return last;

      		} else {

      			return false;
      		}
      	},
      	push: function () {
      		var number = this.push.arguments.length;
      		var list = this.push.arguments;

      		if (number > 0) {

      			for (var i = 0; i < number; i++) {
      				this.length++;
      				this[this.length - 1] = arguments[i];
      			}

      			return this;
      		} else {

      			return false;
      		}
      	},
      	join: function (param) {
      		var result = "";

      		for(var i=0; i<this.length; i++){

      			result =result+this[i] + param;
      			//console.log(result); 
      		}
      		return result;
      	},
      	reverse : function () {
      		var result = [];

      		// console.log(result); 

      		for(var i = this.length-1; i >= 0; i--) {
      			result.push(this[i]);
      		}
      		return result;
      	},
      	slice: function(from, to) {

      		var result = [];
      		var arrLeng = this.length;

      		var start = from || 0;

      		if (start >= 0) {

      			start = start;

      		} else {

      			start = arrLeng + start;
      		}

      		var toValue;

      		if (to) {

      			toValue = to;

      		} else if (to < 0) {

      			toValue = arrLeng + to;

      		} else {

      			toValue = arrLeng;
      		}

      		var arrSize = toValue - start;

      		var i;

      		if (arrSize > 0) {

      			result = new Array(arrSize);

      		//	console.log(result);

      		if (this.charAt) {

      			for (i = 0; i < arrSize; i++) {
      				result[i] = this.charAt(start + i);
      			}

      		} else {
      			
      			for (i = 0; i < arrSize; i++) {
      				result[i] = this[start + i];
      			}
      		}
      	}
      	return result;
      }

  };
  console.log (newObject);

  Array.prototype.pop = newObject.pop;
  Array.prototype.push = newObject.push;
  Array.prototype.slice = newObject.slice;
  Array.prototype.join = newObject.join;
  Array.prototype.reverse = newObject.reverse;


  console.log (newObject.pop.call(newArray));
  console.log (newObject.push.call(newArray, 5));
  console.log (newObject.join.call(newArray, (";")));
  console.log (newObject.reverse.call(newArray));
  console.log (newObject.slice.call(newArray, (1, 2)));

  console.log (newObject.pop.call(newArray2));
  console.log (newObject.push.call(newArray2, "f"));
  console.log (newObject.join.call(newArray2, (",")));
  console.log (newObject.reverse.call(newArray2));
  console.log (newObject.slice.call(newArray2, (2, 4)));