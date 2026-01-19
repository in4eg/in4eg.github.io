class CopyToClipboard {

	constructor(button) {
		this.button = button;
		this.copied = false;
		this.copiedId = '';

		this.button.addEventListener('click', () => {
			const value = this.button.dataset.clipboardCopy;
			if (!value) return;

			this.copyValue(value);
		});
	}

	copyValue(val) {
		const textarea = document.createElement('textarea');

		textarea.value = val;
		textarea.setAttribute('readonly', '');
		textarea.style.position = 'fixed';
		textarea.style.top = '-9999px';
		textarea.style.left = '-9999px';

		document.body.appendChild(textarea);
		textarea.select();

		try {
			document.execCommand('copy');
			this.copied = true;
			this.copiedId = val;
			this.button.classList.add('tooltip-show');
		} catch (e) {
			console.error('Copy failed', e);
		}

		document.body.removeChild(textarea);

		setTimeout(() => {
			this.copied = false;
			this.button.classList.remove('tooltip-show');
			this.copiedId = '';
		}, 350);
	}
}

document.addEventListener('DOMContentLoaded', () => {
	document.querySelectorAll('[data-clipboard-copy]').forEach(button => {
		new CopyToClipboard(button);
	});
});
