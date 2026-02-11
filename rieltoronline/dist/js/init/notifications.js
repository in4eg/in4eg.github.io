document.addEventListener("DOMContentLoaded", function () {

	let notificationJson = JSON.stringify([
		{
			"title": "Повідомлення на розгляді",
			"message": "Дякуємо! Ваше повідомлення прийнято та буде розглянуто найближчим часом",
			"status": "progress",
			"readed": false,
			"object": {
				"id": 1213,
				"title": "ЖК Рідний дім",
				"address": "Вулиця Всеволода Змієнка, будинок 34/21"
			}
		},
		{
			"title": "Повідомлення розглянуто",
			"message": "Вам буде повернуто 1 перегляд протягом 24 годин",
			"status": "success",
			"readed": false,
			"object": {
				"id": 1222,
				"title": "ЖК Республіка",
				"address": "Вулиця Всеволода Змієнка, будинок 34/21"
			}
		},
		{
			"title": "Повідомлення розглянуто",
			"message": "Перегляд повернуто не буде. Об'єкт доступний",
			"status": "declined",
			"readed": false,
			"object": {
				"id": 1233,
				"title": "ЖК Рівер Таун",
				"address": "Вулиця Всеволода Змієнка, будинок 34/21"
			}
		},
		{
			"title": "Замовлення успішно оплачено",
			"message": "Доступно 1 перегляд на 30 днів. Тариф \"Старт\"",
			"status": "success",
			"readed": true,
			"object": null
		}
	]);

	class Notification {
		constructor(data) {
			this.title = data.title;
			this.message = data.message;
			this.status = data.status;
			this.readed = data.readed;
			this.object = data.object;
		}
		markAsRead() {
			this.readed = true;
		}
	}

	class NotificationManager {
		constructor(jsonString) {
			const parsed = JSON.parse(jsonString);
			this.notifications = parsed.map(item => new Notification(item));
		}
		getAll() {
			return this.notifications;
		}
		getUnread() {
			return this.notifications.filter(n => !n.readed);
		}
		markAsRead(notification) {
			notification.markAsRead();
		}
		markAllAsRead() {
			this.notifications.forEach(n => n.markAsRead());
		}
	}

	const manager = new NotificationManager(notificationJson);

	const listEl = document.querySelector(".notifications .inner");
	const counterEl = document.querySelector(".notifications .counter");
	const bellBtn = document.querySelector(".favourites-link.round-link");
	const markAllBtn = document.getElementById("markAllReadBtn");

	let readQueue = [];
	let readTimeout = null;

	function queueNotificationRead(notification) {

		const id = notification.object?.id || notification.title;

		if (!readQueue.includes(id)) {
			readQueue.push(id);
		}

		if (readTimeout) clearTimeout(readTimeout);

		readTimeout = setTimeout(() => {
			flushReadQueue();
		}, 800);
	}

	function flushReadQueue() {

		if (readQueue.length === 0) return;

		const ids = [...readQueue];
		readQueue = [];

		console.log("SEND BATCH TO BACKEND:", ids);

		fetch("/api/notifications/read", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ ids: ids })
		}).catch(err => console.error(err));
	}

	function renderNotifications() {

		if (!listEl) return;

		listEl.innerHTML = "";

		const all = manager.getAll();

		if (all.length === 0) {
			listEl.innerHTML = `<div class="empty-message">Сповіщень немає</div>`;
		} else {

			all.forEach(n => {

				const item = document.createElement("div");
				item.className = `notification-item ${n.status}`;
				if (n.readed) item.classList.add("readed");

				item.innerHTML = `
					<div class="title-cover">
						<div class="title">${n.title}</div>
						<span class="button-icon">
							<i class="icon ${getIcon(n.status)}"></i>
						</span>
					</div>
					${n.object ? renderObject(n.object) : ""}
					<div class="text">${n.message}</div>
				`;

				item.addEventListener("click", function (e) {

					e.stopPropagation();

					if (!n.readed) {
						manager.markAsRead(n);
						queueNotificationRead(n);
						renderNotifications();
					}

				});

				listEl.appendChild(item);
			});
		}

		updateCounter();
	}

	function updateCounter() {

		if (!counterEl || !bellBtn || !markAllBtn) return;

		const unread = manager.getUnread().length;

		if (unread > 0) {
			counterEl.style.display = "inline-block";
			counterEl.textContent = unread;
			bellBtn.classList.add("active");
			markAllBtn.classList.remove("disabled");
		} else {
			counterEl.style.display = "none";
			bellBtn.classList.remove("active");
			markAllBtn.classList.add("disabled");
		}
	}


	function renderObject(object) {
		return `
			<div class="object-preview horizontal smaller filter-item">
				<figure class="object-image">
					<img src="img/temp/obj1.jpg" draggable="false" alt="">
				</figure>
				<div class="caption">
					<h3 class="item-title object-title">${object.title} (id:${object.id})</h3>
					<div class="description">
						<div class="line item-description">${object.address}</div>
					</div>
				</div>
			</div>
		`;
	}

	function getIcon(status) {
		switch (status) {
			case "success": return "icon-check";
			case "progress": return "icon-refresh";
			case "declined": return "icon-cross";
			default: return "icon-bell";
		}
	}

	if (markAllBtn) {

		markAllBtn.addEventListener("click", function (e) {
			e.stopPropagation();
			const unreadNotifications = manager.getUnread();

			if (unreadNotifications.length === 0) return;

			manager.markAllAsRead();

			const ids = unreadNotifications.map(n => n.object?.id || n.title);

			console.log("SEND READ ALL:", ids);

			fetch("/api/notifications/read-all", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ ids: ids })
			}).catch(err => console.error(err));

			renderNotifications();

		});
	}

	renderNotifications();

});
