var personal;

personal = new Vue({
  el: '#personal',
  data: {
    currentHash: location.hash || ''
  },
  methods: {}
});

$(window).on('hashchange', function() {
  personal.currentHash = location.hash;
});
