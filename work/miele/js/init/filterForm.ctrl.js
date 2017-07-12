var filterForm;

filterForm = new Vue({
  el: '#filterForm',
  data: {},
  methods: {}
});

$('.checkbox-holder input').click(function(e) {
  $(this).closest('li').find('ul').find('input').prop('checked', $(this).prop('checked'));
});

$('#filterForm').on('reset', function() {
  $('.range-slider', this).each(function(i, range) {
    var data, max, min;
    if (!$(range).data('options')) {
      return;
    }
    data = JSON.parse($(range).data('options').toString().replace(/\'/gim, '"'));
    min = $(range).siblings('.inputs').find('.input').eq(0);
    max = $(range).siblings('.inputs').find('.input').eq(1);
    if (range.slider) {
      range.slider.set([data.start[0], data.start[1]]);
      setTimeout(function() {
        min.val(data.start[0]);
        return max.val(data.start[1]);
      }, 1);
    }
  });
});
