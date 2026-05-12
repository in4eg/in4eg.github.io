class CanvasChart {
	canvas = null;
	ctx = null;

	width = 0;
	height = 0;

	data = [];
	options = {};

	_destroyed = true;
	_rects = [];
	_hoveredRect = null;

	_tooltipOpacity = 0;
	_tooltipAnimationFrame = null;

	_animationProgress = 0;
	_animationFrame = null;

	_dogImage = new Image();
	_dogReady = false;

	constructor(host, data = [], options = {}) {
		this._destroyed = false;

		this.canvas = host;
		this.ctx = this.canvas.getContext('2d');

		this.data = data;

		this._dogImage.src = './img/dog.webp';

		this._dogImage.onload = () => {
			this._dogReady = true;
			this.draw();
		};

		this.options = {
			legend: true,
			chartTitle: 'Дані по закупівлі продуктів',
			colors: {
				available: '#000000',
				expected: '#39ad3f',
				needed: '#aaaaaa',
				target: '#ffffff',
				overPlan: '#ff8a2a',
				total: '#ffcc22',
				text: '#111111',
				border: '#222222',
				grid: '#dddddd',
				tooltipBg: '#111111',
				tooltipText: '#ffffff'
			},
			...options,
			colors: {
				...{
					available: '#000000',
					expected: '#39ad3f',
					needed: '#aaaaaa',
					target: '#ffffff',
					overPlan: '#ff8a2a',
					total: '#ffcc22',
					text: '#111111',
					border: '#222222',
					grid: '#dddddd',
					tooltipBg: '#111111',
					tooltipText: '#ffffff'
				},
				...(options.colors || {})
			}
		};

		this.updateRects = this.updateRects.bind(this);
		this.handleMouseMove = this.handleMouseMove.bind(this);
		this.handleMouseLeave = this.handleMouseLeave.bind(this);
		this.animateBars = this.animateBars.bind(this);

		setTimeout(() => {
			this.init();
			this.updateRects();
			this.animateBars();
		}, 100);

		window.addEventListener('resize', this.updateRects);
		this.canvas.addEventListener('mousemove', this.handleMouseMove);
		this.canvas.addEventListener('mouseleave', this.handleMouseLeave);
	}

	init() {
		this.updateRects();
	}

	animateBars() {
		cancelAnimationFrame(this._animationFrame);

		const startTime = performance.now();
		const duration = 900;

		const animate = currentTime => {
			if (this._destroyed) return;

			const progress = Math.min((currentTime - startTime) / duration, 1);

			this._animationProgress = 1 - Math.pow(1 - progress, 3);

			this.draw();

			if (progress < 1) {
				this._animationFrame = requestAnimationFrame(animate);
			}
		};

		this._animationFrame = requestAnimationFrame(animate);
	}

	updateRects() {
		if (this._destroyed) return;

		const parent = this.canvas.parentElement;
		const dpr = window.devicePixelRatio || 1;

		this.width = parent ? parent.clientWidth : 1200;
		this.height = this.options.legend ? 720 : 600;

		this.canvas.style.width = `${this.width}px`;
		this.canvas.style.height = `${this.height}px`;

		this.canvas.width = Math.round(this.width * dpr);
		this.canvas.height = Math.round(this.height * dpr);

		this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

		this.draw();
	}

	clear() {
		this.ctx.clearRect(0, 0, this.width, this.height);
	}

	draw() {
		this.clear();
		this._rects = [];

		this.drawTitle();
		this.drawRows();

		if (this.options.legend) {
			this.drawLegend();
		}

		if (this._hoveredRect) {
			this.drawTooltip(this._hoveredRect);
		}
	}

	drawTitle() {
		const { ctx } = this;

		ctx.save();
		ctx.fillStyle = this.options.colors.text;
		ctx.font = '700 28px Arial';
		ctx.textBaseline = 'top';
		ctx.fillText(this.options.chartTitle, 40, 32);
		ctx.restore();
	}

	drawRows() {
		const { ctx } = this;
		const colors = this.options.colors;
		const layout = this.getLayout();

		const {
			startX,
			labelX,
			startY,
			rowHeight,
			barHeight,
			mainBarWidth,
			targetLineWidth,
			overPlanWidth,
			totalGap,
			totalWidth,
			moneyGap,
			moneyCellWidth,
			moneyOffset
		} = layout;

		const totalX = startX + mainBarWidth + targetLineWidth + overPlanWidth + totalGap;
		const moneyStartX = totalX + totalWidth + moneyOffset;
		const targetLineX = startX + mainBarWidth;

		this.drawGlobalTargetLine(
			targetLineX,
			startY,
			startY + (this.data.length - 1) * rowHeight + barHeight
		);

		this.data.forEach((item, index) => {
			const y = startY + index * rowHeight;
			const centerY = y + barHeight / 2;

			ctx.save();
			ctx.fillStyle = colors.text;
			ctx.font = '14px Arial';
			ctx.textAlign = 'right';
			ctx.textBaseline = 'middle';
			ctx.fillText(item.name, labelX, centerY);
			ctx.restore();

			const barData = this.drawMainBar(
				item,
				startX,
				y,
				mainBarWidth,
				barHeight
			);

			if (item.overPlan > 0) {
				const width = overPlanWidth * this._animationProgress;

				this.drawBlock({
					x: startX + mainBarWidth + targetLineWidth,
					y,
					width,
					height: barHeight,
					color: colors.overPlan,
					text: item.overPlan,
					textColor: colors.text,
					type: 'overPlan',
					item
				});
			}

			this.drawTargetMark(
				item,
				barData.targetX,
				y,
				barHeight
			);

			this.drawBlock({
				x: totalX,
				y,
				width: totalWidth,
				height: barHeight,
				color: colors.total,
				text: item.total,
				textColor: colors.text,
				type: 'total',
				item
			});

			this.drawCosts(item, moneyStartX, y, moneyCellWidth, moneyGap, barHeight);
		});
	}

	drawGlobalTargetLine(x, startY, endY) {
		const { ctx } = this;

		ctx.save();
		ctx.fillStyle = this.options.colors.border;

		ctx.fillRect(
			x,
			startY,
			12,
			endY - startY
		);

		ctx.restore();
	}

	drawMainBar(item, x, y, width, height) {
		const colors = this.options.colors;

		const values = [
			{
				key: 'available',
				value: item.available,
				color: colors.available,
				textColor: '#ffffff'
			},
			{
				key: 'expected',
				value: item.expected,
				color: colors.expected,
				textColor: colors.text
			},
			{
				key: 'needed',
				value: item.needed,
				color: colors.needed,
				textColor: colors.text
			}
		];

		let currentX = x;

		values.forEach(part => {
			if (!part.value) return;

			const partWidth = width * (part.value / item.target) * this._animationProgress;

			this.drawBlock({
				x: currentX,
				y,
				width: partWidth,
				height,
				color: part.color,
				text: part.value,
				textColor: part.textColor,
				type: part.key,
				item
			});

			currentX += partWidth;
		});

		return {
			targetX: x + width
		};
	}

	drawTargetMark(item, x, y, height) {
		const { ctx } = this;
		const colors = this.options.colors;

		ctx.save();

		const labelWidth = 42;
		const labelHeight = 20;
		const labelX = x - labelWidth / 2;
		const labelY = y + height / 2 - labelHeight / 2;

		ctx.fillStyle = colors.target;
		ctx.strokeStyle = colors.border;
		ctx.lineWidth = 1;
		ctx.fillRect(labelX, labelY, labelWidth, labelHeight);
		ctx.strokeRect(labelX, labelY, labelWidth, labelHeight);

		ctx.fillStyle = colors.text;
		ctx.font = '13px Arial';
		ctx.textAlign = 'center';
		ctx.textBaseline = 'middle';
		ctx.fillText(item.target, x, y + height / 2);

		ctx.restore();
	}

	drawCosts(item, startX, y, cellWidth, gap, height) {
		const colors = this.options.colors;

		const cells = [
			{
				key: 'available',
				color: colors.available,
				textColor: '#ffffff'
			},
			{
				key: 'expected',
				color: colors.expected,
				textColor: colors.text
			},
			{
				key: 'needed',
				color: colors.needed,
				textColor: colors.text
			},
			{
				key: 'overPlan',
				color: colors.overPlan,
				textColor: colors.text
			},
			{
				key: 'total',
				color: colors.total,
				textColor: colors.text
			}
		];

		cells.forEach((cell, index) => {
			const value = item.costs[cell.key];
			const x = startX + index * (cellWidth + gap);

			if (value === null || value === undefined) {
				this.drawDash(x, y, cellWidth, height);
				return;
			}

			this.drawBlock({
				x,
				y,
				width: cellWidth,
				height,
				color: cell.color,
				text: `$${value}`,
				textColor: cell.textColor,
				type: `cost-${cell.key}`,
				item
			});
		});
	}

	drawBlock({ x, y, width, height, color, text, textColor, type, item }) {
		const { ctx } = this;

		const isAnimatedBlock = ['available', 'expected', 'needed', 'overPlan'].includes(type);
		const canShowText = !isAnimatedBlock || this._animationProgress > 0.85;

		ctx.save();

		ctx.fillStyle = color;
		ctx.fillRect(x, y, width, height);

		if (isAnimatedBlock && this._dogReady && this._animationProgress < 1) {
			const dogSize = height * 1.2;
			const dogX = x + width - dogSize;
			const dogY = y + height / 2 - dogSize / 2;

			if (width > dogSize) {
				ctx.drawImage(
					this._dogImage,
					dogX,
					dogY,
					dogSize,
					dogSize
				);
			}
		}

		ctx.fillStyle = textColor;
		ctx.font = '13px Arial';
		ctx.textAlign = 'center';
		ctx.textBaseline = 'middle';

		if (width > 28 && canShowText) {
			ctx.fillText(text, x + width / 2, y + height / 2);
		}

		ctx.restore();

		if (!type.startsWith('cost-')) {
			this._rects.push({
				x,
				y,
				width,
				height,
				type,
				item,
				value: text
			});
		}
	}

	drawDash(x, y, width, height) {
		const { ctx } = this;

		ctx.save();
		ctx.fillStyle = this.options.colors.text;
		ctx.font = '14px Arial';
		ctx.textAlign = 'center';
		ctx.textBaseline = 'middle';
		ctx.fillText('-', x + width / 2, y + height / 2);
		ctx.restore();
	}

	drawLegend() {
		const { ctx } = this;
		const colors = this.options.colors;

		const items = [
			['available', 'Наявно'],
			['expected', 'Очікується'],
			['needed', 'Необхідно'],
			['target', 'Ціль'],
			['overPlan', 'Більше плану'],
			['total', 'Разом']
		];

		const x = 42;
		const y = 585;
		const size = 14;
		const rowHeight = 27;

		ctx.save();

		ctx.font = '14px Arial';
		ctx.textBaseline = 'middle';

		items.forEach(([key, label], index) => {
			const itemY = y + index * rowHeight;

			ctx.fillStyle = colors[key];
			ctx.fillRect(x, itemY, size, size);

			if (key === 'target') {
				ctx.strokeStyle = colors.border;
				ctx.strokeRect(x, itemY, size, size);
			}

			ctx.fillStyle = colors.text;
			ctx.fillText(label, x + size + 10, itemY + size / 2);
		});

		ctx.restore();
	}

	handleMouseMove(event) {
		const rect = this.canvas.getBoundingClientRect();
		const mouseX = event.clientX - rect.left;
		const mouseY = event.clientY - rect.top;

		const hoveredRect = this._rects.find(item => {
			return (
				mouseX >= item.x &&
				mouseX <= item.x + item.width &&
				mouseY >= item.y &&
				mouseY <= item.y + item.height
			);
		});

		if (hoveredRect !== this._hoveredRect) {
			this._hoveredRect = hoveredRect;
			this.animateTooltip(hoveredRect ? 1 : 0);
		}

		this.draw();
	}

	handleMouseLeave() {
		this.animateTooltip(0);
	}

	animateTooltip(targetOpacity) {
		cancelAnimationFrame(this._tooltipAnimationFrame);

		const startOpacity = this._tooltipOpacity;
		const startTime = performance.now();
		const duration = 160;

		const animate = currentTime => {
			const progress = Math.min((currentTime - startTime) / duration, 1);

			this._tooltipOpacity = startOpacity + (targetOpacity - startOpacity) * progress;

			if (progress < 1) {
				this._tooltipAnimationFrame = requestAnimationFrame(animate);
			} else if (targetOpacity === 0) {
				this._hoveredRect = null;
			}

			this.draw();
		};

		this._tooltipAnimationFrame = requestAnimationFrame(animate);
	}

	drawTooltip(rect) {
		const { ctx } = this;

		if (!rect || this._tooltipOpacity <= 0) return;

		const percent = this.getRelativeValue(rect);
		const label = this.getLegendLabel(rect.type);
		const text = `${label}: ${percent}%`;

		const paddingX = 10;
		const tooltipHeight = 28;

		ctx.save();

		ctx.globalAlpha = this._tooltipOpacity;
		ctx.font = '14px Arial';

		const tooltipWidth = ctx.measureText(text).width + paddingX * 2;

		let x = rect.x + rect.width / 2 - tooltipWidth / 2;
		let y = rect.y - tooltipHeight - 8;

		if (x < 8) x = 8;
		if (x + tooltipWidth > this.width - 8) x = this.width - tooltipWidth - 8;
		if (y < 8) y = rect.y + rect.height + 8;

		ctx.fillStyle = this.options.colors.tooltipBg;
		ctx.fillRect(x, y, tooltipWidth, tooltipHeight);

		ctx.fillStyle = this.options.colors.tooltipText;
		ctx.textAlign = 'center';
		ctx.textBaseline = 'middle';
		ctx.fillText(text, x + tooltipWidth / 2, y + tooltipHeight / 2);

		ctx.restore();
	}

	getLegendLabel(type) {
		const cleanType = type.replace('cost-', '');

		const labels = {
			available: 'Наявно',
			expected: 'Очікується',
			needed: 'Необхідно',
			target: 'Ціль',
			overPlan: 'Більше плану',
			total: 'Разом'
		};

		return labels[cleanType] || cleanType;
	}

	getRelativeValue(rect) {
		const item = rect.item;

		if (rect.type.startsWith('cost-')) {
			const key = rect.type.replace('cost-', '');
			const value = item.costs[key];

			if (!item.costs.total) return 0;

			return Math.round((value / item.costs.total) * 100);
		}

		if (rect.type === 'total') {
			return Math.round((item.total / item.target) * 100);
		}

		if (rect.type === 'overPlan') {
			return Math.round((item.overPlan / item.target) * 100);
		}

		const value = item[rect.type];
		return Math.round((value / item.target) * 100);
	}

	getLayout() {
		const w = this.width;

		return {
			startX: w * 0.22,
			labelX: w * 0.20,
			startY: 105,

			rowHeight: 46,
			barHeight: 32,

			mainBarWidth: w * 0.28,
			targetLineWidth: 12,
			overPlanWidth: w * 0.06,

			totalGap: w * 0.025,
			totalWidth: w * 0.04,

			moneyGap: w * 0.012,
			moneyCellWidth: w * 0.045,
			moneyOffset: w * 0.075
		};
	}

	destroy() {
		this._destroyed = true;

		window.removeEventListener('resize', this.updateRects);
		this.canvas.removeEventListener('mousemove', this.handleMouseMove);
		this.canvas.removeEventListener('mouseleave', this.handleMouseLeave);

		cancelAnimationFrame(this._animationFrame);
		cancelAnimationFrame(this._tooltipAnimationFrame);

		this.clear();
	}
}

async function loadData() {
	const response = await fetch('./data.json');
	const productsData = await response.json();

	const canvas = document.querySelector('#canvasChart');

	new CanvasChart(canvas, productsData, {
		legend: true,
		chartTitle: 'Дані по закупівлі продуктів',
		colors: {
			available: '#000000',
			expected: '#3caf3f',
			needed: '#aaaaaa',
			target: '#ffffff',
			overPlan: '#ff8a2a',
			total: '#ffcc22'
		}
	});
}

loadData();