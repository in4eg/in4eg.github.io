async function loadProductsData() {
	const response = await fetch('./data.json');
	return await response.json();
}

async function initCharts() {
	const productsData = await loadProductsData();

	if (document.querySelector('#chart')) {
		initChart1(productsData);
	}

	if (document.querySelector('#chart2')) {
		initChart2(productsData);
	}
}

function initChart1(productsData) {
	const chartElement = document.querySelector('#chart');
	const chart = echarts.init(chartElement);

	const colors = {
		available: '#000000',
		expected: '#3caf3f',
		needed: '#aaaaaa',
		target: '#ffffff',
		overPlan: '#ff8a2a',
		total: '#ffcc22',
		text: '#111111',
		border: '#222222'
	};

	function makeLegendItem(y, color, text, bordered = false) {
		return {
			type: 'group',
			top: y,
			children: [
				{
					type: 'rect',

					shape: {
						x: 0,
						y: 0,
						width: 14,
						height: 14
					},

					style: {
						fill: color,
						stroke: bordered ? '#222222' : null,
						lineWidth: bordered ? 1 : 0
					}
				},

				{
					type: 'text',

					style: {
						x: 24,
						y: 7,
						text,
						fill: '#111111',
						font: '14px Arial',
						verticalAlign: 'middle'
					}
				}
			]
		};
	}

	const option = {
		title: {
			text: 'Дані по закупівлі продуктів',
			left: 20,
			top: 20,

			textStyle: {
				fontSize: 28,
				fontWeight: 700,
				color: '#111111'
			}
		},

		grid: {
			left: 160,
			right: 40,
			top: 100,
			bottom: 230
		},

		tooltip: {
			trigger: 'item',
			formatter(params) {
				const item = params.data.item;

				if (!item) return '';

				return `
					<strong>${item.name}</strong><br/>
					Запаси: ${item.available}<br/>
					У графіку постачання: ${item.expected}<br/>
					Дефіцит: ${item.needed}<br/>
					Поверх цілі: ${item.overPlan}<br/>
					Ціль: ${item.target}<br/>
					Разом наявно: ${item.total}
				`;
			}
		},

		xAxis: {
			type: 'value',
			show: false,
			min: 0,
			max: 2300
		},

		yAxis: {
			type: 'category',
			inverse: true,
			data: productsData.map(item => item.name),
			axisLine: { show: false },
			axisTick: { show: false },
			axisLabel: {
				color: '#555',
				fontSize: 13
			}
		},

		series: [
			{
				type: 'custom',
				renderItem(params, api) {
					const item = productsData[params.dataIndex];

					const y = api.coord([0, item.name])[1];
					const x0 = api.coord([0, item.name])[0];
					const targetLineX = api.coord([1000, item.name])[0];

					const barHeight = 28;
					const targetLineWidth = 12;
					const overPlanWidth = 100;

					const targetWidth = targetLineX - x0;

					const children = [];
					let currentX = x0;

					function addRect(value, color, textColor) {
						if (!value) return;

						const width = Math.max(
							value / item.target * targetWidth,
							10
						);

						children.push({
							type: 'rect',
							shape: {
								x: currentX,
								y: y - barHeight / 2,
								width,
								height: barHeight
							},
							style: {
								fill: color
							}
						});

						children.push({
							type: 'text',
							style: {
								x: currentX + width / 2,
								y,
								text: String(value),
								fill: textColor,
								align: 'center',
								verticalAlign: 'middle',
								font: '14px Arial'
							}
						});

						currentX += width;
					}

					addRect(item.available, colors.available, '#ffffff');
					addRect(item.expected, colors.expected, colors.text);
					addRect(item.needed, colors.needed, colors.text);

					if (item.overPlan > 0) {
						children.push({
							type: 'rect',
							shape: {
								x: targetLineX + targetLineWidth,
								y: y - barHeight / 2,
								width: overPlanWidth,
								height: barHeight
							},
							style: {
								fill: colors.overPlan
							}
						});

						children.push({
							type: 'text',
							style: {
								x: targetLineX + targetLineWidth + overPlanWidth / 2,
								y,
								text: String(item.overPlan),
								fill: colors.text,
								align: 'center',
								verticalAlign: 'middle',
								font: '14px Arial'
							}
						});
					}

					return {
						type: 'group',
						children
					};
				},
				data: productsData.map(item => ({
					value: [item.total, item.name],
					item
				}))
			},

			{
				type: 'custom',
				silent: true,

				renderItem(params, api) {
					const firstItem = productsData[0];
					const lastItem = productsData[productsData.length - 1];

					const x = api.coord([1000, firstItem.name])[0];

					const yTop = api.coord([1000, firstItem.name])[1] - 14;
					const yBottom = api.coord([1000, lastItem.name])[1] + 14;

					return {
						type: 'rect',

						shape: {
							x,
							y: yTop,
							width: 12,
							height: yBottom - yTop
						},

						style: {
							fill: colors.border
						},

						z2: 10
					};
				},

				data: [1]
			},

			{
				type: 'custom',
				silent: true,

				renderItem(params, api) {
					const item = productsData[params.dataIndex];

					const y = api.coord([0, item.name])[1];
					const targetLineX = api.coord([1000, item.name])[0];

					const labelWidth = 42;
					const labelHeight = 20;

					return {
						type: 'group',

						children: [
							{
								type: 'rect',

								shape: {
									x: targetLineX - labelWidth / 2,
									y: y - labelHeight / 2,
									width: labelWidth,
									height: labelHeight
								},

								style: {
									fill: colors.target,
									stroke: colors.border,
									lineWidth: 1
								},

								z2: 30
							},

							{
								type: 'text',

								style: {
									x: targetLineX,
									y,
									text: String(item.target),
									fill: colors.text,
									align: 'center',
									verticalAlign: 'middle',
									font: '14px Arial'
								},

								z2: 31
							}
						]
					};
				},

				data: productsData.map(item => ({
					value: [item.target, item.name]
				}))
			},

			{
				type: 'custom',
				renderItem(params, api) {
					const item = productsData[params.dataIndex];

					const y = api.coord([0, item.name])[1];
					const x = api.coord([1300, item.name])[0];

					const width = 54;
					const height = 28;

					return {
						type: 'group',
						children: [
							{
								type: 'rect',
								shape: {
									x,
									y: y - height / 2,
									width,
									height
								},
								style: {
									fill: colors.total
								}
							},
							{
								type: 'text',
								style: {
									x: x + width / 2,
									y,
									text: String(item.total),
									fill: colors.text,
									align: 'center',
									verticalAlign: 'middle',
									font: '14px Arial'
								}
							}
						]
					};
				},
				data: productsData.map(item => ({
					value: [item.total, item.name],
					tooltip: `Разом: ${Math.round(item.total / item.target * 100)}%`
				}))
			},

			{
				type: 'custom',
				silent: true,
				renderItem(params, api) {
					const item = productsData[params.dataIndex];

					const y = api.coord([0, item.name])[1];
					const startX = api.coord([1600, item.name])[0];

					const cellWidth = 54;
					const gap = 14;
					const height = 28;

					const keys = [
						['available', colors.available, '#ffffff'],
						['expected', colors.expected, colors.text],
						['needed', colors.needed, colors.text],
						['overPlan', colors.overPlan, colors.text],
						['total', colors.total, colors.text]
					];

					const children = [];

					keys.forEach(([key, bg, textColor], index) => {
						const value = item.costs[key];
						const x = startX + index * (cellWidth + gap);

						if (value === null || value === undefined) {
							children.push({
								type: 'text',
								style: {
									x: x + cellWidth / 2,
									y,
									text: '-',
									fill: '#666666',
									align: 'center',
									verticalAlign: 'middle',
									font: '14px Arial'
								}
							});

							return;
						}

						children.push({
							type: 'rect',
							shape: {
								x,
								y: y - height / 2,
								width: cellWidth,
								height
							},
							style: {
								fill: bg
							}
						});

						children.push({
							type: 'text',
							style: {
								x: x + cellWidth / 2,
								y,
								text: `$${value}`,
								fill: textColor,
								align: 'center',
								verticalAlign: 'middle',
								font: '14px Arial'
							}
						});
					});

					return {
						type: 'group',
						children
					};
				},
				data: productsData.map(item => ({
					value: [0, item.name]
				}))
			}
		],

		graphic: [
			{
				type: 'group',
				left: 40,
				bottom: 40,

				children: [
					makeLegendItem(0, '#000000', 'Запаси'),
					makeLegendItem(30, '#3caf3f', 'у графіку постачання / у Переліку'),
					makeLegendItem(60, '#aaaaaa', 'Дефіцит'),
					makeLegendItem(90, '#ffffff', 'Ціль', true),
					makeLegendItem(120, '#ff8a2a', 'Поверх цілі'),
					makeLegendItem(150, '#ffcc22', 'Разом')
				]
			}
		],
	};

	chart.setOption(option);

	window.addEventListener('resize', () => {
		chart.resize();
	});
}

