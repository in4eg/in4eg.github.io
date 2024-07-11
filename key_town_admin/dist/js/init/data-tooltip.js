$(document).ready(function() {

	var tooltipHint = {
		x: 0,
		y: 0,
		newTooltip: null,
		element: null,

		setCoordinates: function(pageX, pageY, element){
			this.x = pageX;
			this.y = pageY;
			// + element height/width
		},

		setText: function(text){
			this.text = text;
		},

		getCoordinates: function(){
			return {x: this.x, y: this.y}
		},

		getText: function(){
			return this.text;
		},

		getElementSize: function(){
			return this.element.getBoundingClientRect();
		},

		setTooltipPosition: function(){
			// console.log(this.getElementSize())
			
			// this.getCoordinates().y + "px";
			// this.getCoordinates().x + "px";
		},

		createTooltipElement: function(){
			this.newTooltip = document.createElement('div');
			this.newTooltip.className = "tooltip";
			this.newTooltip.setAttribute("id", "tooltip");
			this.newTooltip.appendChild(document.createTextNode(this.getText()));
			// postion
			this.newTooltip.style.top = this.getCoordinates().y + "px";
			this.newTooltip.style.left = this.getCoordinates().x + "px";
					document.body.appendChild(this.newTooltip);
		},

		show: function(element, event){
			if (!element || !event) return;
			let text = element.dataset.tooltip.trim();
			this.element = element;
			this.setText(text);
			this.setCoordinates(event.pageX,event.pageY, element);
			this.createTooltipElement();

			setTimeout(function(){
				this.newTooltip.classList.add("active");
			}.bind(this), 250)
		},

		hide: function(){
			this.setText('');
			this.setCoordinates(0, 0);
			let tooltip = document.getElementById('tooltip');
			document.getElementById("tooltip").remove();
		}
	};



	$('[data-tooltip]').each(function(i, tooltip) {

		$(tooltip).mouseenter(function(e) {
			tooltipHint.show(tooltip, e);
		});

		$(tooltip).mouseleave(function(e) {
			tooltipHint.hide();
		});
	});
});