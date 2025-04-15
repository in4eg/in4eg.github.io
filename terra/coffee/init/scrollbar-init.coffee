containers = $('[data-scrollbar]')

for container in containers
	ps = new PerfectScrollbar(container, {
		suppressScrollX: on
		})