if (callBack) {
  callBack();
}

$.ajax({
  url: $(bar).data('url'),
  dataType: 'json',
  type: 'get',
  error: function(data, textStatus, errorThrown) {
    console.log(errorThrown);
  },
  success: function(data) {
    var completePercent, minVal, num, valArr, value;
    console.log('progress.json loaded');
    if (data.length > 0) {
      console.log('progress result founded');
      console.log(data[0].progress.percent);
      completePercent = data[0].progress.percent;
      console.log(completePercent);
      $(bar).data('complete', data[0].progress.percent).attr('data-complete', data[0].progress.percent);
      valArr = [];
      for (value in data[0].progress.category) {
        valArr.push(data[0].progress.category[value]);
      }
      minVal = Math.min.apply(null, valArr);
      for (num in data[0].progress.category) {
        if (data[0].progress.category[num] === minVal) {
          $(document).find('[data-' + num + ']').siblings().removeClass('active');
          $(document).find('[data-' + num + ']').addClass('active');
        }
      }
    } else {
      console.log('no-result in progress');
    }
  }
});

console.log(completePercent);
