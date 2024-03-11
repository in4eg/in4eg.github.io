var ItemTooltip = function(el) {
	var createTooltip, createdTooltip, getSize, position, text, x, y;
	x = 0;
	y = 0;
	text = $(el).data('tooltip');
	createdTooltip = null;
	position = '';
	getSize = function() {
		var coef, depenceWidth, rect, width;
		rect = createdTooltip.getBoundingClientRect();
		coef = 1;
		depenceWidth = rect.width / window.innerWidth * 100;
		if (depenceWidth < 25) {
			coef = 1;
		} else if (depenceWidth > 45) {
			coef = .35;
		} else {
			coef = .5;
		}
		width = rect.width * coef;
		$(createdTooltip).css({
			width: width + 'px'
		});
	};
	this.show = function(event) {
		createTooltip();
		this.setPosition(event.clientX, event.clientY);
		getSize();
	};
	this.hide = function() {
		$(createdTooltip).removeClass('active');
		$(createdTooltip).remove();
		createdTooltip = null;
	};
	createTooltip = function() {
		var cover;
		cover = document.createElement('div');
		cover.className = 'tooltip-fixed';
		cover.innerHTML = text;
		createdTooltip = cover;
		document.body.append(createdTooltip);
		$(createdTooltip).addClass('active');
	};
	this.setPosition = function(x, y) {
		var rect;
		rect = createdTooltip.getBoundingClientRect();
		if (x < window.innerWidth / 4 * 3) {
			this.x = x;
		} else {
			this.x = x - rect.width;
		}
		this.y = Math.min(y + 15, window.innerHeight - rect.height - window.innerHeight * .1);
		$(createdTooltip).css({
			top: this.y + "px",
			left: this.x + "px"
		});
	};
	return this;
};

$('[data-tooltip]').each(function(i, parent) {
	var tooltip = new ItemTooltip(parent);
	$(parent).on('mouseenter', function(event) {
		tooltip.show(event);
	});
	$(parent).on('mouseleave', function(event) {
		tooltip.hide();
	});
	$(parent).on('mousemove', function(event) {
		tooltip.setPosition(event.clientX, event.clientY);
	});
});
