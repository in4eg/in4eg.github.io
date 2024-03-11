function getBBox(element) {
	return element.getBoundingClientRect();
}

random = function () {
	return '_' + Math.random().toString(36).substr(2, 9);
};

var mouseDown = false;
var startPosition = {
	top: 0,
	left: 0,
	width: 0,
	height: 0
};

var template = '';

var Draggable = function (element){
	var clonedEl = null;
	var checkPoint = false;

	this.newCoord = { y: 0, x: 0 };

	this.cloneTarget = function(event) {
		mouseDown = true;

		template = createTemplate(element);

		clonedEl = $(element).clone().addClass('cloned');
		clonedEl.appendTo('body');

		startPosition.top = getBBox(element).top;
		startPosition.left = getBBox(element).left;
		startPosition.width = getBBox(element).width;
		startPosition.height = getBBox(element).height;

		clonedEl.css({
			top: startPosition.top,
			left: startPosition.left,
			width: startPosition.width,
			height: startPosition.height
		})

		$(element).addClass('faded');

		this.newCoord.x = event.clientX;
		this.newCoord.y = event.clientY;

		moveElement(clonedEl, element, this.newCoord)
	}

	// for tablet device
	this.moveTarget = function(event) {
		template = createTemplate(element);

		if ($(document).find('[data-id="' + $(element).attr('id') +'"]').length <= 0) {
			$(template).insertBefore('.fake-drag-item');
		} else {
			inputValue = $(document).find('[data-id="' + $(element).attr('id') +'"]').find('.value-input').val();
			$(document).find('[data-id="' + $(element).attr('id') +'"]').find('.value-input').val(parseInt(inputValue) + 1);
			$(document).find('[data-id="' + $(element).attr('id') +'"]').removeClass('on-focus');
		}
		$('#servicesMain').prop('checked', true)
		checkPoint = false;
	}

	createTemplate = function(element) {

		var tempteData = {
			templateTitle: $(element).find('.draggable-anchor').text(),
			templateImage: $(element).find('.title .item-image img').attr('src'),
			templateId: $(element).attr('id'),
			templateList: $(element).find('.items-list').html()
		}

		var template = 
		`<div class=\"accordeon accordeon-light with-image with-calculator simple-corners\" data-accordeon data-id=\"` + tempteData.templateId + `\">
		<div class=\"title\">
		<figure class=\"item-image\">
		<img src=\"` + tempteData.templateImage + `\" alt=\"G4S iTos Up\">
		</figure>
		` + tempteData.templateTitle +
		`<div class=\"anchor\">
		<i class=\"icon icon-angle-down\"></i>
		</div>
		<div class=\"calculator\" data-max=\"99\" data-min=\"0\">
		<button type=\"button\" class=\"btn action-btn minus\" data-remove=\"0\">
		<svg width=\"10\" height=\"2\" viewBox=\"0 0 10 2\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">
		<path d=\"M1.58946e-07 1L10 1\" stroke=\"black\" stroke-width=\"2\" stroke-linejoin=\"round\"/>
		</svg>
		</button>
		<input type=\"number\" value=\"1\" class=\"value-input\" readonly>
		<button type=\"button\" class=\"btn action-btn plus\">
		<svg width=\"10\" height=\"10\" viewBox=\"0 0 10 10\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">
		<path d=\"M1.58946e-07 5L10 5\" stroke=\"black\" stroke-width=\"2\" stroke-linejoin=\"round\"/>
		<path d=\"M5 1.58946e-07L5 10\" stroke=\"black\" stroke-width=\"2\" stroke-linejoin=\"round\"/>
		</svg>
		</button>
		</div>
		<button class=\"remove-button\" data-call=\"#popupRemoveItem\">
		<svg width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">
		<path d=\"M4.46445 4.46447L11.5355 11.5355\" stroke=\"white\" stroke-width=\"2\" stroke-linejoin=\"round\"/>
		<path d=\"M11.5355 4.46447L4.46448 11.5355\" stroke=\"white\" stroke-width=\"2\" stroke-linejoin=\"round\"/>
		</svg>
		</button>
		</div>
		<div class=\"inner\">
		<ul class=\"clear items-list\">
		`
		+ tempteData.templateList +
		`
		</ul>
		</div>
		</div>
		`;
		return template
	}
	moveElement = function(clonedEl, element, coord) {
		var finalPoint = $(clonedEl.data('draggable'));

		$(document).on('mouseup touchend', function (event) {
			mouseDown = false;
			coord = { y: 0, x: 0 };

			clonedEl.css({
				transform: "translate(0px, 0px)",
				transition: "transform .3s",
			})
			setTimeout(function(){ clonedEl.remove() }, 320)
			$(element).removeClass('faded');

			if (checkPoint && clonedEl.position().left >= finalPoint.offset().left) {
				$('#mainLayout').addClass('with-items');
				$(clonedEl.data('draggable')).find('.fake-drag-item').removeClass('active');

				if ($(document).find('[data-id="' + clonedEl.attr('id') +'"]').length <= 0) {
					$(template).insertBefore('.fake-drag-item');
				} else {
					inputValue = $(document).find('[data-id="' + clonedEl.attr('id') +'"]').find('.value-input').val();
					$(document).find('[data-id="' + clonedEl.attr('id') +'"]').find('.value-input').val(parseInt(inputValue) + 1);
					$(document).find('[data-id="' + clonedEl.attr('id') +'"]').removeClass('on-focus');
				}
				$('#servicesMain').prop('checked', true)
				checkPoint = false;
				clonedEl.remove();
			} else {
				finalPoint.find('.fake-drag-item').removeClass('active');
				$(document).find('[data-id="' + clonedEl.attr('id') +'"]').removeClass('on-focus');
			}
		});

		$(document).on('mousemove', function (event) {
			if (mouseDown) {
				var x = event.clientX - coord.x;
				var y = event.clientY - coord.y;

				clonedEl.css("transform","translate(" + x + "px, " + y + "px)")
				dropElement(clonedEl, event)
			}
		});
	}
	dropElement = function(clonedEl, event) {
		var finalPoint = $(clonedEl.data('draggable'));

		if (clonedEl.position().left >= (finalPoint.offset().left - clonedEl.width()/2)) {
			checkPoint = true;
			if ($(document).find('[data-id="' + clonedEl.attr('id') +'"]').length <= 0) {
				finalPoint.find('.fake-drag-item').addClass('active');
			} else {
				$(document).find('[data-id="' + clonedEl.attr('id') +'"]').addClass('on-focus');
			}
		} else {
			finalPoint.find('.fake-drag-item').removeClass('active');
		}
	}
	return this;
};


$('[data-draggable] .draggable-anchor').each(function(i, anchor){
	var parent = $(anchor).parents('[data-draggable]')[0]
	var graggableEl = new Draggable(parent);
	var timeout;
	var lastTap = 0;
	$(anchor).on('mousedown touchstart', function (event) {
		event.preventDefault();
		var currentTime = new Date().getTime();
		var tapLength = currentTime - lastTap;
		clearTimeout(timeout);

		if (tapLength < 200 && tapLength > 0) {
			// console.log('Double Tap');
			graggableEl.moveTarget(event);
		} else {
			if (window.innerWidth >= 1281) {
				// console.log('Single Tap');
				graggableEl.cloneTarget(event);
			}
			timeout = setTimeout(function() {
				// console.log('Single Tap (timeout)');
				clearTimeout(timeout);
			}, 200);
		}
		lastTap = currentTime;
	});
});

$(document).on('click', '[data-draggable].cloned .draggable-anchor', function(event){
	event.preventDefault();
	var parent = $(this).parents('[data-draggable]')[0]
	var graggableEl = new Draggable(parent);
	if (window.innerWidth >= 1281) {
		graggableEl.moveTarget(event);
	}
})