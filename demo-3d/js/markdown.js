String.prototype.markdown = function(options){
	if (!options) {
		options = {list: {}};
	}
	// console.log(options.list.prefix);
	let reg = {
		h1: /^# (.)+$/gim,
		h2: /^#{2,2} (.)+$/gim,
		h3: /^#{3,3} (.)+$/gim,
		h4: /^#{4,4} (.)+$/gim,
		h5: /^#{5,5} (.)+$/gim,
		or: /\-{2}(.*?)\-{2}/gim,
		hTag: /(\#|\# )/gim,
		bold: /(?<!\*|\\\*)\*{2,2}[^\*\n].*?[^\*]\*{2,2}(?!\*|\\)/gim,
		boldTag: /\*\*/gim,
		italic: /((?<!\*|\\)\*[^\*\n].+?[^\*|\\]\*(?!\*))/gim, //|(_.+?_)
		italicTag: /(\*|\_)/gim,
		underlined: /(^|[^_])_(?!_)((?:[^]*?[^_])?)_(?!_)/gim,
		underlinedTag: /(\*|\_)/gim,
		monospace: /`[^`]*`/gim,
		monospaceTag: /\`/gim,
		mark: /@([^@]*)@/gim,
		listNumber: /(^\d{1,3}\. .*$)+|(^ {1,10}\d{1,3}\. .*$)+/gim,
		list: /(^(\+|-) .*$)+/gim,
		listTag: /(\+ |\- )/gim,
		listOpen: /\[(ol|ul)\]/gim,
		listClose: /\[(\/ol|\/ul)\]/gim,
		blockquote: /^>{1,1} (.)+$/gim,
		blockquoteTag: /^>{1,1} /gim,
		link: /\[([^\[\]]*?)\]\((.*?)\)/gim,
		image: /!\[([^\[\]]*?)\]\((.*?)\)/gim,
		scrollTo: /\>([^\{\}]*?)\>\{(.*?)\}/gim,
		mouseOver: /\^([^\{\}]*?)\^\{(.*?)\}/gim,
		icon: /\{([^\{\}]*?)\}\((.*?)\)/gim,
		color: /\(color\:(.*?)\)(.*?)\(color\:(.*?)\)/gim,
		dlTag: /^(.*?)\|(.*?)$/gim
	};
	let result = this;
	result = result.replace(/\n(?!\<\/{0,1}(ul|li|ol|blockquote|p|hr|div|figure|img|h1|h2|h3|h4)(.*?)\>)/gim, "<br>");

	// h1-h4
	["h5", "h4", "h3", "h2", "h1"].map((tag)=> {
		result = result.replace(reg[tag], function(found) {
			return `<${tag}>${found.replace(reg.hTag, "")}</${tag}>`;
		});
	});
	// or
	result = result.replace(reg.or, function(found) {
		return `<span class="or"><span>${found.replace(/\-/gim, "")}</span></span>`;
	});

	// lists
	result = result.replace(reg.listOpen, function(found) {
		return `${found.replace(/\[/gim, "<").replace(/\]/gim, ">")}`;
	});
	result = result.replace(reg.listClose, function(found) {
		return `${found.replace(/\[/gim, "<").replace(/\]/gim, ">")}`;
	});
	result = result.replace(reg.listNumber, function(found) {
		return `<li ${options.list.prefix ? `data-prefix="${options.list.prefix}"` : ''}>${found}</li>`;
	});
	result = result.replace(reg.list, function(found) {
		return `<li ${options.list.prefix ? `data-prefix="${options.list.prefix}"` : ''}>${found.replace(reg.listTag, "")}</li>`;
	});
	//blockquote
	result = result.replace(reg.blockquote, function(found) {
		return `<blockquote>${found.replace(reg.blockquoteTag, "")}</blockquote>`;
	});
	// images
	result = result.replace(reg.image, "<figure><img src='$1'/><figcaption>$2</figcaption></figure>");
	// links
	result = result.replace(reg.link, "<a href='$1' target='_blank'>$2</a>");
	// bold, italic, monospace
	result = result.replace(reg.bold, function(found) {
		// console.log(found);
		return `<b>${found.replace(reg.boldTag, "")}</b>`;
	});
	result = result.replace(reg.italic, function(found) {
		return `<i>${found.replace(reg.italicTag, "")}</i>`;
	});

	// scrollTo
	result = result.replace(reg.scrollTo, '<span scroll-to="$1">$2</span>');
	// mouseOver
	// result = result.replace(reg.mouseOver, '<span mouse-over="$1" mouse-out="$1">$2</span>');
	// icon
	result = result.replace(reg.icon, (a, b, c)=> {
		// console.log(a, b, c);
		let subfolder = b.match(/\/(?!.*?\/).*?$/) ? true : false;
		return `<span class="icon-caption"><img src="assets/img/${!subfolder ? 'icons/svg/' : ''}${b}.svg" class="icon"><span>${c}</span></span>`;
	});

	// result = result.replace(reg.underlined, function(found) {
	// 	return `<u>${found.replace(reg.underlinedTag, "")}</u>`;
	// });
	result = result.replace(reg.monospace, function(found) {
		return `<span class="m-mono">${found.replace(reg.monospaceTag, "")}</span>`;
	});
	//mark
	result = result.replace(reg.mark, '<mark>$1</mark>');
	// br, hr
	// result = result.replace(/\n\n/gim, '<br><br>');
	result = result.replace(/\-\-\-/gim, '<hr>');
	// console.log(result);

	// color
	result = result.replace(reg.color, "<span class=\"color-$1\">$2</span>");

	// <dl>
	result = result.replace(reg.dlTag, function(found) {
		let dt = found.split('|') ? found.split('|')[0] : "";
		let dd = (found.split('|') ? found.split('|')[1] : "").split(',');
		let dl = `<dl>`;
		dl += `<dt>${dt}</dt>`;
		for (let i = 0; i < dd.length; i++){
			dl += `<dd>${dd[i]}</dd>`;
		}
		dl += `</dl>`;
		return dl;
	});


	return result;
};
