function round(a){
	var re = new RegExp('^-?\\d+(?:\.\\d{0,' + (2 || -1) + '})?');
	return a.toString().match(re)[0];
}

module.exports = round;