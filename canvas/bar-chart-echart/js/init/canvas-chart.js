async function loadData() {
	const response = await fetch('./data.json');
	const productsData = await response.json();

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
			bottom: 40
		},

		tooltip: {
			trigger: 'item',
			formatter(params) {
				return params.data.tooltip || '';
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
					const xTarget = api.coord([item.target, item.name])[0];

					const barHeight = 28;
					const targetLineWidth = 12;
					const overPlanWidth = api.size([item.overPlan, 0])[0];

					const children = [];
					let currentX = x0;

					function addRect(value, color, textColor) {
						if (!value) return;

						const width = api.size([value, 0])[0];

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
								x: xTarget + targetLineWidth,
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
								x: xTarget + targetLineWidth + overPlanWidth / 2,
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
					tooltip: `${item.name}: ${Math.round(item.total / item.target * 100)}%`
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
					const xTarget = api.coord([item.target, item.name])[0];

					const labelWidth = 42;
					const labelHeight = 20;

					return {
						type: 'group',

						children: [
							{
								type: 'rect',

								shape: {
									x: xTarget - labelWidth / 2,
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
									x: xTarget,
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
					const x = api.coord([1450, item.name])[0];

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
		]
	};

	chart.setOption(option);

	window.addEventListener('resize', () => {
		chart.resize();
	});
}

loadData();