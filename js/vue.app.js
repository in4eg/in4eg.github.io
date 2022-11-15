const AJAX = {
	load: function(url){
		let promise = new Promise((resolve, reject)=> {
			const xhttp = new XMLHttpRequest();
			xhttp.onload = function(data){
				resolve(JSON.parse(data.target.response));
			}
			xhttp.onerror = function(){
				reject();
			}
			xhttp.open("GET", url);
			xhttp.send();

		});

		return promise;
	}
}
let data = [];
let lang = {};

let L = function(key){
	// console.log(lang, key);
	return lang[key];
};



AJAX.load('localization.json').then((_lang)=> {
	// console.log(_lang);
	lang = _lang;

	AJAX.load('data.json').then((_data)=> {
		_data = _data.reverse();
		_data = _data.sort((a, b)=> a.available - b.available);
		data = _data;
		// app.items = data;
		renderFilter();
		renderList();
	});
});


function renderFilter(){
	let countries = ["ger", "rus", "ukr", "usa", "eng", "ita", "isr"];
	let html = `
		<input type="radio" checked id="all" name="filter">
		<label for="all">
			<span class="scale">${L('nation.all')}</span>
			<span class="count">${data.length}</span>
			<span class="border"><span></span><span></span></span>
		</label>
	`;

	function getCount(nation){
		return data.filter(item => item.nation === nation).length;
	}

	for (let i = 0; i < countries.length; i++){
		let code = countries[i];
		let count = getCount(code);
		html += `
			<input type="radio" id="${code}" name="filter" class="${count <= 0 ? 'disabled' : ''}">
			<label for="${code}" class="${count <= 0 ? 'disabled' : ''}">
				<span class="scale">${L('nation.'+code)}</span>
				<span class="count">${count}</span>
				<span class="border"><span></span><span></span></span>
			</label>
		`;
	}
	document.querySelector('#flag_filter').innerHTML = html;
	setTimeout(()=> {
		[].slice.call(document.querySelectorAll('input[name="filter"]')).map((node)=> {
			node.addEventListener('input', ()=> {
				document.querySelector('#dropdownButton').innerHTML = L('nation.'+node.id);
				document.querySelector('#dropdownButton').classList.remove('active');
				renderList();
			});
		});
	}, 10);
}

document.querySelector('#dropdownButton').addEventListener('click', (e)=> {
	let button = e.target.closest('button');
	let nav = document.querySelector('.flag-filter');
	if (button.classList.contains('active')){
		button.classList.remove('active');
	} else {
		let bbox = button.getBoundingClientRect();
		nav.classList.add("hidden");
		nav.style.width = bbox.width+"px";
		nav.style.height = bbox.height+"px";
		nav.style.top = bbox.top+"px";
		nav.style.left = bbox.left+"px";
		setTimeout(()=> {
			button.classList.add('active');
		});
		setTimeout(()=> {
			nav.classList.remove("hidden");
		}, 300);
	}
});
document.body.addEventListener('click', (e)=> {
		if (!e.target.closest('.dropdown label')){
			document.querySelector('#dropdownButton').classList.remove('active');
		}
});

function renderList(){
	let items = data;
	let html = `
		<div class="container">
			<ul class="clear">
	`;

	for (let i = 0; i < data.length; i++){
		let item = items[i];
		let checkbox = document.querySelector("#"+item.nation);
		if (!document.querySelector('#all').checked){
			if (!checkbox || !checkbox.checked){
				continue;
			}
		}
		html += `
			<li>
				<a href="detail.html#${item.id}" class="card ${item.available ? '' : 'disabled'}">
					<figure>
						<img src="thumb/${item.id}.png" alt="${item.id}" loading id="img_${item.id}">
					</figure>
					<span class="border"><span></span><span></span></span>
					<h3 title="Name">${L(item.id+'.name')}</h3>
				</a>
			</li>`;
			// 					<span class="price" title="Price">${item.price ? item.price+"€" : L('buy.free')}</span>

	}
	html += `
		</ul>
	</div>`;

	document.querySelector('#catalog').innerHTML = html;


	[].slice.call(document.querySelectorAll('[id*="img_"]')).map(img => {
		img.addEventListener('load', ()=> {
			img.classList.add('loaded');
		});
	});
}
