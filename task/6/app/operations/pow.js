function pow(a,b){
	var result = a;

	for (var i = 1; i < b; i++) {
		result = a * result;
	}

	return result;
}

module.exports = pow;