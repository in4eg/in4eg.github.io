var container, containerHeight, defaultFirstItem, defaultLastItem, intervalSec, items, moveDown, moveUp, numberVisible, recordingStart, x;

recordingStart = $('#recordingStart')[0];


/* SLIDER */

x = 0;

container = $('.desktop-slider .interview-slider-container');

items = container.find('li');

containerHeight = 0;

numberVisible = 7;

intervalSec = 900;

defaultFirstItem = container.find('li:last');

defaultLastItem = container.find('li:first');

moveUp = function() {
  var blockHeight, firstItem;
  if ($('#interviewSliderNext').hasClass('controller-disabled')) {
    $('#interviewSliderNext').removeClass('controller-disabled');
  }
  blockHeight = void 0;
  firstItem = void 0;
  $('#interviewSliderPrev').removeAttr('onclick');
  firstItem = container.find('li.first');
  blockHeight = firstItem.outerHeight();
  if (firstItem.hasClass('slider-item-done')) {
    if (firstItem.hasClass('selected')) {
      container.append('<li class = "slider-item slider-item-done selected">' + firstItem.html() + '</li>');
    } else {
      container.append('<li class = "slider-item slider-item-done">' + firstItem.html() + '</li>');
    }
  } else if (firstItem.hasClass('slider-item-rec')) {
    if (firstItem.hasClass('selected')) {
      container.append('<li class = "slider-item slider-item-rec selected">' + firstItem.html() + '</li>');
    } else {
      container.append('<li class = "slider-item slider-item-rec">' + firstItem.html() + '</li>');
    }
  } else {
    if (firstItem.hasClass('selected')) {
      container.append('<li class="slider-item selected">' + firstItem.html() + '</li>');
    } else {
      container.append('<li class="slider-item">' + firstItem.html() + '</li>');
    }
  }
  firstItem = '';
  container.find('li.first').animate({
    marginTop: '-' + blockHeight + 'px'
  }, 300, function() {
    $(this).remove();
    container.find('li:first').addClass('first');
    container.find('li.last').removeClass('last');
    container.find('li:last').addClass('last');
    $('#interviewSliderPrev').attr('onclick', 'moveUp()');
    container.find('.odd-inversed').removeClass('odd-inversed');
    container.find('.even-inversed').removeClass('even-inversed');
    container.find('.last').on('click', function() {
      if ($(this).hasClass('selected')) {
        return;
      } else {
        $('.selected').removeClass('selected');
      }
      $(this).addClass('selected');
    });
  });
  container.find('li:nth-child(odd)').addClass('odd-inversed');
  container.find('li:nth-child(even)').addClass('even-inversed');
};

moveDown = function() {
  var blockHeight, lastItem;
  if ($('#interviewSliderPrev').hasClass('controller-disabled')) {
    $('#interviewSliderPrev').removeClass('controller-disabled');
  }
  blockHeight = void 0;
  lastItem = void 0;
  $('#interviewSliderNext').removeAttr('onclick');
  lastItem = container.find('li.last');
  blockHeight = lastItem.outerHeight();
  if (lastItem.hasClass('slider-item-done')) {
    if (lastItem.hasClass('selected')) {
      container.prepend('<li class="slider-item slider-item-done selected" style="margin-top: -' + blockHeight + 'px;">' + lastItem.html() + '</li>');
    } else {
      container.prepend('<li class="slider-item slider-item-done" style="margin-top: -' + blockHeight + 'px;">' + lastItem.html() + '</li>');
    }
  } else if (lastItem.hasClass('slider-item-rec')) {
    if (lastItem.hasClass('selected')) {
      container.prepend('<li class="slider-item slider-item-rec selected" style="margin-top: -' + blockHeight + 'px;">' + lastItem.html() + '</li>');
    } else {
      container.prepend('<li class="slider-item slider-item-rec" style="margin-top: -' + blockHeight + 'px;">' + lastItem.html() + '</li>');
    }
  } else {
    if (lastItem.hasClass('selected')) {
      container.prepend('<li class="slider-item selected" style="margin-top: -' + blockHeight + 'px;">' + lastItem.html() + '</li>');
    } else {
      container.prepend('<li class="slider-item" style="margin-top: -' + blockHeight + 'px;">' + lastItem.html() + '</li>');
    }
  }
  lastItem = '';
  container.find('li:first').animate({
    marginTop: '5px'
  }, 300, function() {
    $('li.last').remove();
    container.find('li:last').addClass('last');
    container.find('li.first').removeClass('first');
    container.find('li:first').addClass('first');
    $('#interviewSliderNext').attr('onclick', 'moveDown()');
    container.find('.first').on('click', function() {
      if ($(this).hasClass('selected')) {
        return;
      } else {
        $('.selected').removeClass('selected');
      }
      $(this).addClass('selected');
    });
  });
};

if (!container.find('li:first').hasClass('first')) {
  container.find('li:first').addClass('first');
}

if (!container.find('li:last').hasClass('last')) {
  container.find('li:last').addClass('last');
}

items.each(function() {
  if (x < numberVisible) {
    containerHeight = containerHeight + $(this).outerHeight() - 4;
    x++;
  }
});

container.css({
  height: containerHeight,
  overflow: 'hidden'
});

$('.slider-item').on('click', function() {
  if ($(this).hasClass('selected')) {
    return;
  } else {
    $('.selected').removeClass('selected');
  }
  $(this).addClass('selected');
  $(recordingStart).parent().removeAttr('data-tooltip');
});

$('#interviewSliderPrev').attr('onclick', 'moveUp()');

$('#interviewSliderNext').attr('onclick', 'moveDown()');


/* influence to video record bar */

$('.slider-item').on('click', function() {
  if (recordingStart) {
    $(recordingStart).removeClass('btn-control');
    return recordingStart.disabled = false;
  }
});
