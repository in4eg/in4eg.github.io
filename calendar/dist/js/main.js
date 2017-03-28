
Vue.component('my-component', {
	template: '<div>Пользовательский компонент!</div>'
})
// register modal component
Vue.component('modal', {
	template: '#modal-template'
});


// start app
var app = new Vue({
	el: '#app',
	data: {
		message: "Hello",
		showModal: false
	}
})