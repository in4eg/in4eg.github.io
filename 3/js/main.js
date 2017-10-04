
// part 1 Fn = Fn-1 + Fn-2
//1.1
function fibonacci(repeat) {
	a = 0; b = 1;
	result = [];

	if (repeat == 0){
		result.push(a);
	}
	else if (repeat == 1) {
		result.push(a);
		result.push(b);
	}
	else {

		for (i = 0; i <= repeat; i++) {
			n = a;
			a = a + b;
			b = n;
			result.push(b);
		}
	}

	return result;
};
console.log("fibonacci");
console.log(fibonacci(3))
console.log("\n");


// part 2
documentEvents = [
{ ev: 'onEscape', key: 27 },
{ ev: 'onEnter', key: 13 },
{ ev: 'onLeft', key: 37 },
{ ev: 'onRight', key: 39 },
{ ev: 'onUp', key: 38 },
{ ev: 'onDown', key: 40 },
{ ev: 'onSpace', key: 32 },
{ ev: 'onShft', key: 16 },
{ ev: 'onCtrl', key: 17 }
];

var $ = function(selector, context) {

	if (typeof context != "undefined") {
		return [].slice.call(context.querySelectorAll(selector));
	} else {
		context = document;
	}
	if (typeof selector == "string") {
		selector = selector.trim();
		result = selector.match(/(#|\.|\s|\>)(.*?)(#|\.|\s|\>)/igm);
		if (result) {
			choosenElements = context.querySelectorAll(selector);
		} else {
			if (selector.substr(0, 1) === '.') {
				selector = selector.substring(1);
				choosenElements = context.getElementsByClassName(selector);
			} else if (selector.substr(0, 1) === '#') {
				selector = selector.substring(1);
				choosenElements = context.getElementById(selector);
			} else {
				choosenElements = context.getElementsByTagName(selector);
			}
		}
	} else {
		choosenElements = selector;
	}
	if (!choosenElements) {
		return [];
	}
	if (choosenElements.length && choosenElements.length > 0) {
		res = [].slice.call(choosenElements);
	} else {
		res = [choosenElements];
	}
	for (method in methods) {
		res[method] = methods[method].bind(res);
	}
	// if document add events
	if (selector == document) {

		documentEvents.map(function(eventObj){
			res[eventObj.ev] = function(callback) {
				// console.log(eventObj.key);

				//get keyCode ??
				// console.log(res);
				res[0].onkeydown = function(e){
					console.log(e.keyCode);
				//eventObj.key == 17??
				console.log(eventObj.key);
				console.log(callback);

				if (callback && e.keyCode === eventObj.key){
					console.log(callback);
				}
			};
		}
	});
	}
	return res;
};

$.tools = {
	nodeBack: function(selection, callback) {
		for (i = 0; i < selection.length; i++) {
			node = selection[i];
			callback(node, i);
		}
		return selection;
	}
};

methods = {};

methods.on = function(event, handler, useCapture) {
	eventArr = event.split(' ');
	$.tools.nodeBack(this, function(node) {
		for (i = 0; i <= eventArr.length - 1; i++) {
			// console.log(eventArr[i]);
			node.addEventListener(eventArr[i], handler);
		}
		return node;
	});
	if (typeof useCapture =="boolean" && useCapture == true) {
		useCapture = true;
	} else {
		useCapture = false;
	}
	return this;
};

methods.trigger = function(eventType, extraParameters) {
	if (document.createEvent) {
		var event = new Event(eventType);

		$.tools.nodeBack(this, function(node) {
			console.log('event trigger to' + ' ' + node.getAttribute('id'));

			node.addEventListener(eventType, function (e) {
				if (typeof extraParameters != "undefined" && extraParameters.length > 0) {
					for (i = 0; i <= extraParameters.length - 1; i++) {
						console.log('параметр' + ' ' + extraParameters[i]);
					}
				}
			}, false);
			node.dispatchEvent(event);
		});

	} else {
		event = document.createEventObject();

		$.tools.nodeBack(this, function(node) {
			console.log('event trigger to' + ' ' + node.getAttribute('id'));

			node.addEventListener(eventType, function (e) {
				if (typeof extraParameters != "undefined" && extraParameters.length > 0) {
					for (i = 0; i <= extraParameters.length - 1; i++) {
						console.log('параметр' + ' ' + extraParameters[i]);
					}
				}
			}, false);

			node.fireEvent('on'+eventType, event);
		});

	}

	return this;
};


$('#first').on('click mouseenter mouseover', function(){
	console.log('btn click mouseenter mouseover event');
});
$('#sec').on('click', function(){
	$('#thrd').trigger('click', ['один','два']);
});

$(window).on('scroll resize', function(){
	console.log('scroll and resize event');
});




console.log($(document));



$(document).onEscape(function(e){ console.log('onEscape') });
$(document).onEnter(function(e){ console.log('onEnter') });
$(document).onLeft(function(e){ console.log('onLeft') });
$(document).onRight(function(e){ console.log('onRight') });
$(document).onUp(function(e){ console.log('onUp') });
$(document).onDown(function(e){ console.log('onDown') });
$(document).onSpace(function(e){ console.log('onSpace') });
$(document).onShft(function(e){ console.log('onShft') });
$(document).onCtrl(function(e){ console.log('onCtrl') });

//??
//reduse??
// add several buttons??
methods.off = function(event, handler, useCapture) {
	eventArr = event.split(' ');
	$.tools.nodeBack(this, function(node) {
		for (i = 0; i <= eventArr.length - 1; i++) {
			node.removeEventListener(eventArr[i], handler);
		}
		return node;
	});
	if (typeof useCapture == "boolean" && useCapture == true) {
		useCapture = true;
	} else {
		useCapture = false;
	}
	return this;
};
//??
$('#first').off('click', function(){
	console.log('btn off event');
});