let chart2Instance = null;
let chart2Option = null;
let chart2Colors = null;

function applyChart2Theme(mode) {
	if (!chart2Instance || !chart2Option || !chart2Colors) return;

	const isDark = mode === 'dark';

	chart2Colors.target = isDark ? '#A5D3EA' : '#111111';
	chart2Colors.text = isDark ? '#D6DDE5' : '#111111';

	chart2Option.yAxis.axisLabel.color = chart2Colors.text;

	chart2Option.graphic.forEach(item => {
		if (item.type === 'text') {
			item.style.fill = chart2Colors.text;
		}

		if (item.type === 'group') {
			item.children.forEach(child => {
				if (child.type === 'text') {
					child.style.fill = chart2Colors.text;
				}

				if (child.type === 'rect' && child.style.stroke !== 'transparent') {
					child.style.stroke = chart2Colors.text;
				}
			});
		}
	});

	chart2Instance.setOption(chart2Option, true);
}

function initChart2(productsData) {
	const chartElement = document.querySelector('#chart2');

	if (!chartElement) return;

	const chart = echarts.init(chartElement);
	chart2Instance = chart;

	const colors = {
		available: '#000000',
		expected: '#4EA52E',
		overPlan: '#F07C32',
		total: '#EBC166',
		needed: '#D2D2D2',
		target: '#111111',
		text: '#111111'
	};

	chart2Colors = colors;

	const maxBarValue = Math.max(
		...productsData.map(item =>
			item.available +
			item.expected +
			item.needed +
			item.overPlan
		)
	);

	function makeLegendItem(x, y, color, text, bordered = false) {
		return {
			type: 'group',
			left: x,
			top: y,
			children: [
				{
					type: 'rect',
					shape: {
						x: 0,
						y: 0,
						width: 14,
						height: 14
					},
					style: {
						fill: color,
						stroke: bordered ? colors.text : 'transparent',
						lineWidth: bordered ? 2 : 0
					}
				},
				{
					type: 'text',
					style: {
						x: 24,
						y: 7,
						text,
						fill: colors.text,
						font: '14px Arial',
						verticalAlign: 'middle'
					}
				}
			]
		};
	}

	const costSummary = ['available', 'expected', 'needed', 'overPlan', 'total'].reduce((acc, key) => {
		acc[key] = productsData.reduce((sum, item) => {
			const value = item.costs[key];

			return sum + (Number(value) || 0);
		}, 0);

		return acc;
	}, {});

	const option = {
		backgroundColor: 'transparent',

		grid: {
			left: 170,
			right: 430,
			top: 170,
			bottom: 100
		},

		tooltip: {
			trigger: 'item',
			formatter(params) {
				const item = params.data.item;

				if (!item) return '';

				return `
					<strong>${item.name}</strong><br/>
					Запаси: ${item.available}<br/>
					У графіку постачання: ${item.expected}<br/>
					Дефіцит: ${item.needed}<br/>
					Поверх цілі: ${item.overPlan}<br/>
					Ціль: ${item.target}<br/>
					Разом наявно: ${item.total}
				`;
			}
		},

		xAxis: {
			type: 'value',
			show: false,
			min: 0,
			max: 2600
		},

		yAxis: {
			type: 'category',
			inverse: true,
			data: productsData.map(item => item.name),
			axisLine: { show: false },
			axisTick: { show: false },
			axisLabel: {
				color: '#111111',
				fontSize: 12,
				fontFamily: 'Arial',
				margin: 18
			}
		},

		series: [
			{
				type: 'custom',

				renderItem(params, api) {
					const item = productsData[params.dataIndex];

					const y = api.coord([0, item.name])[1];
					const x0 = api.coord([0, item.name])[0];
					const targetLineX = api.coord([1000, item.name])[0];

					const barHeight = 28;
					const targetLineWidth = 6;

					const targetWidth = targetLineX - x0;

					const children = [];

					let currentX = x0;

					function addRect(value, color, textColor) {
						if (!value) return;

						const width = Math.max(
							value / item.target * targetWidth,
							10
						);

						children.push({
							type: 'rect',
							shape: {
								x: currentX,
								y: y - barHeight / 2,
								width,
								height: barHeight
							},
							style: {
								fill: color
							}
						});

						children.push({
							type: 'text',
							style: {
								x: currentX + width / 2,
								y,
								text: String(value),
								fill: textColor,
								align: 'center',
								verticalAlign: 'middle',
								font: '12px Arial'
							}
						});

						currentX += width;
					}

					addRect(item.available, colors.available, '#ffffff');
					addRect(item.expected, colors.expected, '#ffffff');
					addRect(item.needed, colors.needed, '#111111');

					if (item.overPlan > 0) {
						const overPlanPadding = 20;
						const realOverPlanWidth = api.size([item.overPlan, 0])[0];

						const overPlanWidth = Math.max(
							realOverPlanWidth + overPlanPadding,
							40
						);

						const overPlanX = targetLineX + targetLineWidth / 2;

						children.push({
							type: 'rect',
							shape: {
								x: overPlanX,
								y: y - barHeight / 2,
								width: overPlanWidth,
								height: barHeight
							},
							style: {
								fill: colors.overPlan
							}
						});

						children.push({
							type: 'text',
							style: {
								x: overPlanX + overPlanWidth / 2 + 10,
								y,
								text: String(item.overPlan),
								fill: '#111111',
								align: 'center',
								verticalAlign: 'middle',
								font: '12px Arial'
							}
						});
					}

					return {
						type: 'group',
						children
					};
				},

				data: productsData.map(item => ({
					value: [item.total, item.name],
					item
				}))
			},

			{
				type: 'custom',
				silent: true,

				renderItem(params, api) {
					const firstItem = productsData[0];
					const lastItem = productsData[productsData.length - 1];

					const x = api.coord([1000, firstItem.name])[0];
					const yTop = api.coord([1000, firstItem.name])[1] - 22;
					const yBottom = api.coord([1000, lastItem.name])[1] + 22;

					return {
						type: 'rect',
						shape: {
							x: x - 3,
							y: yTop,
							width: 6,
							height: yBottom - yTop
						},
						style: {
							fill: colors.target
						},
						z2: 20
					};
				},

				data: [1]
			},

			{
				type: 'custom',
				silent: true,

				renderItem(params, api) {
					const item = productsData[params.dataIndex];

					const y = api.coord([0, item.name])[1];
					const targetLineX = api.coord([1000, item.name])[0];

					return {
						type: 'group',
						children: [
							{
								type: 'rect',
								shape: {
									x: targetLineX - 18,
									y: y - 10,
									width: 36,
									height: 20
								},
								style: {
									fill: '#ffffff',
									stroke: '#111111',
									lineWidth: 2
								},
								z2: 30
							},
							{
								type: 'text',
								style: {
									x: targetLineX,
									y,
									text: String(item.target),
									fill: '#111111',
									align: 'center',
									verticalAlign: 'middle',
									font: '12px Arial'
								},
								z2: 31
							}
						]
					};
				},

				data: productsData.map(item => ({
					value: [item.target, item.name]
				}))
			},

			{
				type: 'custom',

				renderItem(params, api) {
					const item = productsData[params.dataIndex];

					const y = api.coord([0, item.name])[1];

					const width = 50;
					const height = 28;

					const maxBarEndX = api.coord([maxBarValue, item.name])[0];
					const x = maxBarEndX + 60;

					return {
						type: 'group',
						children: [
							{
								type: 'rect',
								shape: {
									x,
									y: y - height / 2,
									width,
									height
								},
								style: {
									fill: colors.total
								}
							},
							{
								type: 'text',
								style: {
									x: x + width / 2,
									y,
									text: String(item.total),
									fill: '#111111',
									align: 'center',
									verticalAlign: 'middle',
									font: '12px Arial'
								}
							}
						]
					};
				},

				data: productsData.map(item => ({
					value: [item.total, item.name]
				}))
			},

			{
				type: 'custom',
				silent: true,

				renderItem(params, api) {
					const item = productsData[params.dataIndex];

					const y = api.coord([0, item.name])[1];

					const cellWidth = 52;
					const gap = 16;
					const columnsCount = 5;
					const rightOffset = 0;

					const totalCostsWidth = columnsCount * cellWidth + (columnsCount - 1) * gap;
					const startX = api.getWidth() - rightOffset - totalCostsWidth;

					const keys = [
						['available', colors.available, '#ffffff'],
						['expected', colors.expected, '#ffffff'],
						['needed', colors.needed, '#111111'],
						['overPlan', colors.overPlan, '#111111'],
						['total', colors.total, '#111111']
					];

					const children = [];

					keys.forEach(([key, bg, textColor], index) => {
						const value = item.costs[key];
						const x = startX + index * (cellWidth + gap);

						if (value === null || value === undefined) {
							children.push({
								type: 'text',
								style: {
									x: x + cellWidth / 2,
									y,
									text: '-',
									fill: '#777777',
									align: 'center',
									verticalAlign: 'middle',
									font: '12px Arial'
								}
							});

							return;
						}

						children.push({
							type: 'rect',
							shape: {
								x,
								y: y - 14,
								width: cellWidth,
								height: 28
							},
							style: {
								fill: bg
							}
						});

						children.push({
							type: 'text',
							style: {
								x: x + cellWidth / 2,
								y,
								text: `$${value}`,
								fill: textColor,
								align: 'center',
								verticalAlign: 'middle',
								font: '12px Arial'
							}
						});
					});

					return {
						type: 'group',
						children
					};
				},

				data: productsData.map(item => ({
					value: [0, item.name]
				}))
			},

			{
				type: 'custom',
				silent: true,

				renderItem(params, api) {
					const cellWidth = 52;
					const gap = 16;
					const columnsCount = 5;
					const rightOffset = 0;

					const totalCostsWidth = columnsCount * cellWidth + (columnsCount - 1) * gap;
					const startX = api.getWidth() - rightOffset - totalCostsWidth;

					return {
						type: 'text',
						style: {
							x: startX + totalCostsWidth / 1.2,
							y: 160,
							text: 'млрд дол. США',
							fill: colors.text,
							align: 'center',
							verticalAlign: 'middle',
							font: 'bold 12px Arial'
						}
					};
				},

				data: [1]
			},

			{
				type: 'custom',
				silent: true,

				renderItem(params, api) {
					const x = api.coord([1000, productsData[0].name])[0];

					return {
						type: 'text',
						style: {
							x,
							y: 160,
							text: 'Ціль',
							fill: colors.text,
							align: 'center',
							verticalAlign: 'middle',
							font: '12px Arial'
						}
					};
				},

				data: [1]
			},

			{
				type: 'custom',
				silent: true,

				renderItem(params, api) {
					const cellWidth = 52;
					const gap = 16;
					const columnsCount = 5;
					const rightOffset = 0;

					const totalCostsWidth = columnsCount * cellWidth + (columnsCount - 1) * gap;
					const startX = api.getWidth() - rightOffset - totalCostsWidth;

					const lastItem = productsData[productsData.length - 1];
					const lastY = api.coord([0, lastItem.name])[1];

					const lineY = lastY + 30;
					const summaryY = lineY + 34;

					const keys = [
						['available', colors.available, '#ffffff'],
						['expected', colors.expected, '#ffffff'],
						['needed', colors.needed, '#111111'],
						['overPlan', colors.overPlan, '#111111'],
						['total', colors.total, '#111111']
					];

					const children = [
						{
							type: 'line',
							shape: {
								x1: startX,
								y1: lineY,
								x2: startX + totalCostsWidth,
								y2: lineY
							},
							style: {
								stroke: colors.text,
								lineWidth: 2
							}
						}
					];

					keys.forEach(([key, bg, textColor], index) => {
						const x = startX + index * (cellWidth + gap);
						const value = costSummary[key];

						children.push({
							type: 'rect',
							shape: {
								x,
								y: summaryY - 14,
								width: cellWidth,
								height: 28
							},
							style: {
								fill: bg
							}
						});

						children.push({
							type: 'text',
							style: {
								x: x + cellWidth / 2,
								y: summaryY,
								text: `$${value.toFixed(1)}`,
								fill: textColor,
								align: 'center',
								verticalAlign: 'middle',
								font: '12px Arial'
							}
						});
					});

					return {
						type: 'group',
						children
					};
				},

				data: [1]
			}
		],

		graphic: [
			{
				type: 'text',
				left: 40,
				top: 112,
				style: {
					text: 'Кількість продуктів, запланованих на закупівлю\nу 2026 році, тис. од',
					fill: colors.text,
					font: '12px Arial',
					lineHeight: 17
				}
			},

			makeLegendItem(320, 78, colors.available, 'Запаси'),
			makeLegendItem(320, 104, colors.expected, 'У графіку постачання'),
			makeLegendItem(320, 130, colors.needed, 'Дефіцит'),

			makeLegendItem(560, 78, '#ffffff', 'Ціль', true),
			makeLegendItem(560, 104, colors.overPlan, 'Поверх цілі'),
			makeLegendItem(560, 130, colors.total, 'Разом наявно')
		]
	};

	chart2Option = option;
	chart.setOption(option);

	window.addEventListener('resize', () => {
		chart.resize();
	});
}

initCharts();

document.querySelectorAll('.tab[data-mode]').forEach(tab => {
	tab.addEventListener('click', () => {
		const mode = tab.dataset.mode;

		document.body.classList.remove('light', 'dark');
		document.body.classList.add(mode);

		document.querySelectorAll('.tab[data-mode]').forEach(item => {
			item.classList.toggle('active', item === tab);
		});

		applyChart2Theme(mode);
	});
});