// возвращает модуль числа
function abs(a){
	if (a > 0) {
		return a;
	}
	else if (a < 0) {
		return -(a);
	}
	else if (a = 0) {
		return 0;
	}
	else {
		return parseInt(a);
	}
}
// делаем ее доступной для других модулей
module.exports = abs;