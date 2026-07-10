const waitForFinalEvent = (function () {
	const timers = {};
	return function (callback, ms, uniqueId) {
		if (!uniqueId) {
			uniqueId = "Don't call this twice without a uniqueId";
		}
		if (timers[uniqueId]) {
			clearTimeout(timers[uniqueId]);
		}
		timers[uniqueId] = setTimeout(callback, ms);
	};
})();

class SimpleFireworks {
	constructor(canvas, options = {}) {
		this.canvas = canvas;
		this.ctx = canvas.getContext('2d');

		this.options = Object.assign({
			fireNumber: 10,
			range: 100
		}, options);

		this.listFire = [];
		this.listFirework = [];
		this._rafId = null;
		this._running = false;

		this._onResize = this._onResize.bind(this);
		this._loop = this._loop.bind(this);

		this.resize();
		window.addEventListener('resize', this._onResize);

		this._initFires();
	}

	resize() {
		this.canvas.width = window.innerWidth;
		this.canvas.height = window.innerHeight;
		this._clear();
	}

	_onResize() {
		this.resize();

		waitForFinalEvent(() => {
			this._initFires();
			this.listFirework = [];
		}, 200, 'simple-fireworks-resize');
	}

	_clear() {
		this.ctx.fillStyle = '#000';
		this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
	}

	_initFires() {
		const { fireNumber, range } = this.options;
		const center = { x: this.canvas.width / 2, y: this.canvas.height / 2 };

		this.listFire = [];
		for (let i = 0; i < fireNumber; i++) {
			const fire = {
				x: Math.random() * range / 2 - range / 4 + center.x,
				y: Math.random() * range * 2 + this.canvas.height,
				size: Math.random() + 0.5,
				fill: '#fd1',
				vx: Math.random() - 0.5,
				vy: -(Math.random() + 4),
				ax: Math.random() * 0.02 - 0.01,
				far: Math.random() * range + (center.y - range)
			};
			fire.base = { x: fire.x, y: fire.y, vx: fire.vx };
			this.listFire.push(fire);
		}
	}

	static randColor() {
		const r = Math.floor(Math.random() * 256);
		const g = Math.floor(Math.random() * 256);
		const b = Math.floor(Math.random() * 256);
		return `rgb(${r}, ${g}, ${b})`;
	}

	update() {
		const { fireNumber, range } = this.options;

		for (const fire of this.listFire) {
			if (fire.y <= fire.far) {
				const color = SimpleFireworks.randColor();
				for (let i = 0; i < fireNumber * 5; i++) {
					const firework = {
						x: fire.x,
						y: fire.y,
						size: Math.random() + 1.5,
						fill: color,
						vx: Math.random() * 5 - 2.5,
						vy: Math.random() * -5 + 1.5,
						ay: 0.05,
						alpha: 1,
						life: Math.round(Math.random() * range / 2) + range / 2
					};
					firework.base = { life: firework.life, size: firework.size };
					this.listFirework.push(firework);
				}

				// reset fire trail
				fire.y = fire.base.y;
				fire.x = fire.base.x;
				fire.vx = fire.base.vx;
				fire.ax = Math.random() * 0.02 - 0.01;
			}

			fire.x += fire.vx;
			fire.y += fire.vy;
			fire.vx += fire.ax;
		}

		for (let i = this.listFirework.length - 1; i >= 0; i--) {
			const firework = this.listFirework[i];
			firework.x += firework.vx;
			firework.y += firework.vy;
			firework.vy += firework.ay;
			firework.alpha = firework.life / firework.base.life;
			firework.size = firework.alpha * firework.base.size;
			firework.alpha = firework.alpha > 0.6 ? 1 : firework.alpha;

			firework.life--;
			if (firework.life <= 0) {
				this.listFirework.splice(i, 1);
			}
		}
	}

	draw() {
		const ctx = this.ctx;
		const canvas = this.canvas;

		// затухання попереднього кадру
		ctx.globalCompositeOperation = 'source-over';
		ctx.globalAlpha = 0.18;
		ctx.fillStyle = '#000';
		ctx.fillRect(0, 0, canvas.width, canvas.height);

		// перемальовка частинок
		ctx.globalCompositeOperation = 'screen';
		ctx.globalAlpha = 1;

		for (const fire of this.listFire) {
			ctx.beginPath();
			ctx.arc(fire.x, fire.y, fire.size, 0, Math.PI * 2);
			ctx.closePath();
			ctx.fillStyle = fire.fill;
			ctx.fill();
		}

		for (const firework of this.listFirework) {
			ctx.globalAlpha = firework.alpha;
			ctx.beginPath();
			ctx.arc(firework.x, firework.y, firework.size, 0, Math.PI * 2);
			ctx.closePath();
			ctx.fillStyle = firework.fill;
			ctx.fill();
		}
	}

	/* ─── lifecycle ─────────────────────────────────────── */
	_loop() {
		if (!this._running) return;
		this._rafId = requestAnimationFrame(this._loop);
		this.update();
		this.draw();
	}

	start() {
		if (this._running) return;
		this._running = true;
		this._clear();
		this._rafId = requestAnimationFrame(this._loop);
	}

	stop() {
		this._running = false;
		if (this._rafId) cancelAnimationFrame(this._rafId);
		this._rafId = null;
	}

	destroy() {
		this.stop();
		window.removeEventListener('resize', this._onResize);
	}
}

if (typeof module !== 'undefined' && module.exports) {
	module.exports = SimpleFireworks;
} else {
	window.SimpleFireworks = SimpleFireworks;
}

document.addEventListener('DOMContentLoaded', () => {
	const canvas = document.getElementById('canvas');
	if (canvas) {
		new SimpleFireworks(canvas).start();
	}
});