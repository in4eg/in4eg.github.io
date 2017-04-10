function perform(val, init) {
	var value = typeof init === 'function' ? init() : val;

	return {
		then: function(callback){
			return perform(callback(value));
		}
	}
}

perform(null, function() {
	var param = 1;
	console.log(param);
	return param;
})
.then(function(param) {
	console.log(++param);
	return param;
})
.then(function(param) {
	console.log(++param);
	return param;
})
.then(function(param) {
	console.log(++param);
	return param;
})
.then(function(param) {
	console.log(++param);
	return param;
})
.then(function(param) {
	console.log(++param);
	return param;
})
.then(function(param) {
	console.log(++param);
	return param;
});