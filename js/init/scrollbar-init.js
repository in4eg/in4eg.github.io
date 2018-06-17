var container, containers, i, len, ps;

containers = $('[data-scrollbar]');

for (i = 0, len = containers.length; i < len; i++) {
  container = containers[i];
  ps = new PerfectScrollbar(container, {
    suppressScrollX: true
  });
}
