// определяем функцию, которую хотим экспортировать
function add(a,b){
	return parseInt(a)+parseInt(b);
}
// делаем ее доступной для других модулей
module.exports = add;